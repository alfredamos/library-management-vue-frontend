<script setup lang="ts">
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import type EditProfileDto from "../../models/auth/edit-profile.model";
import ApiAuth from "../../services/api-auth.service";
import { apiContext } from "../../behavior-subject/auth-context.rxjs";
import EditProfileForm from "@/components/forms/auth/EditProfileForm.vue";
import { useFetch } from "@/composables/useFetch";
import { departmentUrl } from "@/urls/department.url";
import type DepartmentDto from "@/models/departments/department.model";

const router = useRouter();

const currentUser = computed(() => apiContext.getAuthUser().user!)

const { resource: departments } = useFetch<DepartmentDto[]>(departmentUrl);

const oldProfile = ref<EditProfileDto>({
  ...currentUser.value,
  password: "",
  newPassword: "",
});

const editProfileSubmit = (editProfileDto: EditProfileDto) => {
  ApiAuth.editProfile(editProfileDto)
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
  <EditProfileForm
    v-if="departments && oldProfile"
    :oldProfile="oldProfile"
    :departments="departments"
    @onBackToList="backToList"
    @onEditProfileSubmit="editProfileSubmit"
  />
</template>
