<template>
  <div class="mb-3">
    <transition-group tag="ul" class="mb-3" name="fade">
      <li v-for="(item, key) in items" :key="key">{{ item }}</li>
    </transition-group>
    <button @click="add" class="btn btn-outline-secondary mb-3 me-1">
      Add item
    </button>
    <button @click="shuffle" class="btn btn-secondary mb-3 me-1">
      Shuffle item
    </button>
  </div>
</template>
<script>
export default {
  name: "Item",
  data() {
    return {
      items: [1, 2, 3, 4, 5],
    };
  },
  methods: {
    shuffle() {
      this.items = this.items.reverse();
      this.add();
    },
    add() {
      this.items.push(parseInt(Math.random() * 100 + this.items.length));
    },
  },
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: 0.3s, transform 0.3s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
  transform: translateX(20px);
}
.bounce-move {
  transition: transform 0.3s;
}
.fade-move {
  transition: transform 0.3s;
}
</style>