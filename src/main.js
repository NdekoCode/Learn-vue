import axios from "axios";
import { createApp } from "vue";
import vueAxios from "vue-axios";
import App from "./App.vue";
import "./assets/scss/main.scss";
import DefaultLayout from "./layouts/DefaultLayout.vue";
import SimpleLayout from "./layouts/SimpleLayout.vue";
import UserLayout from "./layouts/UserLayout.vue";
import router from "./router/router.js";
const app = createApp(App);
app.component("default-layout", DefaultLayout);
app.component("simple-layout", SimpleLayout);
app.component("user-layout", UserLayout);

app.use(router);
app.use(vueAxios, axios);
app.mount("#app");
