<template>
  <div id="app">
    <div class="container mt-5">
    <router-view></router-view>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
import vueAxios from "vue-axios";
Vue.use(vueAxios, axios);
export default {
  name: "App",
};
</script>

<style src="./assets/css/bootstrap.min.css">
</style>
