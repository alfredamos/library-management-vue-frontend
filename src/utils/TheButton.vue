<script setup lang="ts">
import {computed} from "vue"

interface Props{
      buttonType: string;
      buttonColor: string;
      buttonName: string;
      isFormControl?: boolean;
}

const {buttonColor, buttonName, buttonType, isFormControl} = defineProps<Props>()

const buttonInputClass = `btn btn-${buttonColor} m-1 fw-bold`

const buttonColorName = computed(() => {
      const btnClassName = isFormControl ? `${buttonInputClass} form-control`: buttonInputClass

      return btnClassName
})

</script>

<template>
      <button       
      :type="buttonType"
      :class="buttonColorName">{{ buttonName }}</button> 
</template>