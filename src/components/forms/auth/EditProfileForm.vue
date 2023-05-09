<script lang="ts" setup>
import type EditProfileDto from "@/models/auth/edit-profile.model";
import { ref } from "vue";
import TextInput from "@/utils/TextInput.vue";
import SelectInput from "@/utils/SelectInput.vue";
import { useFetch } from "@/composables/useFetch";
import { departmentUrl } from "@/urls/department.url";
import GenderLoad from "@/models/utils/gender-load.util";
import TheButton from "@/utils/TheButton.vue";

interface Props {
  oldProfile: EditProfileDto;
}

const { oldProfile } = defineProps<Props>();

const { resource: departments } = useFetch(departmentUrl);

const emit = defineEmits(["onBackToList", "onEditProfileSubmit"]);

const editProfile = ref<EditProfileDto>(oldProfile);

const backToList = () => {
  emit("onBackToList");
};

const submitEditProfile = () => {
  emit("onEditProfileSubmit", editProfile.value);
};
</script>

<template>
  <div class="border pado">
    <form @submit.prevent="submitEditProfile">
      <div class="card">
        <div class="card-header">
          <h4 class="text-center">Edit Profile Form</h4>
        </div>
        <div class="card-body">
          <text-input
            id="name"
            v-model="editProfile.name"
            label="Name"
            type="text"
          />
          <text-input
            id="email"
            v-model="editProfile.email"
            label="Email"
            type="email"
          />
          <text-input
            id="phone"
            v-model="editProfile.phone"
            label="Phone"
            type="tel"
          />
          <text-input
            id="password"
            v-model="editProfile.password"
            label="Password"
            type="password"
          />
          <text-input
            id="newPassword"
            v-model="editProfile.newPassword"
            label="New Password"
            type="password"
          />
          <select-input
            v-if="GenderLoad"
            id="gender"
            v-model="editProfile.gender"
            label="Gender"
            :values="GenderLoad"
            :property="'gender'"
          />
          <select-input
            v-if="departments"
            id="departmentId"
            v-model="editProfile.departmentId"
            label="Department"
            :values="departments"
            :property="'name'"
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

<style>
.pado {
  padding: 10px;
}
input,
label {
  box-shadow: 1px 1px 10px rgba(234, 233, 235, 0.14);
}
</style>
