<script setup>
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Navbar />
  <main class="d-flex">
    <router-view name="sidebar"></router-view>
    <article>
      <router-view> </router-view>
    </article>
  </main>
  <div>
    <h1>Hey</h1>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
