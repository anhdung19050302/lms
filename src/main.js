import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/style/tailwind.css";
import "@/assets/style/global.css";

let app = createApp(App);
app.use(router);
app.mount("#app");
