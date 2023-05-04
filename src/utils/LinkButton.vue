<script setup lang="ts">
import { computed} from "vue";

interface Props {
  linkTo: string;
  linkDisplay: string;
  linkName: string;
  isFormControl?: boolean;
}

const { linkDisplay, linkName, linkTo, isFormControl } = defineProps<Props>();

const clsDisplay = `btn btn btn-${linkDisplay} m-1 fw-bold`

const display = computed(() => {
  return !isFormControl?  clsDisplay : `${clsDisplay} form-control`;
});
</script>

<template>
  <router-link :to="linkTo" :class="display"> {{ linkName }}</router-link>
</template>
