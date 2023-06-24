<template>
  <div>
    <transition name="bounce" appear mode="out-in">
      <div
        key="visible"
        class="alert alert-success alert-dismissible fade show"
        role="alert"
        v-if="visible"
      >
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          @click="toggle"
        ></button>
        <strong>Alert Heading</strong> {{ message }}
      </div>
      <div
        class="alert alert-danger alert-dismissible fade show"
        role="alert"
        key="invisible"
        v-else
      >
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          @click="toggle"
        ></button>
        <strong>Alert Heading</strong> {{ message }}
      </div>
    </transition>
    <button class="btn btn-secondary" @click="toggle">Toggle</button>
  </div>
</template>
<script setup>
import { computed } from "vue";

let firstName = "Arick";
let lastName = "Bulakali";

const rename = () => {
  firstName = "Patrick";
  lastName = "Babunga";
};
let visible = ref(false);
const fullName = computed(() => `${firstName} ${lastName}`);
const toogle = () => {
  visible = !visible;
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: 0.3s, transform 0.3s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
  transform: translateX(20px);
}

.bounce-enter-active {
  animation: bounce-in 0.3s;
}
.bounce-leave-active {
  animation: bounce-out 0.3s;
}
.bounce-move {
  transition: transform 0.3s;
}
.fade-move {
  transition: transform 0.3s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(0);
  }
}
</style>
