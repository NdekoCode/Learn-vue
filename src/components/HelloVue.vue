<script setup lang="ts">
import { computed, onMounted, reactive, ref } from "vue";
import ChildComp from "./ChildComp.vue";
import Search from "./Search.vue";
const firstName = ref("Arick");
const lastName = ref("Bulakali");
const fruits = ref([
  { title: "Tomate", price: 10, actif: true },
  { title: "Banane", price: 20, actif: false },
  { title: "Mangue", price: 15, actif: true },
]);
const getValue = (e) => {
  console.log(e);
  fruits.value.push({ title: e, price: 0, actif: true });
};
const rename = () => {
  firstName.value = "Patrick";
  lastName.value = "Babunga";
};
const user = reactive({
  firstName: "Arick",
  lastName: "Bulakali",
  email: "arick@gmail.com",
  password: "",
});
let visible = ref(false);
const fullName = computed(() => `${firstName.value} ${lastName.value}`);
const toggle = () => {
  visible.value = !visible.value;
};
onMounted(async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data[0]);
});
</script>
<template>
  <div>
    <Search @sendvalue="($event) => getValue($event)" />
    <p>First Name: {{ firstName }}</p>
    <p>Last Name: {{ lastName }}</p>
    <p>Full Name: {{ fullName }}</p>
    <button class="btn btn-secondary" @click="toggle">Toggle</button>
    <button class="btn btn-secondary" @click="rename">Rename</button>
    <ChildComp :user="user" />
    <ul>
      <template v-for="({ title, price, actif }, index) of fruits">
        <li v-if="actif">{{ title }}: {{ price }}</li></template
      >
    </ul>
  </div>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: 0.3s, transform 0.3s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
  transform: translateX(20px);
}

.bounce-enter-active {
  animation: bounce-in 0.3s;
}
.bounce-leave-active {
  animation: bounce-out 0.3s;
}
.bounce-move {
  transition: transform 0.3s;
}
.fade-move {
  transition: transform 0.3s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(0);
  }
}
</style>
