import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Vue from "vue"
Vue.use(VueRouter)

import watershopping from "@v/waterShop/waterShopping.vue"

const routes = [{
    path: "/",
    name: "watershopping",
    component: watershopping,
     redirect: "/waterShop/shopInfor",
    children: [
        {
            path:"/waterShop/shopInfor",
            name:"/waterShop/shopInfor",
            component:()=>
                import(/*webpackChunkName:"shopinfor"*/ '@v/waterShop/shopInfor.vue')
        },
<<<<<<< HEAD
        
=======
        {
            path: "shopbagdialog",
            name: "shopbagdialog",
            component: () =>
                import ( /*webpackChunkName:"shopbagdialog"*/ '@c/ShopBagDialog.vue')
        },
>>>>>>> master
    ]
}]

const router = new VueRouter({
    mode: "history",
    routes
})

export default router

