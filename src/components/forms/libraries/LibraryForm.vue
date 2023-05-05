<script setup lang="ts">
import { ref } from "vue";
import type BookDto from "../../../models/books/book.models";
import type UserDto from "../../../models/users/user.model";
import type LibraryDto from "@/models/libraries/library.model";

interface Props {
  books: BookDto[];
  initialLibrary: LibraryDto;
  formName: string;
  users: UserDto[];
}
const { books, formName, initialLibrary, users } = defineProps<Props>();

const emit = defineEmits(["onBackToList", "onSubmitLibrary"]);

const library = ref<LibraryDto>(initialLibrary);

const backToList = () => {
  emit("onBackToList");
};

const submitLibrary = () => {
  emit("onSubmitLibrary", library.value);
};
</script>

<template>
  <div class="border pado mt-3">
    <form @submit.prevent="submitLibrary">
      <div class="card">
        <div class="card-header">
          <h4 class="text-center">Library {{ formName }} Form</h4>
        </div>
        <div class="card-body">
          <div class="mb-3">
            <label for="name" class="form-label">Requester Category</label>
            <select
              id="name"
              v-model.trim="library.requesterCategory"
              type="text"
              class="form-select"
            >
            <option value="">Please select User Category</option>
            <option value="Faculty">Faculty</option>
            <option value="Others">Others</option>
            <option value="Staff">Staff</option>
            <option value="Student">Student</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="bookId" class="form-label">Book</label>
            <select
              id="bookId"
              v-model.trim="library.bookId"
              type="text"
              class="form-select"
            >
              <option value="">Please select book</option>
              <option v-for="book in books" :value="book.id" :key="book.id">
                {{ book.title }}
              </option>
            </select>
          </div>
          <div class="mb-3">
            <label for="userId" class="form-label">User</label>
            <select
              id="userId"
              v-model.trim="library.userId"
              type="text"
              class="form-select"
            >
              <option value="">Please select user</option>
              <option v-for="user in users" :value="user.id" :key="user.id">
                {{ user.name }}
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
