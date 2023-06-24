<template>
  <p>{{ user.firstName }}</p>
  <p>{{ user.lastName }}</p>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import { User } from "../libs/constants/types";
const { user } = defineProps<{ user: User }>();
onMounted(() => {
  console.log(user);
});
</script>
