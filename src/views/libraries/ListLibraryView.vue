<script setup lang="ts">
import { useFetch } from "@/composables/useFetch";
import type ListLibraryDto from "@/models/libraries/list-library.model";
import { libraryUrl } from "@/urls/library.url";
import LinkButton from "@/utils/LinkButton.vue";
import moment from "moment";

const { resource: libraries } = useFetch<ListLibraryDto[]>(libraryUrl);
</script>

<template>
  <div class="border pado">
    <div class="card">
      <div class="card-header">
        <h4 class="text-center">Library List</h4>
      </div>
      <div class="card-body">
        <table class="table table-hover table-responsive table-bordered">
          <thead>
            <tr>
              <th>User</th>
              <th>Book</th>
              <th>Requester Category</th>
              <th>Date Book Out</th>
              <th>Date Book Due</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="library in libraries" :key="library.id">
              <td>{{ library.user?.name }}</td>
              <td>{{ library.book?.title }}</td>
              <td>{{ library.requesterCategory }}</td>
              <td>{{ moment(library.dateBookOut).format("MMMM DD YYYY") }}</td>
              <td>{{ moment(library.dateBookDue).format("MMMM DD YYYY") }}</td>
              <td>
                <LinkButton
                  :link-to="`/edit-library/${library.id}`"
                  link-display="outline-warning"
                  link-name="Edit"
                />
                <LinkButton
                  :link-to="`/delete-library/${library.id}`"
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
          link-to="add-library"
          link-display="outline-secondary"
          linkName="Add Library Request"
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
</style>
