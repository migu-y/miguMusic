import Vue from 'vue'
import VueRouter from 'vue-router'
import SelfTake from '@v/order/SelfTake'
import a from '@v/a'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'order',
    component: SelfTake,
    redirect:'/list',
    children:[
      {
        path:'/more',
        name:'more',
        component:()=>import(/* webpackChunkName: "more" */'@v/order/more/More')
      },
      {
        path:'/list',
        name:'list',
        component:()=>import(/* webpackChunkName: "list" */'@v/order/list/List')
      }
    ]
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import(/* webpackChunkName: "shoppicker" */ '@v/shop/ShopPicker')
  },
  {
    path: '/city',
    name: 'city',
    component: () => import(/* webpackChunkName: "cityPicker" */ '@v/city/CityPicker'),
    children:[
      {
        path:'/cout',
        name:'cout',
        component:()=> import(/* webpackChunkName: "Country" */ '@v/city/Country')
      },
      {
        path:'/citys',
        name:'citys',
        component:()=> import(/* webpackChunkName: "Citys" */ '@v/city/Citys')
      },
      {
        path:'/dist',
        name:'dist',
        component:()=> import(/* webpackChunkName: "Dist" */ '@v/city/Dist')
      }
    ]
  },
  {
    path: '/a',
    name: 'a',
    component: a
  }  
]

const router = new VueRouter({
  mode:'hash',
  routes
})

export default router
