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
  template: /*html */ `<div>
    <span>{{count}}</span>
    <button @click="increment" class="btn btn-secondary">Incrementer</button>
  </div>`,
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment: function () {
      this.count++;
    },
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
