const vm = new Vue({
  el: "#app",
  data() {
    return {
      count: 0,
      timer: null,
    };
  },
  mounted() {
    console.log("Time");
    this.timer = setInterval(() => this.count++, 1000);
  },
  destroyed() {
    clearInterval(this.timer);
  },
});
