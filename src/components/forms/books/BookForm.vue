<script setup lang="ts">
import BookDto from "@/models/books/book.models";
import { ref } from "vue";
import type AuthorDto from "../../../models/authors/author.model";
import type BookCatDto from "../../../models/book-categories/book-category.model";

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
  emit("onSubmitBook");
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
          <div class="mb-3">
            <label for="title" class="form-label">Title</label>
            <input
              id="title"
              v-model.trim="book.title"
              type="text"
              class="form-control"
            />
          </div>
          <div class="mb-3">
            <label for="isbn" class="form-label">ISBN</label>
            <input
              id="isbn"
              v-model.trim="book.isbn"
              type="text"
              class="form-control"
            />
          </div>
          <div class="mb-3">
            <label for="edition" class="form-label">Edition</label>
            <input
              id="edition"
              v-model.trim="book.edition"
              type="text"
              class="form-control"
            />
          </div>
          <div class="mb-3">
            <label for="volume" class="form-label">Volume</label>
            <input
              id="volume"
              v-model.trim="book.volume"
              type="text"
              class="form-control"
            />
          </div>
          <div class="mb-3">
            <label for="publisher" class="form-label">Publisher</label>
            <input
              id="publisher"
              v-model.trim="book.publisher"
              type="text"
              class="form-control"
            />
          </div>
          <div class="mb-3">
            <label for="quantity" class="form-label">Quantity</label>
            <input
              id="quantity"
              v-model.number="book.quantity"
              type="number"
              class="form-control"
            />
          </div>
          <div class="mb-3">
            <label for="dateOfPublication" class="form-label"
              >Publication Date</label
            >
            <input
              id="dateOfPublication"
              v-model.date="book.dateOfPublication"
              type="date"
              class="form-control"
            />
          </div>
          <div class="mb-3">
            <label for="authorId" class="form-label">Author</label>
            <select
              id="authorId"
              v-model.trim="book.authorId"
              type="text"
              class="form-select"
            >
              <option value="">Please select author</option>
              <option
                v-for="author in authors"
                :value="author.id"
                :key="author.id"
              >
                {{ author.name }}
              </option>
            </select>
          </div>
          <div class="mb-3">
            <label for="bookCatId" class="form-label">Book Category</label>
            <select
              id="bookCatId"
              v-model.trim="book.bookCatId"
              type="text"
              class="form-select"
            >
              <option value="">Please select book category</option>
              <option
                v-for="category in categories"
                :value="category.id"
                :key="category.id"
              >
                {{ category.name }}
              </option>
            </select>
          </div>
        </div>
        <div class="card-footer">
          <button
            type="submit"
            class="btn btn-outline-primary form-control m-1 fw-bold"
          >
            Submit
          </button>
          <button
            @click="backToList"
            type="button"
            class="btn btn-outline-secondary form-control m-1 fw-bold"
          >
            Back
          </button>
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
