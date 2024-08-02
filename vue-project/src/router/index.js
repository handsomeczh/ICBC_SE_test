import {createRouter, createWebHistory} from 'vue-router'
// @ts-ignore
import HomeView from '@/components/HomeView.vue'
import IntroView from "@/components/IntroView.vue";
import PurchaseView from "@/components/PurchaseView.vue";
import ToBuy from "@/components/toBuy.vue";
import ToSell from "@/components/toSell.vue";
import Blindbox from '@/components/Blindbox.vue'
import Lucky2 from '@/components/Lucky2.vue'
import Lucky1 from '@/components/lucky1.vue'
import Disney from '@/components/disney.vue'
import TransferView from "@/components/TransferView.vue";
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
            path: '/blindbox',
            name: 'blindbox',
            component: Blindbox
        },
        {
            path: '/Lucky2',
            name: 'Lucky2',
            component: Lucky2
        },
        {
            path: '/lucky1',
            name: 'lucky1',
            component: Lucky1
        },
        {
            path: '/disney',
            name: 'disney',
            component: Disney
        },
        {
            path: '/transfer',
            name: 'Transfer',
            component: TransferView
        },
        {
            path: '/giftsettlement',
            name: 'GiftSettlement',
            component: GiftSettlement
        },
        // {
        //     path: '/test',
        //     name: 'Test',
        //     component: testView
        // },
    ]
})

export default router



