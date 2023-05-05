<script setup lang="ts">
import DepartmentForm from '@/components/forms/departments/DepartmentForm.vue';
import type DepartmentDto from '@/models/departments/department.model';
import apiDepartment from '@/services/api-department.service';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const department = ref<DepartmentDto>({
      id: "",
      name: "",
      faculty: ""
})

const backToList = () => {
router.push("/departments")
}

const submitDepartment = (departmentDto: DepartmentDto) => {
      console.log("In add-department, department : ", departmentDto);
      
      apiDepartment.create(departmentDto)
      .then(resp => {
            department.value = resp.data
            router.push("/departments")
      })
      .catch(err => console.log("error : ", err.message)
      )
}


</script>

<template>
<DepartmentForm
 form-name="Create"
 :initial-department="department"
 @on-back-to-list="backToList"
 @on-submit-department="submitDepartment"
/>
</template>