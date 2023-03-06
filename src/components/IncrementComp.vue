<template>
  <div class="container">
    Compteur {{ n }}
    <button @click="increment" class="btn btn-primary">Increment</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup(props) {
    const n = ref(0);
    console.info(n);
    const increment = () => {
      n.value++;
    };
    return {
      n,
      increment,
    };
  },
};
</script>
