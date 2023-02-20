import Blog from "../pages/Blog.vue";
import Contact from "../pages/Contact.vue";
import Home from "../pages/Home.vue";
import page404 from "../pages/page404.vue";
import Users from "../pages/Users.vue";
const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/blog",
    component: Blog,
  },
  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "/users",
    component: Users,
  },
  {
    path: "*",
    component: page404,
  },
];
export default routes;
