<script setup lang="ts">
import type BookDto from "@/models/books/book.models";
import { ref } from "vue";
import type AuthorDto from "../../../models/authors/author.model";
import type BookCatDto from "../../../models/book-categories/book-category.model";
import TextInput from "@/utils/TextInput.vue";
import SelectInput from "@/utils/SelectInput.vue";
import TheButton from "@/utils/TheButton.vue";

interface Props {
  authors: AuthorDto[];
  categories: BookCatDto[];
  initialBook: BookDto;
  formName: string;
}
const { authors, categories, initialBook, formName } = defineProps<Props>();

const emit = defineEmits(["onBackToList", "onSubmitBook"]);

const book = ref<BookDto>(initialBook);

const backToList = () => {
  emit("onBackToList");
};

const submitBook = () => {
  emit("onSubmitBook", book.value);
};
</script>

<template>
  <div class="border pado mt-3">
    <form @submit.prevent="submitBook">
      <div class="card">
        <div class="card-header">
          <h4 class="text-center">Book {{ formName }} Form</h4>
        </div>
        <div class="card-body">
          <text-input
            id="title"
            v-model="book.title"
            label="Title"
            type="text"
          />
          <text-input id="isbn" v-model="book.isbn" label="ISBN" type="text" />
          <text-input
            id="edition"
            v-model="book.edition"
            label="Edition"
            type="text"
          />
          <text-input
            id="volume"
            v-model="book.volume"
            label="Volume"
            type="text"
          />
          <text-input
            id="publisher"
            v-model="book.publisher"
            label="Publisher"
            type="text"
          />
          <text-input
            id="quantity"
            v-model.number="book.quantity"
            label="Quantity"
            type="number"
          />
          <text-input
            id="dateOfPublication"
            v-model="book.dateOfPublication"
            label="Publication Date"
            type="date"
          />
          <select-input
            v-if="authors"
            id="authorId"
            v-model="book.authorId"
            label="Author"
            :values="authors"
            :property="'name'"
          />
          <select-input
            v-if="categories"
            id="bookCatId"
            v-model="book.bookCatId"
            label="Book Category"
            :values="categories"
            :property="'name'"
          />
        </div>
        <div class="card-footer">
          <the-button
            button-type="submit"
            button-color="outline-primary"
            button-name="Submit"
            :is-form-control="true"
          />
          <the-button
            button-type="button"
            button-color="outline-secondary"
            button-name="Back"
            :is-form-control="true"
            @click="backToList"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
.pado {
  padding: 10px;
}
</style>
