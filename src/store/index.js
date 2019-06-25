import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)
const store = new vuex.Store({
  state: {
    title: "天翼生活"
  },
  mutations: {
    increment(state, status) {
    }
  },
  actions: {
    changeLogin(context, status) {
      context.commit('increment', status)
    }
  }
})

export default store

