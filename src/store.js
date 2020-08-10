import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // isLogined: true,
    // 当前头部导航
    curHeaderMenu: '',
    curUserInfo: {},
    // 当前直播信息
    curLiveVideo: {},
    // 当前点播信息
    curPointVideo: {}
  },
  mutations: {
    changeCurLiveVideo(state, videos) {
      Vue.set(state,'curLiveVideo',{})
      Vue.set(state,'curLiveVideo',videos)
      console.log('----manage-liveInfo=',this.state.curLiveVideo)
    },
    changeCurPointVideo(state, videos) {
      Vue.set(state,'curPointVideo',{})
      Vue.set(state,'curPointVideo',videos)
      console.log('----manage-pointInfo=',this.state.curPointVideo)
    },
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
