import Vue from 'vue';
const state = {
    items: []
}

const getters = {
    total(state) {
        return state.items.reduce((sum, value) => {
            if (value.checked) {
                return sum + value.quantity * (value.salePrice / 100).toFixed(2)
            } else {
                return sum
            }
        }, 0)
    },
    count(state) {
        return state.items.reduce((sum, value) => {
            if (value.checked) {
                return sum + value.quantity
            } else {
                return sum
            }
        }, 0)
    },
    allChecked(state) {
        return state.items.every(value => {
            return value.checked == true
        })
    }
}

const mutations = {
    setItems(state, product) {
        let { id, thumbnail, name, salePrice } = product
        let p = state.items.find(value => value.id === id)
        if (p) {
            p.quantity++
        } else {
            state.items.push({
                id, // 产品id
                thumbnail,
                name,
                salePrice,
                quantity: 1,
                checked: false
            })
        }
    }
}

const actions = {
    addToCart({ commit, dispatch }, product) {
        commit('setItems', product)
            // dispatch product decrement
            // dispatch('product/decrement', product.id, { root: true })
    }
}

export default {
    // 命名空间
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}