<script setup lang="ts">
import { useFetch } from "@/composables/useFetch";
import type BookCatDto from "@/models/book-categories/book-category.model";
import { bookCatUrl } from "@/urls/book-category.url";
import LinkButton from "@/utils/LinkButton.vue";
import {watch, ref} from "vue";
import SearchItem from "@/utils/SearchItem.vue";

const filteredBookCats = ref<BookCatDto[]>([])

const { resource: bookCats } = useFetch<BookCatDto[]>(bookCatUrl);

watch(bookCats, () => {
  
  filteredBookCats.value = bookCats.value
})

const searchHandler = (searchItem: string) => {
  filteredBookCats.value = searchItem === "" ? bookCats.value :
  bookCats.value.filter((bookCat) =>
    bookCat.name.toLowerCase().includes(searchItem.toLowerCase())
  );
};

</script>

<template>
  <search-item @on-search-item="searchHandler" />
  <div class="border pado">
    <div class="card">
      <div class="card-header">
        <h4 class="text-center">Book Category List</h4>
      </div>
      <div class="card-body">
        <table class="table table-hover table-responsive table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="category in filteredBookCats" :key="category.id">
              <td>
                <router-link
                  class="no-text-deco"
                  :to="`/detail-category/${category.id}`"
                  >{{ category.name }}</router-link
                >
              </td>
              <td>
                <LinkButton
                  :link-to="`/edit-category/${category.id}`"
                  link-display="outline-warning"
                  link-name="Edit"
                />
                <LinkButton
                  :link-to="`/delete-category/${category.id}`"
                  link-display="outline-danger"
                  link-name="Delete"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="card-footer">
        <LinkButton
          link-to="add-category"
          link-display="outline-secondary"
          link-name="Add Category"
          :is-form-control="true"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.pado {
  padding: 10px;
}

.no-text-deco {
  text-decoration: none;
}
</style>
