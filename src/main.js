import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './stores/index'

// 模拟数据
require('./mock/load')

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import axios from './https/index'

Vue.prototype.$https=axios

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
