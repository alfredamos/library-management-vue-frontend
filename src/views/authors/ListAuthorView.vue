<script setup lang="ts">
import { useFetch } from "@/composables/useFetch";
import { authorsUrl } from "../../endpoints/author.endpoint";
import type AuthorDto from '../../models/authors/author.model';
import LinkButton from "@/utils/LinkButton.vue";

const { resource: authors } = useFetch<AuthorDto[]>(authorsUrl);
</script>

<template>
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
            <tr v-for="author in authors" :key="author.id">
              <td>{{ author.name }}</td>
              <td>
                 <LinkButton
                  :link-to="`/edit-author/${author.id}`"
                  link-display="outline-warning"
                  linkName="Edit"
                />
                <LinkButton
                  :link-to="`/delete-author/${author.id}`"
                  link-display="outline-danger"
                  linkName="Delete"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="card-footer">
            <router-link to="/add-author" class="btn btn-outline-secondary form-control">Add Author</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pado{
  padding: 10px;
}
</style>
