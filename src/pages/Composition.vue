<template>
  <IncrementComp />
  <!-- <CompterNoComposition /> -->
</template>

<script>
// import CompterNoComposition from "../components/CompterNoComposition.vue";
import IncrementComp from "../components/IncrementComp.vue";

export default {
  name: "Composition",
  components: {
    IncrementComp,
  },
};
</script>
