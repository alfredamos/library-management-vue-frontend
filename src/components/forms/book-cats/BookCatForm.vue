<script setup lang="ts">
import type BookCatDto from "@/models/book-categories/book-category.model";
import { ref } from "vue";

interface Props {
  initialBookCat: BookCatDto;
  formName: string;
}
const { initialBookCat, formName } = defineProps<Props>();

const emit = defineEmits(["onBackToList", "onSubmitBookCat"]);

const bookCat = ref<BookCatDto>(initialBookCat);

const backToList = () => {
  emit("onBackToList");
};

const submitBookCat = () => {
  emit("onSubmitBookCat", bookCat.value);
};
</script>

<template>
  <div class="border pado mt-3">
    <form @submit.prevent="submitBookCat">
      <div class="card">
        <div class="card-header">
          <h4 class="text-center">Book Category {{ formName }} Form</h4>
        </div>
        <div class="card-body">
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input
              id="name"
              v-model.trim="bookCat.name"
              type="text"
              class="form-control"
            />
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
