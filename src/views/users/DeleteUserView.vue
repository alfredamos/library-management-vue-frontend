<script setup lang="ts">
import { useFetch } from "@/composables/useFetch";
import { userUrl } from "@/urls/user.url";
import { useRoute } from "vue-router";
import LinkButton from "@/utils/LinkButton.vue";
import DeleteItem from "@/utils/DeleteItem.vue";
import TheButton from "@/utils/TheButton.vue";
import { ref } from "vue";
import apiUser from "@/services/api-user.service";
import router from "../../router/index";
import type ListUserDto from "@/models/users/list-user.model";

const id = useRoute().params.id as string;

const url = `${userUrl}/${id}`;

const isDelete = ref<boolean>(false);
const deleteMessage = ref("");

const { resource: user } = useFetch<ListUserDto>(url);

const deleteClick = () => {
  isDelete.value = true;
  deleteMessage.value = `Do you want to delete user : ${user.value.name}?`;
};

const deleteUser = (value: boolean) => {
  if (value) {
    apiUser
      .remove(id)
      .then((resp) => {
        router.push("/users");
      })
      .catch((err) => console.log("error : ", err.message));
  }else{
    router.push("/users")
  }
};
</script>

<template>
  <delete-item
    v-if="isDelete"
    cancel-button="Cancel"
    submit-button="Delete"
    :delete-message="deleteMessage"
    delete-title="User DeleteConfirmation!"
    @on-delete-item="deleteUser"
  />
  <div class="border pado">
    <div class="card">
      <div class="card-header">
        <h4 class="text-center">User Detail</h4>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">
            name: <strong >{{ user?.name }}</strong>
          </li>
          <li class="list-group-item">
            Email: <strong>{{ user?.email }}</strong>
          </li>
          <li class="list-group-item">
            Phone: <strong>{{ user?.phone }}</strong>
          </li>
          <li class="list-group-item">
            Department: <strong>{{ user?.department?.name }}</strong>
          </li>
          <li class="list-group-item">
            Faculty: <strong>{{ user?.department?.faculty }}</strong>
          </li>
          <li class="list-group-item">
            Gender: <strong>{{ user?.gender }}</strong>
          </li>
        </ul>
      </div>
      <div class="card-footer">
        <link-button
          link-name="Back"
          link-to="/users"
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
