class NotificationsStore {
  constructor(start = 0, step = 1) {
    this.state = {
      count: start,
    };
    console.log(this);
    this.step = step;
  }
  increment() {
    this.state.count += this.step;
  }
  decrement() {
    this.state.count -= this.step;
  }
}
const notifStore = new NotificationsStore();
const counter = {
  data() {
    return {
      state: notifStore.state,
    };
  },
  template: /*html */ `<div class="mb-3"> {{count}} <button class="btn btn-outline-secondary" @click="increment">Incrementer</button></div>`,

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
const notifications = {
  template: /*html */ `<div>
  <counter></counter>
    <button class="btn btn-secondary" @click="addNotification">add notif</button>
  </div>`,
  components: {
    counter,
  },
  methods: {
    addNotification() {},
  },
};
const vm = new Vue({
  el: "#app",
  components: {
    counter,
    notifications,
  },
});
