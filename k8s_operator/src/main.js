import Vue from 'vue';
import App from './App.vue';
import router from "./routers";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import toast from "common/toast"

Vue.config.productionTip = false;

Vue.use(ElementUI)
Vue.use(toast)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
