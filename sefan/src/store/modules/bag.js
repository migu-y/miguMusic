import bagDate from '../../api/bag'

const state = {
    bags: [],
    show: false
}

const mutations = {
    setItems(state, data) {
        state.bags = data
    }
}

const actions = {
    async loadBags({ commit }) {
        let result = await bagDate()
        commit('setItems', result)
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}