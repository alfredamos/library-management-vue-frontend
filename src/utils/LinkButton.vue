<script setup lang="ts">
interface Props {
  linkTo: string;
  linkDisplay: string;
  linkName: string;
}

const { linkDisplay, linkName, linkTo } = defineProps<Props>();
</script>

<template>
  <router-link :to="linkTo" :class="`btn btn-${linkDisplay} m-1 fw-bold`" >{{
    linkName
  }}</router-link>
</template>
