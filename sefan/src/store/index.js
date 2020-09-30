// import Vue from 'vue'
// import Vuex, { Store } from 'vuex'

// Vue.use(Vuex)

// const store = new Store({
//     state: {
//         goods: '',
//         id: 1


//     },
//     mutations: {
//         setGoods(state, n) {
//             let { id, thumbnail, describe, subName, name, itemSalesVolume, labelPrice } = n
//             state.id = id
//             state.thumbnail = thumbnail
//             state.describe = describe
//             state.subName = subName
//             state.name = name
//             state.itemSalesVolume = itemSalesVolume
//             state.labelPrice = labelPrice
//         }
//     },
//     actions: {
//         change({ commit }, n) {
//             commit('setGoods', n)
//         }
//     },

// })
// export default store
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import bag from './modules/bag'
import cup from './modules/cup'
import others from './modules/others'
import phoneke from './modules/phoneke'


export default new Vuex.Store({
    modules: {
        bag,
        cup,
        others,
        phoneke
    }
})