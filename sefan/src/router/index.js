import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Home from "@v/home/Home";
import LaborDetails from "@c/GoodsDetails.vue"
import Happy from '@v/happy/Happy.vue'
import Details from '@v/details/Details.vue'
import Talk from "@v/order/Talk.vue"
import SelfTake from '@v/reservation/order/SelfTake'

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
            // {
            //     path: "reservation",
            //     name: "reservation",
            //     redirect: "",
            //     component: () =>
            //         import ( /*webpackChunkName:"reservation"*/ '@v/reservation/Reservation.vue'),

            // },
            {
                path: "reservation",
                name: "reservation",
                component: SelfTake,
                redirect: '/lists',
                children: [{
                        path: '/more',
                        name: 'more',
                        component: () =>
                            import ( /* webpackChunkName: "more" */ '@v/reservation/order/more/More')
                    },
                    {
                        path: '/lists',
                        name: 'lists',
                        component: () =>
                            import ( /* webpackChunkName: "lists" */ '@v/reservation/order/list/Lists')
                    }
                ]
            },
            {
                path: '/shop',
                name: 'shop',
                component: () =>
                    import ( /* webpackChunkName: "shoppicker" */ '@v/reservation/shop/ShopPicker')
            },
            {
                path: '/city',
                name: 'city',
                redirect:'/cout',
                component: () =>
                    import ( /* webpackChunkName: "cityPicker" */ '@v/reservation/city/CityPicker'),
                children: [{
                        path: '/cout',
                        name: 'cout',
                        component: () =>
                            import ( /* webpackChunkName: "Country" */ '@v/reservation/city/Country')
                    },
                    {
                        path: '/citys',
                        name: 'citys',
                        component: () =>
                            import ( /* webpackChunkName: "Citys" */ '@v/reservation/city/Citys')
                    },
                    {
                        path: '/dist',
                        name: 'dist',
                        component: () =>
                            import ( /* webpackChunkName: "Dist" */ '@v/reservation/city/Dist')
                    }
                ]
            },
            {
                path: "variety",
                name: "variety",
                component: () =>
                    import ( /*webpackChunkName:"variety"*/ '@v/variety/Variety.vue'),
            },

            {
                path: '/happy',
                name: 'happy',
                component: Happy
            },
            {
                path: "/order",
                name: "order",
                component: () =>
                    import ( /*webpackChunkName:"order"*/ '@v/order/Order.vue')
            },
            {
                path: "profile",
                name: "profile",
                component: () =>
                    import ( /*webpackChunkName:"profile"*/ '@v/profile/Profile.vue'),
                children: []
            },

        ]
    },
    {
        path: '/laborDetails',
        name: 'laborDetails',
        component: LaborDetails
    },
    {
        path: "shopbagdialog",
        name: "shopbagdialog",
        component: () =>
            import ( /*webpackChunkName:"shopbagdialog"*/ '@c/ShopBagDialog.vue')
    },
    {
        path: "/shopbag",
        name: "shopbag",
        component: () =>
            import ( /*webpackChunkName:"shopbag"*/ '@c/ShopBag.vue')
    },
    {
        path: '/details',
        name: 'details',
        component: Details
    },
    {
        path: '/talk',
        name: 'talk',
        component: Talk
    },
    {
        path: "/enterprise",
        name: "enterprise",
        component: () =>
            import ( /*webpackChunkName:"enterprise"*/ '@v/home/Enterprise.vue')
    },
    {
        path: "/heytealabor",
        name: "heytealabor",
        component: () =>
            import ( /*webpackChunkName:"heytealabor"*/ '@v/variety/heytealabor/HeyTeaLabor.vue'),
    },
    {
        path: "/checkout",
        name: "checkout",
        component: () =>
            import ( /*webpackChunkName:"checkout"*/ '@c/Checkout.vue'),
    },
    {
        path: "/factory",
        name: "factory",
        component: () =>
            import ( /*webpackChunkName:"factory"*/ '@v/variety/factory/factory.vue'),
    },
    {
        path: "/profile/info",
        name: "info",
        component: () =>
            import ( /*webpackChunkName:"info"*/ '@v/profile/info.vue'),
    },
    {
        path: "/profile/moreinfo",
        name: "moreinfo",
        component: () =>
            import ( /*webpackChunkName:"moreinfo"*/ '@v/profile/moreInfo.vue'),
    },
    {
        path: "/profile/mession",
        name: "mession",
        component: () =>
            import ( /*webpackChunkName:"mession"*/ '@v/profile/mession.vue'),
    },
    {
        path: "/profile/exchange",
        name: "exchange",
        component: () =>
            import ( /*webpackChunkName:"exchange"*/ '@v/profile/exchange.vue'),
    },
    {
        path: "/profile/vipcode",
        name: "vipcode",
        component: () =>
            import ( /*webpackChunkName:"vipcode"*/ '@v/profile/vipcode.vue'),
    },
    {
        path: "/profile/information",
        name: "information",
        component: () =>
            import ( /*webpackChunkName:"information"*/ '@v/profile/information.vue'),
    },
    {
        path: "/soularound",
        name: "soularound",
        redirect: "/soularound/cup",
        component: () =>
            import ( /*webpackChunkName:"soularound"*/ '@v/variety/soulAround/SoulAround.vue'),
        children: [{
                path: 'cup',
                name: 'cup',
                component: () =>
                    import ( /*webpackChunkName:"cup"*/ '@v/home/Cup.vue'),
            },
            {
                path: 'bag',
                name: 'bag',
                component: () =>
                    import ( /*webpackChunkName:"bag"*/ '@v/home/Bag.vue'),
            },
            {
                path: 'phoneke',
                name: 'phoneke',
                component: () =>
                    import ( /*webpackChunkName:"phoneke"*/ '@v/home/PhoneKe.vue')
            },
            {
                path: 'others',
                name: 'others',
                component: () =>
                    import ( /*webpackChunkName:"others"*/ '@v/home/Others.vue')
            },
        ]
    },
]

const router = new VueRouter({
    mode: "history",
    routes,
});


export default router