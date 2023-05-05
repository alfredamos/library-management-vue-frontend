<script setup lang="ts">
import { ref } from 'vue';
import type AuthorDto from '@/models/authors/author.model';

interface Props{
      initialAuthor: AuthorDto;
      formName: string;
}
const {initialAuthor, formName} = defineProps<Props>()

const emit = defineEmits(['onBackToList', 'onSubmitAuthor'])

const author = ref<AuthorDto>(initialAuthor)

const backToList = () => {
      emit('onBackToList')
}

const submitAuthor = () => {
      emit('onSubmitAuthor', author.value)
}

</script>

<template>
<div class="border pado mt-3">
    <form @submit.prevent="submitAuthor">
      <div class="card">
        <div class="card-header">
          <h4 class="text-center">Author {{ formName }} Form</h4>
        </div>
        <div class="card-body">
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input
              id="name"
              v-model.trim="author.name"
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
.pado{
      padding: 10px;
}
</style>