import othersDate from '../../api/others'

const state={
    others:[]
}

const mutations = {
    setStatus(state,data){
        state.others=data
    }
}

const actions = {
    async loadOthers({commit}){
        let result = await othersDate();
        commit('setStatus',result)
    }
}

export default {
    namespaced:true,
    state,
    actions,
    mutations
}