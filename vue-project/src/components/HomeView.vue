<template>
  <div class="home-view">
    <el-row class="header">
      <!-- 返回上一级界面 -->
      <div class="header-title">持有金豆</div>
      <div class="header-number">{{ number.toFixed(2) }} g</div>
    </el-row>
    <!-- todo 持有数据 -->
    <el-row justify="center" class="footer">
        <div class="stat-item">
          <div class="title">昨日收益</div>
          <div class="value">¥ {{ yesterdayEarn.toFixed(2) }}</div>
        </div>
        <div class="stat-item">
          <div class="title">持有收益</div>
          <div class="value">¥ {{ earn.toFixed(2) }}</div>
        </div>
        <div class="stat-item">
          <div class="title">累计收益</div>
          <div class="value">¥ {{ allEarn.toFixed(2) }}</div>
        </div>
      <!-- 提醒事项 -->
<!--      <WarningPop />-->
    </el-row>
    <el-row type="flex" justify="space-around" class="main-content">

      <!-- todo 快捷购买弹窗 -->
      <QuickPop/>
      <!-- todo 积存金走势 -->
      <GoldPricePop/>
      <!-- todo 转赠界面跳转 -->
      <el-button type="primary" class="gift" @click="goToGift">转赠</el-button>
      <!-- todo 金罐界面 -->
      <div class="gold-tank">
        <img class="gold-tank-content" src="@/assets/豆子1@2x.png"/>
      </div>
      <!-- todo 个性化弹窗：图片url for -->
      <DiyPop/>
      <!-- todo 向我提问弹窗 -->
      <AskPop/>
    </el-row>

    <!-- endregion 持有数据 -->
    <!-- region todo 提现和买入窗口跳转 -->
    <el-row type="flex" justify="space-around" class="actions">
      <el-button type="primary" @click="goToCash" class="cash">提现</el-button>
      <el-button type="primary" @click="goToBuy" class="buy">买入</el-button>
    </el-row>
    <!-- endregion 提现和买入 -->
  </div>
</template>

<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import AskPop from '@/components/pops/AskPop.vue'; // 确保路径正确
import GoldPricePop from '@/components/pops/GoldPricePop.vue';
import QuickPop from "@/components/pops/QuickPop.vue";
import DiyPop from "@/components/pops/DiyPop.vue";
import WarningPop from "@/components/pops/WarningPop.vue";

const router = useRouter();

// 返回主界面
const goToMain = () => {
  router.push({name: 'Intro'});
};

// 转赠界面跳转
const goToGift = () => {
  router.push({name: 'Test'});
};

// 提现和买入跳转
const goToCash = () => {
  router.push({name: 'ToSell'});
};
const goToBuy = () => {
  router.push({name: 'ToBuy'});
};

// 主页数据(后端获取)
const number = ref(1);
const yesterdayEarn = ref(2.08);
const earn = ref(17.50);
const allEarn = ref(347.00);
</script>

<style scoped>
.home-view {
  display: flex;
  flex-direction: column;
  height: 100vh; /* 使用视口高度 */
  width: 100vw; /* 使用视口高度 */
  padding: 10px;
  max-width: 100%;
  margin: 0 auto;
  background-image: url('@/assets/bg@2x@2x.png'); /* 背景图片路径 */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.header {
  display: flex;
  align-items: center;
  height: 5vh; /* 固定高度 */
  width: 100%; /* 固定宽度 */
  background-image: url('@/assets/持有金豆背景@2x.png'); /* header 背景图片路径 */
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0 15px;
  margin: 0 auto; /* 居中对齐 */
}

.header-title {
  font-size: 18px;
  font-weight: bold;
  flex-grow: 1;
  height: 2vh; /* 固定高度 */
  width: 100%; /* 固定宽度 */
  text-align: center;
  color: #D6B8A9;
}

.header-number {
  font-size: 18px;
  font-weight: bold;
  flex-grow: 1;
  height: 2vh; /* 固定高度 */
  width: 100%; /* 固定宽度 */
  text-align: center;
  color: #D6B8A9;
}

.main-content {
  flex: 1; /* 使其占据可用的剩余空间 */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  text-align: center;
}

.gift {
  margin: 10px;
  flex: 1 1 45%;
}

.gold-tank {
  position: relative;
  width: 30vw; /* 使用视口宽度 */
  height: 30vw; /* 使用视口宽度 */
  margin: 20px auto;
}

.gold-tank-content {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
}

.footer {
  display: flex;
  justify-content: space-between; /* 均匀分布 */
  align-items: center; /* 水平居中 */
  flex: 1; /* 使其占据可用的剩余空间 */
  margin-top: 10px;
}

.stat-item {
  display: flex;
  align-items: center;
  justify-content: center; /* 水平和垂直居中内容 */
  flex-direction: column; /* 纵向排列 */
  background-image: url('@/assets/小卡片@2x.png'); /* 背景图片路径 */
  background-size: auto; /* 保持原始尺寸 */
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%; /* 设置固定宽度，使背景图片显示在框里 */
  padding: 40px; /* 调整 padding 以增加悬浮效果 */

}

.title {
  font-weight: bold;
  color: #CDBEB7;
  margin-bottom: 10px; /* 增加间距 */
}

.value {
  font-size: 1.2em;
  color: #F68248;
}



.actions {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  height: 10vh; /* 使用视口高度 */
}



</style>
