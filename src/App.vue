<template>
  <div id="app">
    <div class="container mt-5">
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  </div>
</template>

<script>
import Counter from "./components/Counter.vue";
export default {
  name: "App",
  components: {
    // HelloWorld,
    Counter,
  },
};
</script>

<style src="./assets/css/bootstrap.min.css">
</style>
