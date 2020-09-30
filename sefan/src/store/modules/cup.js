import cupDate from '../../api/cup'

const state={
    cups:[]
}

const mutations = {
    setStatus(state,data){
        state.cups=data
    }
}

const actions = {
    async loadCups({commit}){
        let result = await cupDate();
        commit('setStatus',result)
    }
}

export default {
    namespaced:true,
    state,
    actions,
    mutations
}