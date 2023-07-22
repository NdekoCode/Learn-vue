import Blog from "../pages/Blog.vue";
import Home from "../pages/Home.vue";
import Users from "../pages/Users.vue";
const routes = [
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
];

export const HOME_ROUTES = [
  {
    path: {
      name: "home",
    },
    title: "Acceuil",
  },
  {
    path: {
      name: "blog",
    },
    title: "Blog",
  },
  {
    path: {
      name: "users",
    },
    title: "Users",
  },
];
export default routes;
