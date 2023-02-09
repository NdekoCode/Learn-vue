<template>
  <div id="app">
    <div class="container mt-5">
      <Users />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
import vueAxios from "vue-axios";
import Users from "./components/Users";
Vue.use(vueAxios, axios);
export default {
  name: "App",
  components: {
    Users,
  },
};
</script>

<style src="./assets/css/bootstrap.min.css">
</style>
