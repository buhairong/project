// 注册全局组件
import Vue from 'vue'
import BackTop from '../components/backTop/BackTop.vue'
import AccountLogin from '../components/accountLogin/AccountLogin.vue'
import PhoneLogin from '../components/phoneLogin/PhoneLogin.vue'

Vue.component('backTop', BackTop)
Vue.component('accountLogin', AccountLogin)
Vue.component('phoneLogin', PhoneLogin)