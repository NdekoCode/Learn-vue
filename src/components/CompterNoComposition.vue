<template>
  <div class="container">
    <div class="mb-3">{{ count }}</div>
    <div class="d-flex gap-1 gap-3">
      <button @click="increment" class="btn btn-primary">Increment</button>
      <button @click="pause" class="btn btn-secondary">Pause</button>
      <button @click="play" class="btn btn-secondary">Play</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompterNoComposition",
  data() {
    return {
      count: 0,
      timer: null,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    play() {
      this.timer = window.setInterval(this.increment, 1000);
    },
    pause() {
      window.clearInterval(this.timer);
      this.timer = null;
    },
  },
  mounted() {
    this.play();
  },
};
</script>
