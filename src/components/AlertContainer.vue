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

<script setup>
import Alert from "./Alert.vue";
import Counter from "./Counter.vue";
import Item from "./Item.vue";
</script>
