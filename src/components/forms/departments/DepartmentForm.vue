<script setup lang="ts">
import { ref } from "vue";
import type DepartmentDto from "@/models/departments/department.model";

interface Props {
  initialDepartment: DepartmentDto;
  formName: string;
}
const { initialDepartment, formName } = defineProps<Props>();

const emit = defineEmits(["onBackToList", "onSubmitDepartment"]);

const department = ref<DepartmentDto>(initialDepartment);

const backToList = () => {
  emit("onBackToList");
};

const submitDepartment = () => {
  emit("onSubmitDepartment");
};
</script>

<template>
  <div class="border pado mt-3">
    <form @submit.prevent="submitDepartment">
      <div class="card">
        <div class="card-header">
          <h4 class="text-center">Department {{ formName }} Form</h4>
        </div>
        <div class="card-body">
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input
              id="name"
              v-model.trim="department.name"
              type="text"
              class="form-control"
            />
          </div>
          <div class="mb-3">
            <label for="faculty" class="form-label">Faculty</label>
            <input
              id="faculty"
              v-model.trim="department.faculty"
              type="text"
              class="form-control"
            />
          </div>
        </div>
        <div class="card-footer">
          <button
            type="submit"
            class="btn btn-outline-primary form-control m-1 fw-bold"
          >
            Submit
          </button>
          <button
            @click="backToList"
            type="button"
            class="btn btn-outline-secondary form-control m-1 fw-bold"
          >
            Back
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
.pado {
  padding: 10px;
}
</style>
