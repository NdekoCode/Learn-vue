let message = {
  props: {
    cls: {
      type: [String, Number],
      default: "alert alert-danger",
    },
    message: String,
  },
  template: /* html */ `
  <div :class="cls">{{ message }}
  </div>`,
};
let compter = {
  props: {
    start: {
      type: Number,
      default: 0,
    },
    step: {
      type: Number,
      default: 1,
    },
  },
  template: /*html */ `<div class="mb-3">
    <span>{{count}}</span>
    <button @click="increment" class="btn btn-secondary">Incrementer</button>
  </div>`,
  data() {
    return {
      count: this.start,
    };
  },
  methods: {
    increment: function () {
      console.log(this.step);
      this.count = this.count + this.step;
    },
  },
  mounted: function () {
    this.count = this.start;
  },
};

let vm = new Vue({
  el: "#app",
  data() {
    return {
      message: "Salut guy",
    };
  },
  components: {
    compter,
    message,
  },
});
