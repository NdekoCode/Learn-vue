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
import Alert from "./Alert";
import Counter from "./Counter.vue";
import Item from "./Item.vue";
export default {
  name: "AlertContainer",
  components: {
    // HelloWorld,
    Counter,
    Alert,
    Item,
  },
};
</script>
<style>
</style>
  