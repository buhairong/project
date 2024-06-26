import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./assets/style/global.css";
import router from './router'
import store from './store'
import './utils/pxToRem';
// import vconsole from 'vconsole'
//
// Vue.prototype.$vConsole = new vconsole()
Vue.use(ElementUI);
Vue.config.productionTip = false

let sensors = window['sensorsDataAnalytic201505'];
if (sensors) {
  sensors.track('ChargingMapH5View', {});
}

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
