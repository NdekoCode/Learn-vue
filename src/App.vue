<template>
  <div id="app">
    <div class="container mt-5">
      <Users />
    </div>
  </div>
</template>

<script>
import Users from "./components/Users";
export default {
  name: "App",
  components: {
    Users,
  },
};
</script>

<style src="./assets/css/bootstrap.min.css">
</style>
