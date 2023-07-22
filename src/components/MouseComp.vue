<script setup>
import { useMouse } from "../compositions/mouseComposable.js";
const { x, y } = useMouse();
</script>
<template>
  <div class="p-3">X: {{ x }} Y:{{ y }}</div>
</template>
