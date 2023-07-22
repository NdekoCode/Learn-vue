import "./assets/scss/main.scss";
import axios from "axios";
import vueAxios from "vue-axios";
import router from "./routes/router.js";
import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);

app.use(router);
app.use(vueAxios, axios);
app.mount("#app");
