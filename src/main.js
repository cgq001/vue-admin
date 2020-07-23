import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


import Loadings from './components/good/Loadings'

Vue.prototype.$loadings = Loadings

Vue.config.productionTip = false

Vue.use(ElementUI, { size: 'small', zIndex: 3000 });

// 全局路由守卫
import './router/auth'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
