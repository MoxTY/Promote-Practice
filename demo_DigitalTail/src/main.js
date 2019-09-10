// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//store
import store from './store'
Vue.use(store);

//swiper组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

//axios
import axios from 'axios'
Vue.prototype.$http = axios


Vue.config.productionTip = false



//css
//这里的css路径是修改了系统默认配置路径，具体在webpackbase/resolve
import 'css/reset.css'
import 'css/iconfont.css'

//js
import './assets/js/fastclick.js'
FastClick.attach(document.body);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
