<template>
  <el-button type="text" class="price-trend" plain @click="goToGoldPricePop = true"></el-button>
  <el-dialog :show-close="false"
      v-model="goToGoldPricePop"
      width="98%"
      @opened="initChart"
      class="gold-price-pop"
  >
    <div class="gold-date">
      <span> 实时主动积存价格：<span style="color: #cfac34">¥{{ state.currentPrice.toFixed(2) }}</span>
        <el-avatar shape="square" :size="20" :src="icon"/></span>
      <span>定期积存价格：<span style="color: #cfac34">¥{{ periodicPrice.toFixed(2) }}</span>
          <el-avatar shape="square" :size="20" :src="icon"/></span>

      <div style="background-color: #fee0b7; display: flex; justify-content: space-around; align-items: center;">
        <span>最低价</span>
        <span>最高价</span>
        <span>赎回价</span>
      </div>
      <div style="font-weight: bold; display: flex; justify-content: space-around; align-items: center;">
        <span>¥{{ lowestPrice.toFixed(2) }}</span>
        <span>¥{{ highestPrice.toFixed(2) }}</span>
        <span>¥{{ redemptionPrice.toFixed(2) }}</span>
      </div>

    </div>

    <div ref="chartContainer" :style="{ width: '100%', height: '350px'}"></div>
  </el-dialog>
</template>

<script setup>
import {nextTick, onMounted, ref} from "vue";
import * as echarts from "echarts";
import state from "@/api/global_variable.js";
import icon from "@/assets/icon_上升@3x.png"


state.currentPrice
const periodicPrice = ref(0);
const lowestPrice = ref(650);
const highestPrice = ref(0);
const redemptionPrice = ref(0);
const today = new Date();
today.setHours(0, 0, 0, 0,);//设置今天开始时间
const goToGoldPricePop = ref(false);
const chartContainer = ref(null);

let now = new Date(2024, 5, 1);
let value = 570;
let data = [];
let oneInterval = 4 * 3600 * 1000;
// 数据生成函数
const randomData = () => {
  now = new Date(+now + oneInterval);
  value = Math.max(540, Math.min(600, value + Math.random() * 20 - 10));
  state.currentPrice = value;
  periodicPrice.value = value - 2; // 更新定期价格
  redemptionPrice.value = value - 5.6; // 更新赎回价，示例减去5
  // 判断日期是否为今天
  if (now >= today && now < new Date(today.getTime() + 24 * 60 * 60 * 1000)) {
    if (highestPrice.value < value) {
      highestPrice.value = value; // 更新最高价
    }
    if (lowestPrice.value > value) {
      lowestPrice.value = value; // 更新最低价
    }
  }
  return {
    name: now.toString(),
    value: [
      now.toISOString().substring(0, 16).replace('T', ' '), // 日期时间格式
      Math.round(value * 100) / 100 // 保留两位小数
    ]
  };
};

const initChart = () => {
  nextTick(() => {
    if (chartContainer.value) {
      const myChart = echarts.init(chartContainer.value);
      randomData();

      for (let i = 0; i < (76 * 24 / 4); i++) { // 76天，每天6个数据点（4小时一个点）
        data.push(randomData());
      }

      const option = {
        tooltip: {
          trigger: 'axis',
          formatter: (params) => {
            params = params[0];
            const date = new Date(params.name);
            return (
                date.getFullYear() +
                '/' +
                (date.getMonth() + 1) +
                '/' +
                date.getDate() +
                ' ' +
                date.getHours() +
                ':00 : ' +
                params.value[1] +
                ' 元/克'
            );
          },
          axisPointer: {
            animation: false
          }
        },
        xAxis: {
          type: 'time',
          splitLine: {
            show: false
          },
          min: new Date(2024, 5, 1).getTime(),
          max: new Date(2024, 7, 16).getTime(),
        },
        yAxis: {
          type: 'value',
          min: 500,
          max: 650,
          interval: 25,
          boundaryGap: [0, '100%'],
          splitLine: {
            show: false
          },
          axisLabel: {
            formatter: '{value}'
          }
        },
        series: [
          {
            name: '黄金价格',
            type: 'line',
            showSymbol: false,
            data: data
          }
        ]
      };

      myChart.setOption(option);

      setInterval(() => {
        for (let i = 0; i < 5; i++) {
          data.shift();
          data.push(randomData());
        }
        myChart.setOption({
          series: [
            {
              data: data
            }
          ]
        });
      }, oneInterval);
    }
  });
};

onMounted(() => {
// 在组件挂载后初始化图表
  randomData();
  // todo 主页数据更新(后端获取)
});
</script>

<style scoped>
/* 图标*/
.price-trend {
  width: 60px;
  height: 60px;
  margin: 10px;
  flex: 1 1% 45%;
  background-image: url('@/assets/金价走势@2x.png');
  background-repeat: no-repeat;
  background-size: contain;
}

/*数据展示*/
.gold-date {
  font-size: 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 35px;
}

</style>

<style>
.gold-price-pop {
  background-image: url('@/assets/金价走势弹窗@2x.png');
  background-repeat: no-repeat;
  background-size: 100% 560px;
  background-color: transparent; /* 弹窗背景颜色 */
}
</style>
