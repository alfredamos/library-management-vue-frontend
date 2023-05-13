<script setup lang="ts">
import { useFetch } from "@/composables/useFetch";
import type DepartmentDto from "@/models/departments/department.model";
import { departmentUrl } from "@/urls/department.url";
import LinkButton from "@/utils/LinkButton.vue";
import { watch, ref } from "vue";
import SearchItem from "@/utils/SearchItem.vue";

const filteredDepartments = ref<DepartmentDto[]>([]);

const { resource: departments } = useFetch<DepartmentDto[]>(departmentUrl);

watch(departments, () => {
  filteredDepartments.value = departments.value;
});

const searchHandler = (searchItem: string) => {
  filteredDepartments.value =
    searchItem === ""
      ? departments.value
      : departments.value.filter((department) => searchCriteria(department, searchItem));
};

const searchCriteria = (department: DepartmentDto, searchItem: string) => {
 return department.name.toLowerCase().includes(searchItem.toLowerCase()) || 
          department.faculty.toLowerCase().includes(searchItem.toLowerCase())
}
</script>

<template>
  <search-item @on-search-item="searchHandler" />
  <div class="border pado">
    <div class="card">
      <div class="card-header">
        <h4 class="text-center">Department List</h4>
      </div>
      <div class="card-body">
        <table class="table table-hover table-responsive table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Faculty</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="department in filteredDepartments" :key="department.id">
              <td>
                <router-link
                  class="no-text-deco"
                  :to="`/detail-department/${department.id}`"
                  >{{ department.name }}</router-link
                >
              </td>
              <td>{{ department.faculty }}</td>
              <td>
                <LinkButton
                  :link-to="`/edit-department/${department.id}`"
                  link-display="outline-warning"
                  link-name="Edit"
                />
                <LinkButton
                  :link-to="`/delete-department/${department.id}`"
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
          link-to="add-department"
          link-display="outline-secondary"
          link-name="Add Department"
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
