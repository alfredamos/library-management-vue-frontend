<script setup lang="ts">
import { useFetch } from "@/composables/useFetch";
import type AuthorDto from "@/models/authors/author.model";
import { authorUrl } from "@/urls/author.url";
import { useRoute} from "vue-router";
import LinkButton from "@/utils/LinkButton.vue";

const { id } = useRoute().params;

const url = `${authorUrl}/${id}`;

const { resource: author } = useFetch<AuthorDto>(url);
</script>

<template>
  <div class="border pado">
    <div class="card">
      <div class="card-header">
        <h4 class="text-center">Author Detail</h4>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">name: <strong>{{ author?.name }}</strong></li>
          
        </ul>
      </div>
      <div class="card-footer">
            <link-button
            link-name="Back"
            link-to="/authors"
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
