import axios from "axios";
import { createApp } from "vue";
import vueAxios from "vue-axios";
import App from "./App.vue";
import "./assets/scss/main.scss";
import router from "./router/router.js";
const app = createApp(App);

app.use(router);
app.use(vueAxios, axios);
app.mount("#app");
