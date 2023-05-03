<script setup lang="ts">
import { useFetch } from "@/composables/useFetch";
import type DepartmentDto from "@/models/departments/department.model";
import { departmentUrl } from "@/urls/department.url";
import LinkButton from "@/utils/LinkButton.vue";

const { resource: departments } = useFetch<DepartmentDto[]>(departmentUrl);
</script>

<template>
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
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="department in departments" :key="department.id">
              <td>{{ department.name }}</td>
              <td>
                <LinkButton
                  :link-to="`/edit-department/${department.id}`"
                  link-display="outline-warning"
                  linkName="Edit"
                />
                <LinkButton
                  :link-to="`/delete-department/${department.id}`"
                  link-display="outline-danger"
                  linkName="Delete"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="card-footer">
        <router-link to="/add-department" class="btn btn-outline-secondary form-control"
          >Add Department</router-link
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.pado{
  padding: 10px;
}
</style>
