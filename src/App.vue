<template>
  <div id="app">
    <main>
      <div class="sidebar">
        <router-view name="sidebar"></router-view>
      </div>
      <div>
        <Navbar />
        <div class="container mt-5">
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
import vueAxios from "vue-axios";
import Navbar from "./components/Navbar";
Vue.use(vueAxios, axios);
export default {
  name: "App",
  components: { Navbar },
};
</script>

<style scope>
main {
  display: flex;
  flex-wrap: nowrap;
  height: 100vh;
  height: -webkit-fill-available;
  max-height: 100vh;
  overflow-x: auto;
  overflow-y: hidden;
}
</style>
