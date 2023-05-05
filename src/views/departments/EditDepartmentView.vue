<script setup lang="ts">
import DepartmentForm from "@/components/forms/departments/DepartmentForm.vue";
import type DepartmentDto from "@/models/departments/department.model";
import apiDepartment from "@/services/api-department.service";
import { departmentUrl } from "@/urls/department.url";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useFetch } from '../../composables/useFetch';

const router = useRouter();
const id = useRoute().params.id as string

const url = `${departmentUrl}/${id}`

const {resource: department} = useFetch<DepartmentDto>(url)

const backToList = () => {
  router.push("/departments");
};

const submitDepartment = (departmentDto: DepartmentDto) => {
  console.log("In edit-department, department : ", departmentDto);

  apiDepartment
    .edit(id, departmentDto)
    .then((resp) => {
      department.value = resp.data;
      router.push("/departments");
    })
    .catch((err) => console.log("error : ", err.message));
};
</script>

<template>
  <DepartmentForm
    v-if="department"
    form-name="Edit"
    :initial-department="department"
    @on-back-to-list="backToList"
    @on-submit-department="submitDepartment"
  />
</template>
