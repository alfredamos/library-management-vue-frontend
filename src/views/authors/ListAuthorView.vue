<script setup lang="ts">
import { useFetch } from "@/composables/useFetch";
import { authorsUrl } from "../../endpoints/author.endpoint";
import type AuthorDto from "../../models/authors/author.model";
import LinkButton from "@/utils/LinkButton.vue";
import SearchItem from "@/utils/SearchItem.vue";
import { watch, ref } from "vue";

const filteredAuthors = ref<AuthorDto[]>([])

const { resource: authors } = useFetch<AuthorDto[]>(authorsUrl);

watch(authors, () => {
  
  filteredAuthors.value = authors.value
})

const searchHandler = (searchItem: string) => {
  filteredAuthors.value = searchItem === "" ? authors.value :
  authors.value.filter((author) =>
    author.name.toLowerCase().includes(searchItem.toLowerCase())
  );
};
</script>

<template>
  <search-item @on-search-item="searchHandler" />
  <div class="border pado">
    <div class="card">
      <div class="card-header">
        <h4 class="text-center">Author List</h4>
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
            <tr v-for="author in filteredAuthors" :key="author.id">
              <td>
                <router-link
                  class="no-text-deco"
                  :to="`/detail-author/${author.id}`"
                  >{{ author.name }}</router-link
                >
              </td>
              <td>
                <LinkButton
                  :link-to="`/edit-author/${author.id}`"
                  link-display="outline-warning"
                  link-name="Edit"
                />
                <LinkButton
                  :link-to="`/delete-author/${author.id}`"
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
          link-to="add-author"
          link-display="outline-secondary"
          link-name="Add Author"
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
