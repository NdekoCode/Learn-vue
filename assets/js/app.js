Vue.component("message", {
  props: {
    cls: {
      type: [String, Number],
      default: "alert alert-danger",
    },
    message: String,
  },
  template: `
  <div :class="cls">{{ message }}
  </div>`,
});
let vm = new Vue({
  el: "#app",
  data() {
    return {
      message: "Salut guy",
    };
  },
});
