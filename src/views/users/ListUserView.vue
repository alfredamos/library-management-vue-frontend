<script setup lang="ts">
import { useFetch } from "@/composables/useFetch";
import type ListUserDto from "@/models/users/list-user.model";
import { userUrl } from "@/urls/user.url";
import LinkButton from "@/utils/LinkButton.vue";

const { resource: users } = useFetch<ListUserDto[]>(userUrl);
</script>

<template>
  <div class="border pado">
    <div class="card">
      <div class="card-header">
        <h4 class="text-center">User List</h4>
      </div>
      <div class="card-body">
        <table class="table table-hover table-responsive table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Department</th>
              <th>Faculty</th>
              <th>Gender</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td>
                <router-link
                  class="no-text-deco"
                  :to="`/detail-user/${user.id}`"
                  >{{ user.name }}</router-link
                >
              </td>
              <td>{{ user.email }}</td>
              <td>{{ user.phone }}</td>
              <td>{{ user.department?.name }}</td>
              <td>{{ user.department?.faculty }}</td>
              <td>{{ user.gender }}</td>
              <td>
                <LinkButton
                  :link-to="`/delete-user/${user.id}`"
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
          link-to="#"
          link-display="outline-secondary"
          linkName="Add User"
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
