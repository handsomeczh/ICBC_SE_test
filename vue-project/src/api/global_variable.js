import { reactive, watch } from 'vue';

// 创建一个响应式对象
const state = reactive({
    currentPrice: 0
});

// 监听 currentPrice 的变化
watch(() => state.currentPrice, (newVal, oldVal) => {
    console.log(`currentPrice changed from ${oldVal} to ${newVal}`);
    // 这里可以执行你需要的操作，比如更新其他数据或调用函数
});

// 导出响应式对象
export default state;