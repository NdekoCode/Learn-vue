const vm = new Vue({
  el: "#app",
  data() {
    return {
      count: 0,
      timer: null,
      success: false,
      message: "It god",
    };
  },
  computed: {
    cls() {
      console.log("Called");
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
