import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import bag from './modules/bag'
import cup from './modules/cup'
import others from './modules/others'
import phoneke from './modules/phoneke'
import shopCollect from './modules/shopCollect'
import shopList from './modules/shopList'
import cart from './modules/cart'
import location from './modules/location'
import itemScroll from './modules/itemsScroll'
import category from './modules/category'
import mapLocation from './modules/mapLocation'
import shopLocation from './modules/shopLocation'

export default new Vuex.Store({
    state: {
        data: {},
    },
    mutations: {
        show(state, _data) {
            state.data = _data
        },
        // change(state,{id,num}){
        //   state.data.shopList.find(item=>{
        //     return item.id==id
        //   }).frequent=num
        // }
    },
    actions: {
        show({ commit }, _data) {
            commit('show', _data)
        },
        // changeFrequent({commit},_data){
        //   commit('change',_data)
        // }
    },
    modules: {
        bag,
        cup,
        others,
        phoneke,
        shopCollect,
        shopList,
        cart,
        location,
        itemScroll,
        category,
        mapLocation,
        shopLocation
    }
})