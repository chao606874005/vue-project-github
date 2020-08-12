import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 当前头部导航
    curHeaderMenu: '',
    curUserInfo: {},
  },
  mutations: {
    changeCurHeaderMenu(state, pageActive) {
      state.curHeaderMenu = pageActive
    },
    changeCurUserInfo(state, userInfo) {
      state.curUserInfo = userInfo
    },
  },
  actions: {

  }
})
