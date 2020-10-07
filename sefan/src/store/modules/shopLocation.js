const state={
  shopLocation:{
    name:'北京昌平永旺店',
    distance:'6.8km',
    id:333
    // frequent:0
  }
}
const mutations={
  change(state,_data){
    state.shopLocation=_data
  },
  // changeFre(state,_data){
  //  state.frequent=_data
  // }
}
const actions={
  changeShopLocation({commit},_data){
    commit('change',_data)
  },
  // changeFre({commit},_data){
  //   commit('changeFre',_data)
  // }
}

export default {
namespaced:true,
state,
mutations,
actions
}