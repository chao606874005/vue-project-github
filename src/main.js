import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './libs/ant';
import './libs/axios';
// Vue.config.productionTip = false


// 全局过滤器 时间戳 
import moment from 'moment'
Vue.filter('dateformat', function (dataStr, pattern = 'YYYY-MM-DD') {
  let fmt = dataStr && moment(dataStr).format(pattern) || dataStr
  return fmt
})

// // 通用路由守卫
// import navigationGuards from './navigationGuards';
// Vue.use(navigationGuards, {
//   router: router
// });

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
