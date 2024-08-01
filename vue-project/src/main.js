// main.ts
import {createApp} from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import router from './router'
// 引入 echarts
import * as echarts from 'echarts'

const app = createApp(App)
// 全局挂载 echarts
app.config.globalProperties.$echarts = echarts

app.use(router).use(ElementPlus).use(Vant).mount('#app')
