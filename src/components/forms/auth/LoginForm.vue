<script setup lang="ts">
import type LoginDto from "@/models/auth/login.model";
import { ref } from "vue";
import TextInput from "@/utils/TextInput.vue";
import TheButton from "@/utils/TheButton.vue";

const login = ref<LoginDto>({
  email: "",
  password: "",
});

const emit = defineEmits(["onLoginSubmit", "onBackToList"]);

const loginSubmit = () => {
  console.log("Clicked...");

  emit("onLoginSubmit", login.value);
};

const backToList = () => {
  emit("onBackToList");
};
</script>
<template>
  <div class="border pado mt-3">
    <form @submit.prevent="loginSubmit">
      <div class="card">
        <div class="card-header">
          <h4 class="text-center">Login Form</h4>
        </div>
        <div class="card-body">
          <text-input
            id="email"
            v-model="login.email"
            label="Email"
            type="email"
          />
          <text-input
            id="password"
            v-model="login.password"
            label="Password"
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
          <!-- <button
            @click="backToList"
            type="button"
            class="btn btn-outline-secondary form-control m-1 fw-bold"
          >
            Back
          </button> -->
        </div>
      </div>
    </form>
  </div>
</template>
<style scoped>
.pado {
  padding: 10px;
}

.card {
  box-shadow: 1px 1px 1px 10px rgba(233, 233, 233, 0.5);
}
</style>
