<script setup lang="ts">
import type ChangePasswordDto from "@/models/auth/change-password.model";
import { ref } from "vue";
import TextInput from "@/utils/TextInput.vue";
import TheButton from "@/utils/TheButton.vue";

interface Props {
  oldAuthInfo: ChangePasswordDto;
}

const { oldAuthInfo } = defineProps<Props>();

const changePassword = ref<ChangePasswordDto>(oldAuthInfo);

const emit = defineEmits(["onChangePasswordSubmit", "onBackToList"]);

const changePasswordSubmit = () => {
  console.log("Clicked...");

  emit("onChangePasswordSubmit", changePassword.value);
};

const backToList = () => {
  emit("onBackToList");
};
</script>
<template>
  <div class="border pado mt-3">
    <form @submit.prevent="changePasswordSubmit">
      <div class="card">
        <div class="card-header">
          <h4 class="text-center">Change Password Form</h4>
        </div>
        <div class="card-body">
          <text-input
            id="email"
            v-model="changePassword.email"
            label="Email"
            type="email"
          />
          <text-input
            id="oldPassword"
            v-model="changePassword.oldPassword"
            label="Old Password"
            type="password"
          />
          <text-input
            id="newPassword"
            v-model="changePassword.newPassword"
            label="New Password"
            type="password"
          />
          <text-input
            id="confirmPassword"
            v-model="changePassword.confirmPassword"
            label="Confirm Password"
            type="password"
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

.card {
  box-shadow: 1px 1px 1px 10px rgba(233, 233, 233, 0.5);
}
</style>
