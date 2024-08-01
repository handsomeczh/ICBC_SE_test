import {reactive, watch} from 'vue';
// 导入图片并存储在数组中
import bean1 from '@/assets/豆子1@2x.png';
import bean2 from '@/assets/豆子2@2x.png';
import bean3 from '@/assets/豆子3@2x.png';
import bean4 from '@/assets/豆子4@2x.png';

// 创建一个响应式对象
const state = reactive({
    currentPrice: 0,
    quickGram: 0,
    backGroundUrl: '',
    goldBeanSkins: [bean1, bean2, bean3, bean4],
    flag: true,
});

// 监听 currentPrice 的变化
watch(() => state.currentPrice, (newVal, oldVal) => {
    console.log(`currentPrice changed from ${oldVal} to ${newVal}`);
    // 这里可以执行你需要的操作，比如更新其他数据或调用函数
});


// 导出响应式对象
export default state;