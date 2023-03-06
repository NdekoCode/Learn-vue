<template>
  <div class="container">
    Compteur {{ n }}
    <button @click="increment" class="btn btn-primary">Increment</button>
  </div>
</template>

<script>
import { useIncrement } from "../compositions/increment";
export default {
  setup(props) {
    const [n, increment] = useIncrement();
    return {
      n,
      increment,
    };
  },
};
</script>
