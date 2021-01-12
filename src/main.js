import Vue from "vue";
import { button, Layout, Icon, Drawer } from "ant-design-vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store";
import "ant-design-vue/dist/antd.less";

Vue.config.productionTip = false;

Vue.use(button);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Drawer);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
