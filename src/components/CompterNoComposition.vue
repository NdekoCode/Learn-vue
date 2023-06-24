<template>
  <div class="container">
    <div class="mb-3">{{ counter.count }}</div>
    <div class="gap-3 d-flex">
      <button @click="increment" class="btn btn-primary">Increment</button>
      <button @click="pause" class="btn btn-secondary">Pause</button>
      <button @click="play" class="btn btn-secondary">Play</button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";

const counter = reactive({
  count: 0,
  timer: null,
});

const increment = () => {
  counter.count += 1;
};

const play = () => {
  counter.timer = window.setInterval(increment, 1000);
};
const pause = () => {
  window.clearInterval(counter.timer);
  counter.timer = null;
};
onMounted(() => play());
</script>
