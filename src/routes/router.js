import { createRouter, createWebHistory } from "vue-router";

import Blog from "../pages/Blog.vue";
import Home from "../pages/Home.vue";
import Users from "../pages/Users.vue";
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
export default router;
