import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element, {size : 'small'});
import 'font-awesome/css/font-awesome.min.css'

import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
	ak : 'IM4V6t01b8ERWaVGzjVXgGBEbz5X3kTD'
});

import './assets/css/my.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
