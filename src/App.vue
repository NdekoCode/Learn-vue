<template>
  <div id="app">
    <div class="container mt-5">
      <Counter />
      <Counter />
      <Counter />
      <Alert />
    </div>
  </div>
</template>

<script>
import Alert from "./components/Alert";
import Counter from "./components/Counter.vue";
export default {
  name: "App",
  components: {
    // HelloWorld,
    Counter,
    Alert,
  },
};
</script>

<style src="./assets/css/bootstrap.min.css">
</style>
