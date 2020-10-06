const state={
  scrollTop:[]
}
const mutations={
  setScroll(state,_data){
    state.scrollTop=_data
  }
}
const actions={
  setScroll({commit},_data){
    commit('setScroll',_data)
  }
}

export default {
namespaced:true,
state,
mutations,
actions
}