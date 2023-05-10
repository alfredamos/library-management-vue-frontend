<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(["onSearchItem"]);

const searchItem = ref("");

const searchHandler = () => {
  emit("onSearchItem", searchItem.value);
};
</script>

<template>
  <div class="input-group rounded mb-3 mt-3">
    <input
      v-model="searchItem"
      @click="searchHandler"
      type="search"
      class="form-control rounded"
      placeholder="Search"
      aria-label="Search"
      aria-describedby="search-addon"
    />
    <span class="input-group-text border-0" id="search-addon">
      <i class="fas fa-search"></i>
    </span>
  </div>
</template>
