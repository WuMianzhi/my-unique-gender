import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { setupI18n } from "./locales/setupI18n";

const app = createApp(App);

app.use(setupI18n);
app.mount("#app");
