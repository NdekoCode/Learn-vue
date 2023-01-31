<template>
  <div class="mb-3">
    {{ count }}
    <button class="btn btn-secondary" @click="increment">Incrementer</button>
  </div>
</template>
<script>
import notifStore from "../store/NotificationsStore";
export default {
  name: "Counter",
  data() {
    return {
      state: notifStore.state,
    };
  },
  computed: {
    count() {
      return this.state.count;
    },
  },
  methods: {
    increment() {
      notifStore.increment();
    },
  },
};
</script>