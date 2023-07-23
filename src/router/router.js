import { authMiddleware } from "@/middlewares/auth.mid.js";
import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes.js";
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.middleware === "auth") {
    return authMiddleware(to, from, next);
  } else {
    next();
  }
});
export default router;
