<script setup lang="ts">
import { ref } from "vue";
import type AuthorDto from "@/models/authors/author.model";
import TextInput from "@/utils/TextInput.vue";
import TheButton from "@/utils/TheButton.vue";

interface Props {
  initialAuthor: AuthorDto;
  formName: string;
}
const { initialAuthor, formName } = defineProps<Props>();

const emit = defineEmits(["onBackToList", "onSubmitAuthor"]);

const author = ref<AuthorDto>(initialAuthor);

const backToList = () => {
  emit("onBackToList");
};

const submitAuthor = () => {
  emit("onSubmitAuthor", author.value);
};
</script>

<template>
  <div class="border pado mt-3">
    <form @submit.prevent="submitAuthor">
      <div class="card">
        <div class="card-header">
          <h4 class="text-center">Author {{ formName }} Form</h4>
        </div>
        <div class="card-body">
          <text-input
            id="name"
            v-model="author.name"
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
