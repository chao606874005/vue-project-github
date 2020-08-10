import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    /* 首页 */
    {
      path: '/',
      name: 'homepage',
      component: () => import(/* webpackChunkName: "homepage" */ './pages/homepage'),
    },
    /* 知识点 */
    {
      path: '/knowledge',
      component: () => import(/* webpackChunkName: "knowledge" */ './pages/knowledge/manage'),
      children: [
        {
          path: '',
          redirect: 'direction'
        },
        {
          path: '/knowledge/direction',
          name: 'direction',
          component: () => import(/* webpackChunkName: "direction" */ './pages/knowledge/direction')
        }]
    }
  ]
})

const originalPush = Router.prototype.push
   Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}