import Sidebar from "../components/Sidebar.vue";
import Article from "../pages/Article.vue";
import Contact from "../pages/Contact.vue";
import Home from "../pages/Home.vue";
import page404 from "../pages/page404.vue";
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
    // For lazy laoding page importer,
    // Charge le composant de manière asynchrone, il sera charger uniquement quand l'utilisateur en aura besoin.
    component: () => import("../pages/Blog.vue"),
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
    // Charge le composant de manière asynchrone, il sera charger uniquement quand l'utilisateur en aura besoin.
    component: () => import("../pages/Users.vue"),
    name: "user",
  },
  {
    path: "/items",
    component: () => import("../pages/Items.vue"),
    name: "settings",
    // Sera executer avant que l'on accède à cette route et il prend 3 paramètres
    /**
     * -route: qui vous permet de recuperer les informations sur la route
     * - redirect: un callback que l'on va appeler pour pouvoir rediriger
     * - next: qui est un callback que l'on va pouvoir appeler pour lui dire d'aller à la route suivante ou de continuer
     */
    beforeEnter(route, redirect, next) {
      const confirm = window.confirm("Etes vous déjà connecter ?");
      if (confirm) {
        next();
      } else {
        console.log(route, redirect, next);
      }
    },
  },
  {
    path: "/:pathMatch(.*)*",
    component: page404,
    name: "404",
  },
];
export default routes;
