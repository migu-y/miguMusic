import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Goods from '../views/goods/Goods.vue'
import Factory from '../views/goods/Factory.vue'
const routes = [
  {
    path:'/',
    name:'goods',
    redirect:'/Goods',
    component:Goods,
  
    children:[
      {
        path:'Goods',
        name:'Goods',
        // redirect:'Goods/Factory',
        component:Factory
        
        
       
      },
     
    ],

    
  },

  {
    path:'/Goods/factory',
    name:'factory',
    component:Factory
  },

  {
    path:'/Goods/details',
    name:'details',
    component: () => import(/* webpackChunkName: "details" */ '@v/goods/Details.vue')
    
  }
  
  
  
]  

  


const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
