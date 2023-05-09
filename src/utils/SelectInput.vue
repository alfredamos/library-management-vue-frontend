<script setup lang="ts">
interface Props {
  id: any;
  label: string;
  modelValue: any;
  values: any[];
  property: any;
}

const { id, label, modelValue, values, property } = defineProps<Props>();

//console.log("In select-input, values : ", values);
//console.log("In select-input, property : ", property);

const emit = defineEmits(["update:modelValue"]);

const handleInput = ($event: any) => {
  emit("update:modelValue", $event.target.value);
};
</script>

<template>
  <div class="mb-3">
    <label :for="id" class="form-label">{{ label }}</label>
    <select
      :id="id"
      :value="modelValue"
      @input="handleInput"
      class="form-select"
    >
      <option value="">Please select {{ label }}</option>
      <option v-for="value in values" :value="value.id" :key="value.id">
        {{ value[property] }}
      </option>
    </select>
  </div>
</template>
