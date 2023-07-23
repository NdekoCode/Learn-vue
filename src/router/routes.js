import page404 from "@/pages/page404.vue";
import Blog from "../pages/Blog.vue";
import Home from "../pages/Home.vue";
import Users from "../pages/Users.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      layout: "default-layout",
    },
  },
  {
    path: "/users",
    meta: {
      layout: "user-layout",
    },
    children: [
      {
        path: "",
        name: "users",
        component: Users,
      },
      {
        path: ":id(\\d+)",
        name: "users.show",
        props: true,
        component: () => import("@/pages/ViewUser.vue"),
      },
    ],
  },
  {
    path: "/blog",
    name: "blog",
    component: Blog,
    meta: {
      layout: "simple-layout",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: page404,
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
