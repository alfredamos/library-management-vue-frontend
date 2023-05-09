<script setup lang="ts">
import { useFetch } from "@/composables/useFetch";
import { userUrl } from "@/urls/user.url";
import { useRoute } from "vue-router";
import LinkButton from "@/utils/LinkButton.vue";
import type ListUserDto from "@/models/users/list-user.model";

const { id } = useRoute().params;

const url = `${userUrl}/${id}`;

const { resource: user } = useFetch<ListUserDto>(url);
</script>

<template>
  <div class="border pado">
    <div class="card">
      <div class="card-header">
        <h4 class="text-center">User Detail</h4>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">
            name: <strong >{{ user?.name }}</strong>
          </li>
          <li class="list-group-item">
            Email: <strong>{{ user?.email }}</strong>
          </li>
          <li class="list-group-item">
            Phone: <strong>{{ user?.phone }}</strong>
          </li>
          <li class="list-group-item">
            Department: <strong>{{ user?.department?.name }}</strong>
          </li>
          <li class="list-group-item">
            Faculty: <strong>{{ user?.department?.faculty }}</strong>
          </li>
          <li class="list-group-item">
            Gender: <strong>{{ user?.gender }}</strong>
          </li>
        </ul>
      </div>
      <div class="card-footer">
        <link-button
          link-name="Back"
          link-to="/users"
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
