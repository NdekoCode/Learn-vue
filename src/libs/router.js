import Sidebar from "../components/Sidebar.vue";
import Article from "../pages/Article.vue";
import Blog from "../pages/Blog.vue";
import Contact from "../pages/Contact.vue";
import Home from "../pages/Home.vue";
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
  },
  {
    path: "/blog",
    component: Blog,
  },
  {
    // On veut que l'id soit numeric
    path: "/article/:id(\\d+)",
    component: Article,
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
