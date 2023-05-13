<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(["onSearchItem"]);

const searchItem = ref("");

const searchHandler = () => {
  emit("onSearchItem", searchItem.value);
};
</script>

<template>
  <form @submit.prevent="searchHandler" class="d-flex m-lg-5">
    <input
      v-model="searchItem"
      @input="searchHandler"
      class="form-control me-2"
      type="search"
      placeholder="Search"
      aria-label="Search"
    />
    <button class="btn btn-outline-success" type="submit">Search</button>
  </form>
</template>
