<script setup lang="ts">
interface Props {
  modelValue: any;
  label: string;
  type: any;
  id: any;
}
const { modelValue, label, type, id } = defineProps<Props>();
console.log("type : type : ", type);
console.log("id : id : ", id);

const emit = defineEmits(["update:modelValue"]);

const handleInput = ($event: any) => {
  emit("update:modelValue", $event.target.value);
};
</script>
<template>
  <div class="mb-3">
    <label :for="id" class="form-label">{{ label }}</label>
    <input
      :id="id"
      :value="modelValue"
      @input="handleInput"
      class="form-control"
      :type="type"
    />
  </div>
</template>
