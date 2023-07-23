import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes.js";
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const authenticate = !!localStorage.getItem("token");
  if (to.name !== "login" && !authenticate) {
    next({ name: "login" });
  } else {
    next();
  }
});
export default router;
