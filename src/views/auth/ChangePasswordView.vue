<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import type ChangePasswordDto from "../../models/auth/change-password.model";
import ApiAuth from "../../services/api-auth.service";
import { apiContext } from "../../behavior-subject/auth-context.rxjs";
import type CurrentUserDto from "@/models/auth/current-user.model";
import ChangePasswordForm from "@/components/forms/auth/ChangePasswordForm.vue";

const router = useRouter();

const currentUser = ref<CurrentUserDto>(null!);
currentUser.value = apiContext.getAuthUser().user!;

const oldEmployeeCredential = ref<ChangePasswordDto>({
  email: currentUser?.value?.email,
  password: "",
  newPassword: "",
  confirmPassword: "",
});

const changePasswordSubmit = (changePasswordDto: ChangePasswordDto) => {
  console.log("changePassword, changePasswordDto : ", changePasswordDto);

  ApiAuth.changePassword(changePasswordDto)
    .then((resp) => {
      apiContext.updateAuthUser$(resp.data);

      router.push("/");
    })
    .catch((err) => console.log("error : ", err.message));
};

const backToList = () => {
  router.push("/");
};
</script>

<template>
  <ChangePasswordForm
    v-if="oldEmployeeCredential"
    :oldAuthInfo="oldEmployeeCredential"
    @onBackToList="backToList"
    @onChangePasswordSubmit="changePasswordSubmit"
  />
</template>
