const state={
  shopCollect:[]
}
const mutations={
  add(state,_data){
    state.shopCollect.push(_data)
  },
  delete(state,id){
    let index=state.shopCollect.findIndex(obj => obj.id == id)
    state.shopCollect.splice(index,1)
  }
}
const actions={
  addCollect({commit},_data){
    commit('add',_data)
  },
  deleteCollect({commit},id){
    commit('delete',id)
  }
}

export default {
namespaced:true,
state,
mutations,
actions
}