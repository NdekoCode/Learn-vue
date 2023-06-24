<template>
  <div class="mb-3">
    <transition-group tag="ul" class="mb-3" name="fade">
      <li v-for="item in items" :key="item">{{ item }}</li>
    </transition-group>
    <button @click="add" class="mb-3 btn btn-outline-secondary me-1">
      Add item
    </button>
    <button @click="shuffle" class="mb-3 btn btn-secondary me-1">
      Shuffle item
    </button>
  </div>
</template>
<script setup>
import { ref } from "vue";
const items = ref([1, 2, 3, 4, 5]);
const add = () => {
  items.value.push(parseInt(Math.random() * 100 + items.value.length));
};
const shuffle = () => {
  items.value = items.value.toReversed();
  add();
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: 0.3s, transform 0.3s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
  transform: translateX(20px);
}
.bounce-move {
  transition: transform 0.3s;
}
.fade-move {
  transition: transform 0.3s;
}
</style>
