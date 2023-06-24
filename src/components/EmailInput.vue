<template><input type="email" :value="email" /></template>
<script setup>
defineProps({
  name: {
    type: string,
  },
  email: {
    type: string,
    required: false,
    validator: (value) =>
      value.length > 0 &&
      /^[a-z]+(\w|[\-\.])*@[a-z]{2,}(\w|[\-\.])*\.[a-z]{2,5}$/i.test(value),
  },
});
</script>
