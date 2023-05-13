<script setup lang="ts">
import { useFetch } from "@/composables/useFetch";
import type ListUserDto from "@/models/users/list-user.model";
import { userUrl } from "@/urls/user.url";
import LinkButton from "@/utils/LinkButton.vue";
import { watch, ref } from "vue";
import SearchItem from "@/utils/SearchItem.vue";

const filteredUsers = ref<ListUserDto[]>([])

const { resource: users } = useFetch<ListUserDto[]>(userUrl);

watch(users, () => {
  filteredUsers.value = users.value;
});

const searchHandler = (searchItem: string) => {
  filteredUsers.value =
    searchItem === ""
      ? users.value
      : users.value.filter((user) => searchCriteria(user, searchItem));
};

const searchCriteria = (user: ListUserDto, searchItem: string) => {
 return user.name.toLowerCase().includes(searchItem.toLowerCase()) || 
        user.email.toLowerCase().includes(searchItem.toLowerCase()) ||
        user.phone.toLowerCase().includes(searchItem.toLowerCase()) ||
        user.department?.name.toLowerCase().includes(searchItem.toLowerCase()) ||
        user.department?.faculty.toLowerCase().includes(searchItem.toLowerCase()) ||
        user.gender?.toLowerCase().includes(searchItem.toLowerCase()) 
}

</script>

<template>
   <search-item @on-search-item="searchHandler" />
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
            <tr v-for="user in filteredUsers" :key="user.id">
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
