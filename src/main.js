import "./assets/scss/main.scss";
import axios from "axios";
import vueAxios from "vue-axios";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Blog from "./pages/Blog.vue";
import Home from "./pages/Home.vue";
import Users from "./pages/Users.vue";
const app = createApp(App);
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/users",
      name: "users",
      component: Users,
    },
    {
      path: "/blog",
      name: "blog",
      component: Blog,
    },
  ],
});
app.use(router);
app.use(vueAxios, axios);
app.mount("#app");
