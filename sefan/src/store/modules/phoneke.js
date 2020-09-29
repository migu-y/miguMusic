import keDate from '../../api/phoneke'

const state={
    kes:[]
}

const mutations = {
    setStatus(state,data){
        state.kes=data
    }
}

const actions = {
    async loadKes({commit}){
        let result = await keDate();
        commit('setStatus',result)
    }
}

export default {
    namespaced:true,
    state,
    actions,
    mutations
}