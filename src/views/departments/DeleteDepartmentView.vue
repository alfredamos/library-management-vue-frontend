<script setup lang="ts">
import { useFetch } from "@/composables/useFetch";
import type DepartmentDto from "@/models/departments/department.model";
import { departmentUrl } from "@/urls/department.url";
import { useRoute } from "vue-router";
import LinkButton from "@/utils/LinkButton.vue";
import DeleteItem from "@/utils/DeleteItem.vue";
import TheButton from "@/utils/TheButton.vue";
import { ref } from "vue";
import apiDepartment from "@/services/api-department.service";
import router from "../../router/index";

const id = useRoute().params.id as string;

const url = `${departmentUrl}/${id}`;

const isDelete = ref<boolean>(false);
const deleteMessage = ref("");

const { resource: department } = useFetch<DepartmentDto>(url);

const deleteClick = () => {
  isDelete.value = true;
  deleteMessage.value = `Do you want to delete department : ${department.value.name}?`;
};

const deleteDepartment = (value: boolean) => {
  if (value) {
    apiDepartment
      .remove(id)
      .then((resp) => {
        router.push("/departments");
      })
      .catch((err) => console.log("error : ", err.message));
  }else{
    router.push("/departments")
  }
};
</script>

<template>
  <delete-item
    v-if="isDelete"
    cancel-button="Cancel"
    submit-button="Delete"
    :delete-message="deleteMessage"
    delete-title="Department DeleteConfirmation!"
    @on-delete-item="deleteDepartment"
  />
  <div class="border pado">
    <div class="card">
      <div class="card-header">
        <h4 class="text-center">Department Detail</h4>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">
            name: <strong>{{ department?.name }}</strong>
          </li>
          <li class="list-group-item">
            faculty: <strong>{{ department?.faculty }}</strong>
          </li>
        </ul>
      </div>
      <div class="card-footer">
        <link-button
          link-name="Back"
          link-to="/departments"
          link-display="outline-secondary"
          :is-form-control="true"
        />
        <the-button
          button-type="button"
          button-color="outline-danger"
          button-name="Delete"
          :is-form-control="true"
          @click="deleteClick"
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
