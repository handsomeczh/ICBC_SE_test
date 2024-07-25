<template>
  <el-button type="text" class="personalize" plain @click="goToDiyPop = true"></el-button>
  <el-dialog
      v-model="goToDiyPop"
      width="98%"
      class="diy-dialog-center"
  >
    <el-scrollbar height="400px">

      <el-row class="demo-can" :gutter="20">
        <el-col v-for="(item, index) in 3" :key="index" :span="6">
          <div class="block">
            <el-avatar shape="square" :size="50" :src="squareUrl"/>
          </div>
        </el-col>
      </el-row>

      <el-row class="demo-gold" :gutter="20">
        <el-col v-for="(item, index) in 4" :key="index" :span="6">
          <div class="block">
            <el-avatar shape="square" :size="50" :src="squareUrl"/>
          </div>
        </el-col>
      </el-row>

    </el-scrollbar>
    <template #footer>
      <el-button color="#f5c153" size="large"   @click="diyConfirm">确认</el-button>
    </template>
  </el-dialog>
</template>

<script setup>
import {ref} from "vue";
import router from "@/router/index.js";

const goToDiyPop = ref(false);
const squareUrl = ref("@/assets/豆子1@2x.png");

const diyConfirm = () => {
  // todo 这里可以添加提交表单的逻辑
  goToDiyPop.value = false;
};
</script>

<style scoped>
.personalize {
  width: 60px;
  height: 60px;
  margin: 10px;
  flex: 1 1% 1%;
  background-image: url('@/assets/换装扮@2x.png'); /* 背景图片路径 */
  background-repeat: no-repeat;
  background-size: contain;
}

.demo-can {
  padding-top: 50px;
  text-align: center;
}

.demo-gold {
  padding-top: 120px;
  text-align: center;
}

.demo-basic .block:not(:last-child) {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-right: 1px solid var(--el-border-color);
  flex: 1;
}

</style>

<style>
.diy-dialog-center {
  width: 400px; /* 固定宽度 */
  height: 450px; /* 固定高度 */
  background-color: transparent; /* 弹窗背景颜色 */
  background-image: url('@/assets/装扮弹窗@3x.png');
  background-size: contain; /* 覆盖整个元素 */
  background-repeat: no-repeat;
  background-position: center;
  padding-top: 30px;
}
</style>