import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

import Home from "@v/home/Home"

const routes = [{
        path: "/",
        name: "home",
        component: Home,
        redirect: "/start",
        children: [{
                path: "start",
                name: "start",
                component: () =>
                    import ( /*webpackChunkName:"start"*/ '@v/home/start/Start.vue')
            },
            {
                path: "reservation",
                name: "reservation",
                component: () =>
                    import ( /*webpackChunkName:"reservation"*/ '@v/reservation/Reservation.vue')
            },
            {
                path: "variety",
                name: "variety",
                component: () =>
                    import ( /*webpackChunkName:"variety"*/ '@v/variety/Variety.vue'),
                // redirect: "/variety/heytealabor",
                children: [{
                        path: "/variety/heytealabor",
                        name: "/variety/heytealabor",
                        component: () =>
                            import ( /*webpackChunkName:"heytealabor"*/ '@v/variety/heytealabor/HeyTeaLabor.vue'),
                        // children: [{
                        //     path: "/varity/heytealabor/HeaTeaJointly",
                        //     name:"/varity/heytealabor/HeaTeaJointly",
                        //     component:()=>{

                        //     }
                        // }]
                    },
                    {
                        path: "/variety/soularound",
                        name: "/variety/soularound",
                        redirect: "/variety/soularound/cup",
                        component: () =>
                            import ( /*webpackChunkName:"soularound"*/ '@v/variety/soulAround/SoulAround.vue'),
                        children: [{
                                path: '/variety/soularound/cup',
                                name: '/variety/soularound/cup',
                                component: () =>
                                    import ('@v/home/Cup.vue')
                            },
                            {
                                path: 'bag',
                                name: 'bag',
                                component: () =>
                                    import ('@v/home/Bag.vue')
                            },
                            {
                                path: 'phoneke',
                                name: 'phoneke',
                                component: () =>
                                    import ('@v/home/PhoneKe.vue')
                            },
                            {
                                path: 'others',
                                name: 'others',
                                component: () =>
                                    import ('@v/home/Others.vue')
                            },
                        ]
                    }
                ]
            },
            {
                path: "order",
                name: "order",
                component: () =>
                    import ( /*webpackChunkName:"order"*/ '@v/order/Order.vue')
            },
            {
                path: "profile",
                name: "profile",
                component: () =>
                    import ( /*webpackChunkName:"profile"*/ '@v/profile/Profile.vue')
            },
            {
                path: "shopbagdialog",
                name: "shopbagdialog",
                component: () =>
                    import ( /*webpackChunkName:"shopbagdialog"*/ '@c/ShopBagDialog.vue')
            },
        ]
    },

]

const router = new VueRouter({
    mode: "history",
    routes
})


// import Happy from '@v/happy/Happy.vue'
// import Details from '@v/details/Details.vue'

// const routes = [{
//         path: '/',
//         name: 'home',
//         redirect: '/cup',
//         component: Home,

//     },
//     {
//         path: '/happy',
//         name: 'happy',
//         component: Happy
//     },
//     {
//         path: '/details',
//         name: 'details',
//         component: Details
//     }

// ]

export default router