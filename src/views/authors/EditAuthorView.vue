<script setup lang="ts">
import AuthorForm from "@/components/forms/authors/AuthorForm.vue";
import type AuthorDto from "@/models/authors/author.model";
import apiAuthor from "@/services/api-author.service";
import { useRouter, useRoute } from "vue-router";
import { useFetch } from "@/composables/useFetch";
import { authorUrl } from "@/urls/author.url";

const router = useRouter();
const id = useRoute().params.id as string;

const url = `${authorUrl}/${id}`;

const { resource: author } = useFetch<AuthorDto>(url);

console.log("resource : ", author);


const backToList = () => {
  router.push("/authors");
};

const submitAuthor = (authorDto: AuthorDto) => {
  console.log("In edit-author, author : ", authorDto);

  apiAuthor
    .edit(id, authorDto)
    .then((resp) => {
      author.value = resp.data;
      router.push("/authors");
    })
    .catch((err) => console.log("error : ", err.message));
};
</script>

<template>
  <AuthorForm
    v-if="author"
    form-name="Edit"
    :initial-author="author"
    @on-back-to-list="backToList"
    @on-submit-author="submitAuthor"
  />
</template>
