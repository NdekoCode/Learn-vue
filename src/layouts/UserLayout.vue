<template>
  <div class="p-3 mt-5 bg-red-100">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in" appear>
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
<script setup></script>
<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.7) translateY(-15px);
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: scale(1) translateY(0);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s, transform 0.35s;
}
</style>
