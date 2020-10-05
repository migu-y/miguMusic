import http from "@u/http"

const state = {
    all: []
}

const mutations = {
    // state 指向当前模块的 state
    setProducts(state, data) {
        state.all = data
    },

    decrement(state, id) {
        let p = state.all.find(value => value.id === id)
            // p.itemStock--
    }
}

const actions = {
    async loadData({ commit }) {
        let result = await http.get("/list");
        commit('setProducts', result)
    },

    decrement({ commit }, id) {
        commit('decrement', id)
    }
}

export default {
    // 命名空间
    namespaced: true,
    state,
    actions,
    mutations
}