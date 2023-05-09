<script setup lang="ts">
import { ref } from "vue";
import type DepartmentDto from "@/models/departments/department.model";
import TextInput from "@/utils/TextInput.vue";
import TheButton from "@/utils/TheButton.vue";

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
  emit("onSubmitDepartment", department.value);
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
          <text-input
            id="name"
            v-model="department.name"
            label="Name"
            type="text"
          />
          <text-input
            id="faculty"
            v-model="department.faculty"
            label="Faculty"
            type="text"
          />          
        </div>
        <div class="card-footer">
          <the-button
            button-type="submit"
            button-color="outline-primary"
            button-name="Submit"
            :is-form-control="true"
          />
          <the-button
            button-type="button"
            button-color="outline-secondary"
            button-name="Back"
            :is-form-control="true"
            @click="backToList"
          />
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
