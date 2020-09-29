import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '@v/home/Home.vue'
import Happy from '@v/happy/Happy.vue'
import Details from '@v/details/Details.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect:'/cup',
    component: Home,
    children:[
      {
        path:'cup',
        name:'cup',
        component:() =>import('@v/home/Cup.vue')
      },
      {
        path:'bag',
        name:'bag',
        component:() =>import('@v/home/Bag.vue')
      },
      {
        path:'phoneke',
        name:'phoneke',
        component:() =>import('@v/home/PhoneKe.vue')
      },
      {
        path:'others',
        name:'others',
        component:() =>import('@v/home/Others.vue')
      },
    ]
  },
  {
    path: '/happy',
    name: 'happy',
    component:Happy
  },
  {
    path: '/details',
    name: 'details',
    component:Details
  }
  
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
