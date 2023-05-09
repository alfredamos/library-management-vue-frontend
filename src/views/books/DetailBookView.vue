<script setup lang="ts">
import { useFetch } from "@/composables/useFetch";
import { bookUrl } from "@/urls/book.url";
import { useRoute} from "vue-router";
import LinkButton from "@/utils/LinkButton.vue";
import type ListBookDto from "@/models/books/list-book.model";
import moment from "moment"

const { id } = useRoute().params;

const url = `${bookUrl}/${id}`;

const { resource: book } = useFetch<ListBookDto>(url);
console.log("In detail-book, book : ", book.value);

</script>

<template>
  <div class="border pado">
    <div class="card">
      <div class="card-header">
        <h4 class="text-center">Book Detail</h4>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ISBN: <strong>{{ book?.isbn }}</strong></li>          
          <li class="list-group-item">Title: <strong>{{ book?.title }}</strong></li>          
          <li class="list-group-item">Author: <strong>{{ book?.author?.name }}</strong></li>          
          <li class="list-group-item">Category: <strong>{{ book?.category?.name }}</strong></li>          
          <li class="list-group-item">Edition: <strong>{{ book?.edition }}</strong></li>          
          <li class="list-group-item">Volume: <strong>{{ book?.volume }}</strong></li>          
          <li class="list-group-item">Publisher: <strong>{{ book?.publisher }}</strong></li>          
          <li class="list-group-item">Pub. Date: <strong>{{ moment(book?.dateOfPublication).format('MMMM DD YYYY') }}</strong></li>          
          <li class="list-group-item">Quantity: <strong>{{ book?.quantity }}</strong></li>          
        </ul>
      </div>
      <div class="card-footer">
            <link-button
            link-name="Back"
            link-to="/books"
            link-display="outline-secondary"
            :is-form-control="true"
          
            />
      </div>
    </div>
  </div>
</template>

<style scoped>
.pado {
  padding: 10px;
}
</style>
