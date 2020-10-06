const state={
  curIndex:0,
  id:20
}
const mutations={
  change(state,_data){
    state.curIndex=_data.index
    state.id=_data.id
  }
}
const actions={
  change({commit},_data){
    commit('change',_data)
  }
}

export default {
namespaced:true,
state,
mutations,
actions
}