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
      meta: {
        belong: 'homepage'
      }
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
          component: () => import(/* webpackChunkName: "direction" */ './pages/knowledge/direction'),
          meta: {
            belong: 'knowledge'
          }
        },
        {
          path: '/knowledge/slot',
          name: 'slot',
          component: () => import(/* webpackChunkName: "direction" */ './pages/knowledge/slot/index'),
          meta: {
            belong: 'knowledge'
          }
        }
      ]
    },
    /* 前端知识点 */
    {
      path: '/front',
      component: () => import(/* webpackChunkName: "front" */ './pages/front/manage'),
      children: [
        {
          path: '',
          redirect: 'es6'
        },
        {
          path: '/front/es6',
          name: 'es6',
          component: () => import(/* webpackChunkName: "es6" */ './pages/knowledge/direction'),
          meta: {
            belong: 'front'
          }
        }
      ]
    }
  ]
})

const originalPush = Router.prototype.push
   Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}