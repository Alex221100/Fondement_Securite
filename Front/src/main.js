import "@/styles/styles.scss";
import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import "@mdi/font/css/materialdesignicons.css";
import interceptor from "@/api/http/interceptor";

Vue.config.productionTip = false;
Vue.use(interceptor);

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
