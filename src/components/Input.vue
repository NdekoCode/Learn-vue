<template>
  <input v-bind="inputAttribute" />
</template>
<script>
export default {
  data() {
    return {
      inputAttribute: {
        type: "text",
        placeholder: "Entrer votre nom",
        name: "firstName",
        disabled: false,
        style: {
          color: "green",
          padding: "10px",
        },
      },
    };
  },
};
</script>
