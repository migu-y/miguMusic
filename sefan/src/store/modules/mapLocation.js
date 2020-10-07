const state={
  shopLocation:{
    x:'116.289833',
    y:'40.096749',
    title:'北京昌平永旺店',
    info:'回龙观镇北清路1号院1号楼永旺国际购物中心1层NO.100区域1层NO.127'
  }
}
const mutations={
  change(state,_data){
    state.shopLocation=_data
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