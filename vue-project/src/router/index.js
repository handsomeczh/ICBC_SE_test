import {createRouter, createWebHistory} from 'vue-router'
// @ts-ignore
import HomeView from '@/components/HomeView.vue'
import TestView from "@/components/TestView.vue";
import IntroView from "@/components/IntroView.vue";
import PurchaseView from "@/components/PurchaseView.vue";
import ToBuy from "@/components/toBuy.vue";
import ToSell from "@/components/toSell.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomeView
        },
        {
            path: '/test',
            name: 'Test',
            component: TestView
        },
        {
            path: '/intro',
            name: 'Intro',
            component: IntroView
        },
        {
            path: '/purchase',
            name: 'Purchase',
            component: PurchaseView
        },
        {
            path: '/tobuy',
            name: 'ToBuy',
            component: ToBuy
        },
        {
            path: '/tosell',
            name: 'ToSell',
            component: ToSell
        },

        // {
        //     path: '/test',
        //     name: 'Test',
        //     component: testView
        // },
    ]
})

export default router
