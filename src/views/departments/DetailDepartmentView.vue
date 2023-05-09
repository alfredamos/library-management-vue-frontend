<script setup lang="ts">
import { useFetch } from "@/composables/useFetch";
import type DepartmentDto from "@/models/departments/department.model";
import { departmentUrl } from "@/urls/department.url";
import { useRoute} from "vue-router";
import LinkButton from "@/utils/LinkButton.vue";

const { id } = useRoute().params;

const url = `${departmentUrl}/${id}`;

const { resource: department } = useFetch<DepartmentDto>(url);
</script>

<template>
  <div class="border pado">
    <div class="card">
      <div class="card-header">
        <h4 class="text-center">Department Detail</h4>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">name: <strong>{{ department?.name }}</strong></li>          
          <li class="list-group-item">Faculty: <strong>{{ department?.faculty }}</strong></li>          
        </ul>
      </div>
      <div class="card-footer">
            <link-button
            link-name="Back"
            link-to="/departments"
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
