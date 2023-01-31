<template>
  <transition name="fade">
    <div
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
  </transition>
</template>
<script>
export default {
  name: "Alert",
  data() {
    return {
      visible: true,
    };
  },
  methods: {
    toggle() {
      this.visible = !this.visible;
    },
  },
  props: {
    message: {
      type: String,
      default: "",
    },
  },
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  opacity: 0.3s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
  transform: translateX(20px);
}
</style>