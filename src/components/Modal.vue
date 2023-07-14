<template>
  <div>
    <button class="mb-3 normal-case btn btn-outline" @click="toggle">
      Toggle
    </button>
    <transition name="modal">
      <div
        class="fixed inset-0 flex items-center justify-center w-full min-h-screen bg-black/25"
        v-show="isActive"
        @click="toggle"
      >
        <div
          @click.stop=""
          class="block max-w-lg mb-3 rounded-lg min-h-[250px] min-w-[250px] bg-gray-400 mx-auto"
        ></div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isActive = ref(false);
const toggle = () => (isActive.value = !isActive.value);
</script>

<style lang="scss" scoped>
/* Quand l'animation commence et quand il est entrer de se terminer applique ça */
.modal-enter-from,
.modal-leave-active {
  opacity: 0;
  transform: translateY(-15px);
}
/* Quand l'animation va vers la fin de son comencement applique ça */
.modal-enter-to {
  opacity: 1;
  transform: translateY(0);
}

/* Dans les 2 grandes etapes de l'animation applique des transition*/
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
</style>
