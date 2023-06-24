<template>
  <input v-bind="inputAttribute" />
</template>
<script setup>
import { reactive } from "vue";

const inputAttribute = reactive({
  type: "text",
  placeholder: "Entrer votre nom",
  name: "firstName",
  disabled: false,
  style: {
    color: "green",
    padding: "10px",
  },
});
</script>
