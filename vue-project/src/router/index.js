import {createRouter, createWebHistory} from 'vue-router'
// @ts-ignore
import HomeView from '@/components/HomeView.vue'
import TransferView from "@/components/TransferView.vue";
import IntroView from "@/components/IntroView.vue";
import PurchaseView from "@/components/PurchaseView.vue";
import ToBuy from "@/components/toBuy.vue";
import ToSell from "@/components/toSell.vue";
import GiftSettlement from '@/components/GiftSettlement.vue'; 

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomeView
        },
        {
            path: '/transfer',
            name: 'Transfer',
            component: TransferView
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
        {
            path: '/giftsettlement',
            name: 'GiftSettlement',
            component: GiftSettlement
        },

 
    ]
})

export default router
