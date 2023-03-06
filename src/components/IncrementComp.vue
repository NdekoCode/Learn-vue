<template>
  <div class="container">
    Compteur {{ n }} Compteur {{ n2 }}
    <button @click="increment" class="btn btn-primary">Increment</button>
    <button @click="increment2" class="btn btn-primary">Increment 2</button>
  </div>
</template>

<script>
import { useIncrement } from "../compositions/increment";
export default {
  setup(props) {
    const [n, increment] = useIncrement();
    const [n2, increment2] = useIncrement(1, 2);
    return {
      n,
      increment,
      n2,
      increment2,
    };
  },
};
</script>
