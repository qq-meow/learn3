// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'

import  { ToastPlugin } from 'vux'
Vue.use(ToastPlugin)

// 或者umd方式
// 引入构建的js文件
// Vue.use(vuxToastPlugin)

// 默认参数
Vue.use(ToastPlugin, {position: 'top'})

Vue.config.productionTip = false

// Vue.prototype.setStorage = (key, val) => {
//   localStorage.setItem(key, JSON.stringify(val))
// }

// Vue.prototype.getStorage = (key) => {
//   console.log(localStorage.getItem(key), 1111)
//   return JSON.parse(localStorage.getItem(key))
// }

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
