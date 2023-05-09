<script setup lang="ts">
import type BookCatDto from "@/models/book-categories/book-category.model";
import { ref } from "vue";
import TextInput from "@/utils/TextInput.vue";
import TheButton from "@/utils/TheButton.vue";

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
          <text-input
            id="name"
            v-model="bookCat.name"
            label="Name"
            type="text"
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
