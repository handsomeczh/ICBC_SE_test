<template>
  <el-button class="price-trend" plain @click="goToGoldPricePop = true">金价走势</el-button>
  <el-dialog
      v-model="goToGoldPricePop"
      width="98%"
      @opened="initChart"
  >
    <!--        <div :style="{ width: '100%', height: '400px' }"></div>-->
    <div>
      <div style="font-size: 18px; color: green; display: flex; flex-direction: column; gap: 10px;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
      <span>实时主动库存价格：{{ state.currentPrice.toFixed(2) }} 跌涨：⬇️
        <span :style="{ color: priceChange >= 0 ? 'green' : 'red' }">
          <i :class="priceChange >= 0 ? 'fa fa-arrow-up' : 'fa fa-arrow-down'"></i>
        </span>
      </span>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center;">
      <span>定期库存价格：{{ periodicPrice.toFixed(2) }} 跌涨：⬆️
        <span :style="{ color: periodicChange >= 0 ? 'green' : 'red' }">
          <i :class="periodicChange >= 0 ? 'fa fa-arrow-up' : 'fa fa-arrow-down'"></i>
        </span>
      </span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center;">
              <span>最低价：{{ lowestPrice.toFixed(2) }} 最高价：{{
                  highestPrice.toFixed(2)
                }}</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span>赎回价：{{ redemptionPrice.toFixed(2) }}</span>
        </div>
      </div>

      <div ref="chartContainer" :style="{ width: '100%', height: '50px' }"></div>
    </div>
    <div ref="chartContainer" :style="{ width: '100%', height: '400px' }"></div>
  </el-dialog>
</template>

<script setup>
import {nextTick, onMounted, ref} from "vue";
import * as echarts from "echarts";
import Global from "@/api/global_variable.js";
import state from "@/api/global_variable.js";


// const currentPrice = ref(Global.currentPrice);
state.currentPrice
const periodicPrice = ref(0);
const lowestPrice = ref(650);
const highestPrice = ref(0);
const redemptionPrice = ref(0);
const priceChange = ref(0);
const periodicChange = ref(0);
const today = new Date();
today.setHours(0, 0, 0, 0,);//设置今天开始时间
// const targetDate = new Date('2024-06-01');
// const timeDifference = targetDate - today; // 以毫秒为单位
// const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)); // 转换为天数
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
  // currentPrice.value = value; // 更新实时价格
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
        title: {
          text: '积存金走势'
        },
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

  // console.log(chartContainer.value);
});
</script>

<style scoped>
.price-trend {
  margin: 10px;
  flex: 1 1 45%;
}
</style>