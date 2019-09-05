import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)
const store = new vuex.Store({
  state: {
    title: "天翼生活",
    loadingCtrl:false,
    clientWidth:document.documentElement.clientWidth,
    clientHeight:document.documentElement.clientHeight
  },
  mutations: {
    increment(state, status) {
      state.loadingCtrl=status;
    }
  },
  actions: {
    changeLogin(context, status) {
      context.commit('increment', status)
    }
  }
})

export default store

