const message = {
  props: {
    cls: {
      type: [String, Number],
      default: "alert alert-danger",
    },
    message: String,
    header: {
      type: String,
    },
  },
  template: /* html */ `
  <div :class="cls">
  
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" @click="close"></button>
    <div className="header">{{header}}</div>
  {{ message }}
  </div>`,
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
const compter = {
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
      alert: false,
    };
  },
  components: {
    compter,
    message,
  },
  methods: {
    showAlert() {
      this.alert = !this.alert;
    },
    hideAlert() {
      this.alert = false;
    },
  },
});
