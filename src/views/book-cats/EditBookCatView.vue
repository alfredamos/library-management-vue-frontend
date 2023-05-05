<script setup lang="ts">
import type BookCatDto from "@/models/book-categories/book-category.model";
import apiBookCat from "@/services/api-book-cat.service";
import { useRouter, useRoute } from "vue-router";
import { useFetch } from "../../composables/useFetch";
import { bookCatUrl } from "@/urls/book-category.url";
import BookCatForm from "@/components/forms/book-cats/BookCatForm.vue";

const router = useRouter();

const id = useRoute().params.id as string;

const url = `${bookCatUrl}/${id}`;

const { resource: bookCat } = useFetch<BookCatDto>(url);

console.log("category : ", bookCat);

const backToList = () => {
  router.push("/categories");
};

const submitBookCat = (bookCatDto: BookCatDto) => {
  console.log("In edit-bookCat, bookCat : ", bookCatDto);

  apiBookCat
    .edit(id, bookCatDto)
    .then((resp) => {
      bookCat.value = resp.data;
      router.push("/categories");
    })
    .catch((err) => console.log("error : ", err.message));
};
</script>

<template>
  <BookCatForm
    v-if="bookCat"
    form-name="Edit"
    :initial-book-cat="bookCat"
    @on-back-to-list="backToList"
    @on-submit-book-cat="submitBookCat"
  />
</template>
