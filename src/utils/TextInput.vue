<script setup lang="ts">
interface Props {
  modelValue: string;
  label: string;
}
const { modelValue, label } = defineProps<Props>();

const emit = defineEmits(["update:modelValue"]);

const handleInput = ($event: any) => {
  emit("update:modelValue", $event.target.value);
};
</script>
<template>
  <div class="mb-3">
    <label for="modelValue" class="form-label">{{ label }}</label>
    <input
      id="modelValue"
      :value="modelValue"
      @input="handleInput"
      type="text"
      class="form-control"
    />
  </div>
</template>
