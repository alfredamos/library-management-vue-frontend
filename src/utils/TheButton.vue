<script setup lang="ts">
interface Props{
      buttonType: string;
      buttonDisplay: string;
      buttonName: string;
}

const {buttonDisplay, buttonName, buttonType} = defineProps<Props>()
</script>

<template>
      <button       
      :type="buttonType"
      :class="`btn btn-${buttonDisplay} m-1 fw-bold`">{{ buttonName }}</button> 
</template>