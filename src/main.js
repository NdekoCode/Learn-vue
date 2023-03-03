import axios from "axios";
import { createApp } from "vue";
import vueAxios from "vue-axios";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import "./assets/css/bootstrap.min.css";
import routes from "./libs/router";
const router = new createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
const app = createApp(App);
app.use(router);
app.use(vueAxios, axios);
app.mount("#app");
