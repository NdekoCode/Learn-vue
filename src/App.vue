<template>
  <div id="app">
  <div class="sidebar">
  <h1>Sidebar</h1>
    <router-view name="sidebar"></router-view>
  </div>
    <div class="container mt-5">
    <h1>Main</h1>
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
