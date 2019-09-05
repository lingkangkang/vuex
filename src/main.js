// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import   './commonJS/watchRoute'
import VueScroller from 'vue-scroller'
Vue.use(VueScroller)



import $ from 'jquery'
import './assets/bootstrap/css/bootstrap.min.css'
import './assets/bootstrap/js/bootstrap.min'
import "./CSS/common.css";
import "./CSS/main.css";
/*注册全局组件*/
import VDistpicker from 'v-distpicker'
import commonTips from './components/commonCmt/tips'
import loading from './components/commonCmt/loading'


Vue.component('v-distpicker',VDistpicker);
Vue.component('common-Tip',commonTips);
Vue.component('common-loading',loading);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
