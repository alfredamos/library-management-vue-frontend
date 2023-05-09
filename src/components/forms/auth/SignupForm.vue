<script lang="ts" setup>
import { ref } from "vue";
import TextInput from "@/utils/TextInput.vue";
import SelectInput from "@/utils/SelectInput.vue";
import Gender from "@/enum/gender.enum";
import type SignupDto from "@/models/auth/signup.model";
import { useFetch } from "../../../composables/useFetch";
import { departmentUrl } from "../../../urls/department.url";
import GenderLoad from "@/models/utils/gender-load.util";
import TheButton from "@/utils/TheButton.vue";

const { resource: departments } = useFetch(departmentUrl);

const emit = defineEmits(["onBackToList", "onSignupSubmit"]);

const signup = ref<SignupDto>({
  name: "",
  email: "",
  phone: "",
  gender: Gender.Male,
  password: "",
  confirmPassword: "",
  departmentId: "",
});

const backToList = () => {
  emit("onBackToList");
};

const submitSignup = () => {
  emit("onSignupSubmit", signup.value);
};
</script>

<template>
  <div class="border pado">
    <form @submit.prevent="submitSignup">
      <div class="card">
        <div class="card-header">
          <h4 class="text-center">Signup Form</h4>
        </div>
        <div class="card-body">
          <text-input
            id="name"
            v-model="signup.name"
            label="Name"
            type="text"
          />
          <text-input
            id="email"
            v-model="signup.email"
            label="Email"
            type="email"
          />
          <text-input
            id="phone"
            v-model="signup.phone"
            label="Phone"
            type="phone"
          />
          <text-input
            id="password"
            v-model="signup.password"
            label="Password"
            type="password"
          />
          <text-input
            id="confirmPassword"
            v-model="signup.confirmPassword"
            label="Confirm Password"
            type="password"
          />
          <select-input
            v-if="GenderLoad"
            id="gender"
            v-model="signup.gender"
            label="Gender"
            :values="GenderLoad"
            :property="'gender'"
          />
          <select-input
            v-if="departments"
            id="departmentId"
            v-model="signup.departmentId"
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

<style scoped>
.pado {
  padding: 10px;
}
input,
label {
  box-shadow: 1px 1px 10px rgba(234, 233, 235, 0.14);
}
</style>
