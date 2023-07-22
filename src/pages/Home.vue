<template>
  <div>
    <h2>Page d'acceuil</h2>

    <mouse-comp></mouse-comp>
    <Todo />
    <div class="bg-green-600 w-36 h-36" v-ndeko.bold="'Bum'"></div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import MouseComp from "../components/MouseComp.vue";
import Todo from "../components/Todo.vue";
const vArick = {
  created: (el, binding) => {
    console.log(el, binding);
  },
  mounted(el, binding) {
    const colors = ["red", "yellow", "green", "pink", "blue"];
    timer.value = setInterval(() => {
      el.style.backgroundColor =
        colors[parseInt(Math.random() * colors.length - 1)];
    }, 1000);
  },
  unmounted() {
    clearInterval(timer.value);
  },
};

const timer = ref(null);
const vNdeko = (el, binding) => {
  console.log(binding, binding.value);
  const { modifiers } = binding;
  if (modifiers.bold) {
    el.style.fontWeight = "bold";
  }
  if (modifiers.italic) {
    el.style.fontStyle = "italic";
  }
  el.innerHTML = binding.value;

  const timer = ref(null);
};
</script>
