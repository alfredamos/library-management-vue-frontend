<script setup lang="ts">
import { useFetch } from "@/composables/useFetch";
import { useRoute } from "vue-router";
import LinkButton from "@/utils/LinkButton.vue";
import { bookCatUrl } from "@/urls/book-category.url";
import type BookCatDto from "@/models/book-categories/book-category.model";

const { id } = useRoute().params;

const url = `${bookCatUrl}/${id}`;

const { resource: bookCat } = useFetch<BookCatDto>(url);
</script>

<template>
  <div class="border pado">
    <div class="card">
      <div class="card-header">
        <h4 class="text-center">Book Category Detail</h4>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">
            name: <strong>{{ bookCat?.name }}</strong>
          </li>
        </ul>
      </div>
      <div class="card-footer">
        <link-button
          link-name="Back"
          link-to="/categories"
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
