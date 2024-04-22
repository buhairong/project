import Vue from 'vue'
import VueRouter from 'vue-router'
import PC from "@/pages/carShow/PC";
import Mobile from "@/pages/carShow/Mobile";
import NSPC from "@/pages/ns/pc/index.vue"
import MapBaidu from "@/pages/carShow/MapBaidu";
import Resource from "@/pages/ns/pc/components/resource.vue"
import NSTencent from "@/pages/ns/tencent/index.vue"

Vue.use(VueRouter)


export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: 'mp'
        },
        {
            path: '/mp',
            name: 'mp',
            component: Mobile
        }, {
            path: '/pc',
            name: 'pc',
            component: PC
        },
        {
            path: '/ns/pc',
            name: 'nspc',
            component: NSPC
        },
        {
            path: '/ns/pc-baidu',
            name: 'nspc',
            component: MapBaidu
        },
        {    
            path: '/ns/resource-test',
            name: 'resource',
            component: Resource
        },{    
            path: '/tencent/ns/pc',
            name: 'nstencent',
            component: NSTencent
        },
    ]
})