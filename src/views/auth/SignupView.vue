<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import type SignupDto from "../../models/auth/signup.model";
import ApiAuth from "../../services/api-auth.service";
import type AuthUserDto from "../../models/auth/auth-user.model";
import { apiContext } from "../../behavior-subject/auth-context.rxjs";
import SignupForm from "@/components/forms/auth/SignupForm.vue";
import { useFetch } from "@/composables/useFetch";
import { departmentUrl } from "@/urls/department.url";
import type DepartmentDto from "@/models/departments/department.model";

const router = useRouter();

const authUser = ref<AuthUserDto>(null!);
//const departments = ref<DepartmentDto[]>([])
const {resource: departments} = useFetch<DepartmentDto[]>(departmentUrl)
const signupSubmit = (signupDto: SignupDto) => {
  console.log("signup, signupDto : ", signupDto);

  ApiAuth.signup(signupDto)
  .then((resp) => {
    authUser.value = resp.data;

    apiContext.updateAuthUser$(authUser.value);

    router.push("/");
  })
  .catch(err => console.log("error : ", err.message)
  )
};

const backToList = () => {
      router.push("/")
}
</script>

<template>
  <SignupForm
  v-if="departments"
  :departments="departments"
  @onBackToList="backToList"
  @onSignupSubmit="signupSubmit"
  />
</template>


