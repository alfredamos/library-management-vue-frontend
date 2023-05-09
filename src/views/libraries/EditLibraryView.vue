<script setup lang="ts">
import LibraryForm from "@/components/forms/libraries/LibraryForm.vue";
import type LibraryDto from "@/models/libraries/library.model";
import apiLibrary from "@/services/api-library.service";
import { useRouter, useRoute } from "vue-router";
import { useFetch } from "../../composables/useFetch";
import type BookDto from "../../models/books/book.models";
import { booksUrl } from "../../endpoints/book.endpoint";
import type UserDto from "../../models/users/user.model";
import { usersUrl } from "../../endpoints/user.endpoint";
import { libraryUrl } from "@/urls/library.url";

const router = useRouter();
const id = useRoute().params.id as string;

const url = `${libraryUrl}/${id}`;

const { resource: books } = useFetch<BookDto[]>(booksUrl);
const { resource: users } = useFetch<UserDto[]>(usersUrl);

const { resource: library } = useFetch<LibraryDto>(url);

const backToList = () => {
  router.push("/");
};

const submitLibrary = (libraryDto: LibraryDto) => {
  console.log("In edit-library, library : ", libraryDto);

  apiLibrary
    .edit(id, libraryDto)
    .then((resp) => {
      library.value = resp.data;
      router.push("/");
    })
    .catch((err) => console.log("error : ", err.message));
};
</script>

<template>
  <LibraryForm
    v-if="library && books && users"
    form-name="Edit"
    :books="books"
    :users="users"
    :initial-library="library"
    @on-back-to-list="backToList"
    @on-submit-library="submitLibrary"
  />
</template>
