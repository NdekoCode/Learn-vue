import Sidebar from "../components/Sidebar.vue";
import Article from "../pages/Article.vue";
import Blog from "../pages/Blog.vue";
import Contact from "../pages/Contact.vue";
import Home from "../pages/Home.vue";
import Items from "../pages/Items.vue";
import page404 from "../pages/page404.vue";
import Users from "../pages/Users.vue";
const routes = [
  {
    path: "/",
    // Si on veut charger plusieurs composant dans une page selon le nom attribuer à <router-view name=""></router-view>
    components: {
      default: Home,
      sidebar: Sidebar,
    },
    name: "home",
  },
  {
    path: "/blog",
    component: Blog,
    name: "blog",
  },
  {
    // On veut que l'id soit numeric
    path: "/article/:id(\\d+)",
    component: Article,
    name: "article",
  },
  {
    path: "/contact",
    component: Contact,
    name: "contact",
  },
  {
    path: "/users",
    component: Users,
    name: "user",
  },
  {
    path: "/items",
    component: Items,
    name: "settings",
  },
  {
    path: "*",
    component: page404,
    name: "404",
  },
];
export default routes;
