import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import shopCollect from './modules/shopCollect'
import shopList from './modules/shopList'

export default new Vuex.Store({
  state: {
    data:{},
  },
  mutations: {
    show(state,_data){
       state.data=_data
    }
  },
  actions: {
    show({commit},_data){
      commit('show',_data)
    }
  },
  modules: {
    shopCollect,
    shopList
  }
})
