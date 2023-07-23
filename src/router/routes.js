import page404 from "@/pages/page404.vue";
import Blog from "../pages/Blog.vue";
import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";
import Users from "../pages/Users.vue";
const routes = [
  {
    path: "/login",
    component: Login,
    name: "login",
    meta: {
      layout: "user-layout",
      middleware: "auth",
    },
  },
  {
    path: "/logout",
    name: "logout",
    beforeEnter: [
      (to, from, next) => {
        localStorage.removeItem("token");
        next({
          name: "login",
        });
      },
    ],
  },
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      layout: "default-layout",
      middleware: "auth",
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
    beforeEnter: [
      (to, from, next) => {
        const response = confirm(
          "Voulez-vous vraiment acceder à cette route ?"
        );
        if (response) {
          next();
        } else {
        }
      },
    ],
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
  {
    path: {
      name: "logout",
    },
    title: "Logout",
  },
];
export default routes;
