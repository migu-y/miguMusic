import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Home from "@v/home/Home";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    redirect: "/start",
    children: [
      {
        path: "start",
        name: "start",
        component: () =>
          import(/*webpackChunkName:"start"*/ "@v/home/start/Start.vue"),
      },
      {
        path: "reservation",
        name: "reservation",
        component: () =>
          import(
            /*webpackChunkName:"reservation"*/ "@v/reservation/Reservation.vue"
          ),
      },
      {
        path: "variety",
        name: "variety",
        component: () =>
          import(/*webpackChunkName:"variety"*/ "@v/variety/Variety.vue"),
        // redirect: "/variety/heytealabor",
        children: [
          {
            path: "/variety/heytealabor",
            name: "/variety/heytealabor",
            component: () =>
              import(
                /*webpackChunkName:"heytealabor"*/ "@v/variety/heytealabor/HeyTeaLabor.vue"
              ),
          },
          {
            path: "/variety/factory",
            name: "/variety/factory",
            component: () =>
              import(
                /*webpackChunkName:"factory"*/ "@v/variety/heytealabor/factory.vue"
              ),
            // children: [
            //   {
            //     path: "/variety/shopinfor",
            //     name: "/variety/shopinfor",
            //     component: () =>
            //       import(
            //         /*webpackChunkName:"shopinfor"*/ "@v/variety/heytealabor/shopInfor.vue"
            //       ),
            //   },
            // ],
          }]
      },
      {
        path: "order",
        name: "order",
        component: () =>
          import(/*webpackChunkName:"order"*/ "@v/order/Order.vue"),
      },
      {
        path: "profile",
        name: "profile",
        component: () =>
          import(/*webpackChunkName:"profile"*/ "@v/profile/Profile.vue"),
      },
      {
        path: "shopbagdialog",
        name: "shopbagdialog",
        component: () =>
          import(/*webpackChunkName:"shopbagdialog"*/ "@c/ShopBagDialog.vue"),
      },
    ],
  },
];
const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
