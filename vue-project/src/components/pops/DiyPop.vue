<template>
  <el-button type="text" class="personalize" plain @click="goToDiyPop = true"></el-button>
  <el-dialog :show-close="false"
      v-model="goToDiyPop"
      width="98%"
      class="diy-dialog-center"
  >
    <el-scrollbar height="400px">
      <div>
        <el-row class="demo-can" :gutter="20">
          <el-col v-for="(item, index) in goldCanSkins" :key="index" :span="6">
            <div class="block" :class="{selected: selectedGoldCanSkin === index}" @click="selectGoldCanSkin(index)">
              <el-avatar  shape="square" :size="80" :src="item"/>
            </div>
          </el-col>
        </el-row>
      </div>

      <div>
        <el-row class="demo-gold" :gutter="20">
          <el-col v-for="(item, index) in goldBeanSkins" :key="index" :span="6">
            <div class="block" :class="{selected: selectedGoldBeanSkin === index}" @click="selectGoldBeanSkin(index)">
              <el-avatar shape="square" :size="50" :src="item"/>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-scrollbar>
    <template #footer>
      <el-button color="#f5c153" size="large" class="confirm-button" @click="diyConfirm">确认</el-button>
    </template>
  </el-dialog>
</template>

<script setup>
import {ref} from "vue";
// 导入图片并存储在数组中
import can1 from '@/assets/小兔罐@2x.png';
import can2 from '@/assets/小象罐@2x.png';
import can3 from '@/assets/小鼠罐@2x.png';
const goldCanSkins = [can1, can2, can3];
// 导入图片并存储在数组中
import bean1 from '@/assets/豆子1@2x.png';
import bean2 from '@/assets/豆子2@2x.png';
import bean3 from '@/assets/豆子3@2x.png';
import bean4 from '@/assets/豆子4@2x.png';
const goldBeanSkins = [bean1, bean2, bean3,bean4];

const goToDiyPop = ref(false);


const selectedGoldCanSkin = ref(null);
const selectedGoldBeanSkin = ref(null);

const selectGoldCanSkin = (index) => {
  selectedGoldCanSkin.value = index;
};

const selectGoldBeanSkin = (index) => {
  selectedGoldBeanSkin.value = index;
};

const diyConfirm = () => {
  // todo 这里可以添加提交表单的逻辑
  goToDiyPop.value = false;
};

const getImageUrl = (name) => {
  return new URL(`../assets/${name}`, import.meta.url).href;
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

.demo-can{
  padding-top: 50px;
  padding-left: 10px;
  text-align: center;
}

.demo-gold {
  padding-top: 100px;
  padding-left: 10px;
  text-align: center;
}

.block {
  cursor: pointer;
  border: 2px solid transparent;
}

.block.selected {
  border: 2px solid #f5c153;
}

.confirm-button {
  position: absolute;
  bottom: 10px;
  right: 10px;
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
