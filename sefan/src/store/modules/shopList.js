const states={
  shopList:[]
}

const mutations={
  showList(state,_data){
    state.shopList=_data
  }
}

const actions={
  showList({commit},_data){
    commit('showList',_data)
  }
}

export default {
  namespaced:true,
  states,
  mutations,
  actions
}