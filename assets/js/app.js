const vm = new Vue({
  el: "#app",
  data() {
    return {
      count: 0,
      timer: null,
      success: false,
      message: "It god",
      user: {
        firstName: "Gloire",
        lastName: "Mutaliko",
      },
    };
  },
  computed: {
    fullname: {
      get: function () {
        return this.user.firstName + " " + this.user.lastName;
      },
      set: function (value) {
        const parts = value.split(" ");
        this.user.firstName = parts[0];
        this.user.lastName = parts[1];
      },
    },
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
