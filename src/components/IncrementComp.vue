<template>
  <div class="container">
    Compteur {{ n }} Compteur {{ n2 }}
    <button @click="increment" class="btn btn-outline">Increment</button>
    <button @click="increment2" class="btn btn-outline">Increment 2</button>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import { useIncrement } from "../compositions/increment";
const [n, increment] = useIncrement();
const [n2, increment2] = useIncrement(1, 2);
onMounted(() => {
  console.log("Compter mounted");
});
onUnmounted(() => {
  console.log("Compter disable");
});
</script>
