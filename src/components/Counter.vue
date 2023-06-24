<template>
  <div class="mb-3">
    {{ count }}
    <button class="btn btn-secondary" @click="increment">Incrementer</button>
  </div>
</template>
<script setup>
import { ref } from "vue";
import notifStore from "../store/NotificationsStore";
const state = ref(notifStore.state);
const count = ref(state.count);
const increment = () => {
  notifStore.increment();
};
</script>
