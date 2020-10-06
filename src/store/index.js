import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import shopCollect from './modules/shopCollect'
import shopList from './modules/shopList'

export default new Vuex.Store({
  state: {
    data:{},
    addr:{
      cout:'中国',
      city:'北京',
      dist:'昌平区'
    }
  },
  mutations: {
    show(state,_data){
       state.data=_data
    },
    changeAddr(state,_data){
      state.addr=_data
    }
  },
  actions: {
    show({commit},_data){
      commit('show',_data)
    },
    changeAddr({commit},_data){
      commit('changeAddr',_data)
    }
  },
  modules: {
    shopCollect,
    shopList
  }
})
