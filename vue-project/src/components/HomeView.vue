<template>
  <div class="home-view">
    <el-row type="flex" justify="center" align="middle" class="header">
      <!-- 返回上一级界面 -->
      <el-button type="info" @click="goToMain"><</el-button>
      <div class="header-title">积 存 金</div>
    </el-row>
    <el-row type="flex" justify="space-around" class="main-content">
      <!-- todo 积存金走势 -->
      <GoldPricePop/>
      <!-- todo 转赠界面跳转 -->
      <el-button type="primary" class="gift" @click="goToGift">转赠</el-button>
      <!-- todo 快捷购买弹窗 -->
      <QuickPop/>
      <!-- todo 金罐界面 -->
      <div class="gold-tank">
        <div class="gold-tank-content">
          <div class="gold"></div>
          <div class="gold"></div>
          <div class="gold"></div>
          <div class="gold"></div>
          <div class="gold"></div>
          <div class="gold"></div>
        </div>
      </div>
      <!-- todo 个性化弹窗：图片url for -->
      <DiyPop/>
      <!-- todo 向我提问弹窗 -->
      <AskPop/>
      <!-- todo 持有数据 -->
    </el-row>
    <el-row type="flex" justify="center" class="footer">
      <el-col :span="24">
        <div class="stat-item">
          <span class="title">持有金豆:</span>
          <span class="value">{{ number.toFixed(2) }} g</span>
        </div>
      </el-col>
      <el-col :span="24">
        <div class="stat-item">
          <span class="title">昨日收益:</span>
          <span class="value">{{ yesterdayEarn.toFixed(2) }} 元</span>
        </div>
      </el-col>
      <el-col :span="24">
        <div class="stat-item">
          <span class="title">持有收益:</span>
          <span class="value">{{ earn.toFixed(2) }} 元</span>
        </div>
      </el-col>
      <el-col :span="24">
        <div class="stat-item">
          <span class="title">累计收益:</span>
          <span class="value">{{ allEarn.toFixed(2) }} 元</span>
        </div>
      </el-col>
      <!-- 提醒事项 -->
      <WarningPop />
    </el-row>
    <!-- endregion 持有数据 -->
    <!-- region todo 提现和买入窗口跳转 -->
    <el-row type="flex" justify="space-around" class="actions">
      <el-button type="primary" @click="goToCash">提现</el-button>
      <el-button type="primary" @click="goToBuy">买入</el-button>
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
const yesterdayEarn = ref(100);
const earn = ref(200);
const allEarn = ref(300);
</script>

<style scoped>
.home-view {
  display: flex;
  flex-direction: column;
  height: 95vh; /* 使用视口高度 */
  padding: 10px;
  max-width: 100%;
  margin: 0 auto;
}

.header {
  display: flex;
  align-items: center;
  height: 10vh; /* 使用视口高度 */
  background-color: #f0f0f0;
  border-bottom: 1px solid #ddd;
  padding: 0 15px;
}

.header-title {
  font-size: 24px;
  font-weight: bold;
  flex-grow: 1;
  text-align: center;
  color: #ffd000;
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
  border: 2px solid green;
  border-radius: 50% 50% 0 0;
  margin: 20px auto;
}

.gold-tank-content {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: yellow;
  overflow: hidden;
}

.gold {
  width: 10vw; /* 使用视口宽度 */
  height: 10vw; /* 使用视口宽度 */
  background-color: gold;
  border-radius: 50%;
}

.footer {
  flex: 1; /* 使其占据可用的剩余空间 */
  margin-top: 20px;
  text-align: center;
}

.stat-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ebebeb;
}

.title {
  font-weight: bold;
  color: #333;
}

.value {
  font-size: 1.2em;
  color: #666;
}

.actions {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  height: 10vh; /* 使用视口高度 */
}
</style>
