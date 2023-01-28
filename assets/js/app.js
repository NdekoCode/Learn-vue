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
  
  <slot name="footer"></slot>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" @click="close"></button>
    <div className="header">{{header}}</div>
  {{ message }}
  <slot name="header"></slot>
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
const formUser = {
  props: {
    value: {
      type: Object,
    },
  },
  data() {
    return {
      user: { ...this.value },
    };
  },
  methods: {
    submitForm() {
      this.$emit("input", this.user);
    },
  },
  template: /*html */ `<form action="" @submit.prevent="submitForm">
  <div class="mb-3">
    <input type="text" class="form-control" placeholder="Votre Prenom"  v-model="user.firstName"/>
  </div>
  <div class="mb-3">
    <input type="text" class="form-control" placeholder="Votre Nom"  v-model="user.lastName"/>
  </div>
  <button class="btn btn-success">Valider</button>
  <div>
  {{ user }}
  </div>
  </form>
  `,
};
let vm = new Vue({
  el: "#app",
  data() {
    return {
      message: "Salut guy",
      alert: false,
      user: {
        firstName: "Gloire",
        lastName: "Mutaliko",
      },
    };
  },

  components: {
    compter,
    message,
    formUser,
  },
  methods: {
    showAlert() {
      this.alert = !this.alert;
    },
    hideAlert() {
      this.alert = false;
    },
    getData(data) {
      console.log(data);
      this.user = data;
    },
  },
});
