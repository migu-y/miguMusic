import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import bag from './modules/bag'
import cup from './modules/cup'
import others from './modules/others'
import phoneke from './modules/phoneke'


export default new Vuex.Store({
    modules:{
        bag,
        cup,
        others,
        phoneke
    }
})