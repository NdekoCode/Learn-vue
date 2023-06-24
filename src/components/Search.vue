<template>
  <div>
    <input
      type="search"
      @keydown.enter="sendvalue"
      name="search"
      v-model="input"
    />
  </div>
  <button type="button" @click="sendvalue"></button>
</template>

<script setup lang="ts">
import { ref } from "vue";
const emit = defineEmits<(e: "sendvalue", value: string) => void>();
const input = ref("Event");
const sendvalue = () => {
  emit("sendvalue", input.value);
  console.log(input.value);
  input.value = "";
};
</script>
