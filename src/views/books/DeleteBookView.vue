<script setup lang="ts">
import { useFetch } from "@/composables/useFetch";
import { useRoute } from "vue-router";
import LinkButton from "@/utils/LinkButton.vue";
import DeleteItem from "@/utils/DeleteItem.vue";
import TheButton from "@/utils/TheButton.vue";
import { ref } from "vue";
import apiBook from "@/services/api-book.service";
import router from "../../router/index";
import { booksUrl } from "@/endpoints/book.endpoint";
import moment from "moment";
import type ListBookDto from "@/models/books/list-book.model";

const id = useRoute().params.id as string;

const url = `${booksUrl}/${id}`;

const isDelete = ref<boolean>(false);
const deleteMessage = ref("");

const { resource: book } = useFetch<ListBookDto>(url);

const deleteClick = () => {
  isDelete.value = true;
  deleteMessage.value = `Do you want to delete book : ${book.value.title}?`;
};

const deleteBook = (value: boolean) => {
  if (value) {
    apiBook
      .remove(id)
      .then((resp) => {
        router.push("/books");
      })
      .catch((err) => console.log("error : ", err.message));
  } else {
    router.push("/books");
  }
};
</script>

<template>
  <delete-item
    v-if="isDelete"
    cancel-button="Cancel"
    submit-button="Delete"
    :delete-message="deleteMessage"
    delete-title="Book DeleteConfirmation!"
    @on-delete-item="deleteBook"
  />
  <div class="border pado">
    <div class="card">
      <div class="card-header">
        <h4 class="text-center">Book Detail</h4>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">
            ISBN: <strong>{{ book?.isbn }}</strong>
          </li>
          <li class="list-group-item">
            Title: <strong>{{ book?.title }}</strong>
          </li>
          <li class="list-group-item">
            Author: <strong>{{ book?.author?.name }}</strong>
          </li>
          <li class="list-group-item">
            Category: <strong>{{ book?.category?.name }}</strong>
          </li>
          <li class="list-group-item">
            Edition: <strong>{{ book?.edition }}</strong>
          </li>
          <li class="list-group-item">
            Volume: <strong>{{ book?.volume }}</strong>
          </li>
          <li class="list-group-item">
            Publisher: <strong>{{ book?.publisher }}</strong>
          </li>
          <li class="list-group-item">
            Pub. Date:
            <strong>{{
              moment(book?.dateOfPublication).format("MMMM DD YYYY")
            }}</strong>
          </li>
          <li class="list-group-item">
            Quantity: <strong>{{ book?.quantity }}</strong>
          </li>
        </ul>
      </div>
      <div class="card-footer">
        <link-button
          link-name="Back"
          link-to="/books"
          link-display="outline-secondary"
          :is-form-control="true"
        />
        <the-button
          button-type="button"
          button-color="outline-danger"
          button-name="Delete"
          :is-form-control="true"
          @click="deleteClick"
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
