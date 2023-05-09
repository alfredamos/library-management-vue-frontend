<script setup lang="ts">
import { ref } from "vue";
import type BookDto from "../../../models/books/book.models";
import type UserDto from "../../../models/users/user.model";
import type LibraryDto from "@/models/libraries/library.model";
import RequestorCategory from "@/models/utils/requestor-load";
import SelectInput from "@/utils/SelectInput.vue";
import TheButton from "@/utils/TheButton.vue";

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
          <select-input
            v-if="RequestorCategory"
            id="requesterCategory"
            v-model="library.requesterCategory"
            label="Requestor Category"
            :values="RequestorCategory"
            :property="'category'"
          />
          <select-input
            v-if="books"
            id="bookId"
            v-model="library.bookId"
            label="Book"
            :values="books"
            :property="'title'"
          />
          <select-input
            v-if="users"
            id="userId"
            v-model="library.userId"
            label="User"
            :values="users"
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
