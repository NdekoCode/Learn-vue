<template>
  <div id="app">
    <div class="container mt-5">
      <Counter />
      <Counter />
      <Item />
      <Alert message="Apprenez à etre productif" />
    </div>
  </div>
</template>

<script>
import Alert from "./components/Alert";
import Counter from "./components/Counter.vue";
import Item from "./components/Item.vue";
export default {
  name: "App",
  components: {
    // HelloWorld,
    Counter,
    Alert,
    Item,
  },
};
</script>

<style src="./assets/css/bootstrap.min.css">
</style>
