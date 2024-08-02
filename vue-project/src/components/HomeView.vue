<template>
  <div :style="homeViewStyle">
    <el-row class="header">
      <!-- 返回上一级界面 -->
      <div class="header-title">持有金豆</div>
      <div class="header-title">{{ number.toFixed(2) }} g</div>
    </el-row>
    <!-- region todo 持有数据 -->
    <el-row justify="space-between" class="footer">
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
    <!-- endregion 持有数据 -->

    <!-- todo 快捷购买弹窗 -->
    <QuickPop/>

    <!-- todo 向我提问弹窗 -->
    <AskPop/>

    <el-row class="main-content">
      <!-- todo 积存金走势 -->
      <GoldPricePop/>
    </el-row>

    <el-row class="main-content">
      <!-- todo 转赠界面跳转 -->
      <el-button type="text" class="gift" @click="goToGift"></el-button>
    </el-row>

    <el-row class="main-content">
      <!-- todo 个性化弹窗 -->
      <DiyPop/>
    </el-row>

    <!-- region todo 提现和买入窗口跳转 -->
    <el-row class="actions">
      <el-button type="primary" plain @click="goToCash" class="action-button cash-button">提现</el-button>
      <el-button type="primary" plain @click="goToBuy" class="action-button buy-button">买入</el-button>
    </el-row>
    <!-- endregion 提现和买入 -->
  </div>
</template>

<script setup>
import {ref, computed} from 'vue';
import {useRouter} from 'vue-router';
import AskPop from '@/components/pops/AskPop.vue'; // 确保路径正确
import GoldPricePop from '@/components/pops/GoldPricePop.vue';
import QuickPop from "@/components/pops/QuickPop.vue";
import DiyPop from "@/components/pops/DiyPop.vue";
import backgroundImagePath from '@/assets/bg@2x@2x.png';
import state from "@/api/global_variable.js"; // 导入图片

const router = useRouter();

// 返回主界面
const goToMain = () => {
  router.push({name: 'Intro'});
};

// 转赠界面跳转
const goToGift = () => {
  router.push('/transfer');
};

// 提现和买入跳转
const goToCash = () => {
  router.push({name: 'ToSell'});
};
const goToBuy = () => {
  router.push({name: 'ToBuy'});
};

// 主页数据(后端获取)
const number = ref(30.2);
const yesterdayEarn = ref(2.08);
const earn = ref(17.50);
const allEarn = ref(347.00);

// 定义图片路径
if (state.flag == true) {
  state.backGroundUrl = backgroundImagePath;
  state.flag = false
}
// 计算样式
const homeViewStyle = computed(() => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  width: '100vw',
  backgroundImage: `url(${state.backGroundUrl})`, // 直接使用路径
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center'
}));
</script>

<style scoped>
.header {
  height: 6vh; /* 固定高度 */
  width: 100%; /* 固定宽度 */
  background-image: url('@/assets/持有金豆背景@2x.png'); /* header 背景图片路径 */
  background-size: cover;
  background-repeat: no-repeat;
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

.main-content {
  flex: 1; /* 使其占据可用的剩余空间 */
  margin-top: -15vh;
  justify-content: right;
}

.gift {
  width: 60px;
  height: 60px;
  margin: 5px;
  flex: 1 1% 1%;
  background-image: url('@/assets/转增@2x.png'); /* 背景图片路径 */
  background-repeat: no-repeat;
  background-size: contain;
}

.footer {
  display: flex;
  justify-content: space-between; /* 横向均匀分布 */
  align-items: center; /* 垂直居中 */
  width: 100%; /* 占据父容器的全部宽度 */
  margin-top: 10px;
}

.stat-item {
  display: flex;
  align-items: center;
  justify-content: center; /* 水平和垂直居中内容 */
  flex-direction: column; /* 纵向排列 */
  background-image: url('@/assets/小卡片@2x.png'); /* 背景图片路径 */
  background-size: cover; /* 背景图片自适应填充 */
  background-repeat: no-repeat;
  background-position: center center;
  width: 30%; /* 设置宽度，使三个元素均匀分布 */
  padding: 20px; /* 调整 padding 以适应布局 */
  box-sizing: border-box; /* 包括 padding 在内计算元素宽度 */
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
  justify-content: space-between; /* 横向均匀分布 */
  align-items: center; /* 垂直居中 */
  width: 100%; /* 占据父容器的全部宽度 */
  margin-top: 10px;
  z-index: 1000; /* 确保按钮层在页面其他内容之上 */
  padding: 0; /* 移除内边距 */
}

.action-button {
  flex: 1; /* 按钮占据可用空间 */
  margin: 0; /* 移除按钮之间的间距 */
  border-radius: 0; /* 使按钮的边角变为直角 */
  height: 70px; /* 设置按钮高度 */
}

.cash-button {
  background-color: #caae76; /* 按钮背景色，根据图片示例设置 */
  border-color: #caaf77; /* 按钮边框色，与背景色一致 */
  color: #594d37; /* 字体颜色 */
}

.buy-button {
  background-color: #f9b628; /* 按钮背景色，根据图片示例设置 */
  border-color: #f9b628; /* 按钮边框色，与背景色一致 */
  color: #5a4e39; /* 字体颜色 */
}


</style>
