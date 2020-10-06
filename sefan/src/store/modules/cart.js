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
        if (state.items.length === 0) {
            return false;
        } else {
            return state.items.every(value => {
                return value.checked == true
            })
        }

    }
}

const mutations = {
    setItems(state, product) {
        let { id, thumbnail, name, salePrice, value } = product
        let p = state.items.find(val => val.id === id)
        if (p) {
            p.quantity++
        } else {
            state.items.push({
                id, // 产品id
                thumbnail,
                name,
                salePrice,
                quantity: value,
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
    getters,
}