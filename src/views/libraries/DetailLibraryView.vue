<script setup lang="ts">
import { useFetch } from "@/composables/useFetch";
import { libraryUrl } from "@/urls/library.url";
import { useRoute } from "vue-router";
import LinkButton from "@/utils/LinkButton.vue";
import type ListLibraryDto from "@/models/libraries/list-library.model";
import moment from "moment";

const { id } = useRoute().params;

const url = `${libraryUrl}/${id}`;

const { resource: library } = useFetch<ListLibraryDto>(url);
</script>

<template>
  <div class="border pado">
    <div class="card">
      <div class="card-header">
        <h4 class="text-center">Library Detail</h4>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">
            User : <strong>{{ library?.user?.name }}</strong>
          </li>
          <li class="list-group-item">
            Book : <strong>{{ library?.book?.title }}</strong>
          </li>
          <li class="list-group-item">
            Req. Cat. : <strong>{{ library?.requesterCategory }}</strong>
          </li>
          <li class="list-group-item">
            Date Out:
            <strong>{{
              moment(library?.dateBookOut).format("MMMM DD YYYY")
            }}</strong>
          </li>
          <li class="list-group-item">
            Date Due :
            <strong>{{
              moment(library?.dateBookDue).format("MMMM DD YYYY")
            }}</strong>
          </li>
        </ul>
      </div>
      <div class="card-footer">
        <link-button
          link-name="Back"
          link-to="/"
          link-display="outline-secondary"
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
