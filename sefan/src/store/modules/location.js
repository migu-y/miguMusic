const state={
  addr:{
    cout:'中国',
    city:'北京',
    dist:'昌平区'
  }
}

const mutations={
  changeAddr(state,_data){
    state.addr=_data
  }
}

const actions={
  changeAddr({commit},_data){
    commit('changeAddr',_data)
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}