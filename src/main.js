import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Blog from "./pages/Blog.vue";
import Contact from "./pages/Contact.vue";
import Home from "./pages/Home.vue";
import Users from "./pages/Users.vue";
Vue.config.productionTip = false;
Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes: [
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
  ],
});
new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
