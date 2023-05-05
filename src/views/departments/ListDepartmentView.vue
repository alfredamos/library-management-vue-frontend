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
              <th>Faculty</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="department in departments" :key="department.id">
              <td>{{ department.name }}</td>
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
.pado{
  padding: 10px;
}
</style>
