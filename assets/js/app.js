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
