Vue.directive("salut", {
  bind(el, binding, vnode) {
    // el.value = binding.value;
    console.log(el, binding);
  },
});
Vue.filter("capitalize", (value) => value.toUpperCase());
Vue.filter("reverse", (value) => value.split("").reverse().join(""));
const vm = new Vue({
  el: "#app",
  data() {
    return {
      count: 0,
      timer: null,
      success: false,
      message: "It god",
      guide: "Go to grafikart",
      user: {
        firstName: "Gloire",
        lastName: "Mutaliko",
        fullname: "",
      },
      link: "https://www.grafikart.fr",
    };
  },
  methods: {
    demo() {
      console.log("Demo");
    },
    demo2() {
      console.log("Demo 2");
    },
  },
  watch: {
    success: function (value) {
      console.log("success is modify", value);
    },
  },
  computed: {
    fullname: {
      set(value) {
        const userValue = value.split(" ");
        this.user.fullname = value;
        this.user.firstName = userValue[0] || this.user.firstName;
        this.user.lastName = userValue[1] || this.user.lastName;
      },
      get() {
        return `${this.user.firstName} ${this.user.lastName}`;
      },
    },
    cls() {
      return this.success ? "alert-success" : "alert-danger";
    },
  },
  mounted() {
    console.log("Time");
    this.timer = setInterval(() => this.count++, 1000);
  },
  destroyed() {
    clearInterval(this.timer);
  },
});
