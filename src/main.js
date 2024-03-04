import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";

import "@/axios.js";
import "@/assets/style/tailwind.css";
import "@/assets/style/global.css";
import "flowbite";
import "preline/preline";

import { registerGlobalComponent } from "./utils/import";

let app = createApp(App);

registerGlobalComponent(app);

app.use(router);
app.mount("#app");
