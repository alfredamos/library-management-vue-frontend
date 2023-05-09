<script setup lang="ts">
import apiBook from "@/services/api-book.service";
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import BookForm from "@/components/forms/books/BookForm.vue";
import type BookDto from "@/models/books/book.models";
import { useFetch } from "../../composables/useFetch";
import { booksUrl } from "../../endpoints/book.endpoint";
import { authorsUrl } from "@/endpoints/author.endpoint";
import type AuthorDto from "@/models/authors/author.model";
import { bookCatUrl } from "@/urls/book-category.url";
import type BookCatDto from "../../models/book-categories/book-category.model";

const router = useRouter();
const id = useRoute().params.id as string;
const url = `${booksUrl}/${id}`;

const { resource: authors } = useFetch<AuthorDto[]>(authorsUrl);
const { resource: categories } = useFetch<BookCatDto[]>(bookCatUrl);

const { resource: book } = useFetch(url);

const backToList = () => {
  router.push("/books");
};

const submitBook = (bookDto: BookDto) => {
  console.log("In edit-book, book : ", bookDto);

  apiBook
    .edit(id, bookDto)
    .then((resp) => {
      book.value = resp.data;
      router.push("/books");
    })
    .catch((err) => console.log("error : ", err.message));
};
</script>

<template>
  <BookForm
    v-if="book && authors && categories"
    form-name="Edit"
    :authors="authors"
    :initial-book="book"
    :categories="categories"
    @on-back-to-list="backToList"
    @on-submit-book="submitBook"
  />
</template>
