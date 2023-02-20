import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import "./assets/css/bootstrap.min.css";
import routes from "./libs/router";
Vue.config.productionTip = false;
Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes,
});
new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
