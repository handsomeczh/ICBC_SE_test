

<template>
  <el-button type="text" class="personalize" plain @click="goToDiyPop = true"></el-button>
  <el-dialog v-model="goToDiyPop" width="98%">
    <el-scrollbar height="400px">
      <span>金罐皮肤</span>
      <el-divider/>
      <el-row class="demo-basic" :gutter="20">
        <el-col v-for="(item, index) in 6" :key="index" :span="6">
          <div class="block">
            <el-avatar shape="square" :size="50" :src="squareUrl"/>
          </div>
        </el-col>
      </el-row>
      <el-divider>
        <el-icon>
          <MagicStick/>
        </el-icon>
      </el-divider>
      <span>金豆皮肤</span>
      <el-divider/>
      <el-row class="demo-basic" :gutter="20">
        <el-col v-for="(item, index) in 10" :key="index" :span="6">
          <div class="block">
            <el-avatar shape="square" :size="50" :src="squareUrl"/>
          </div>
        </el-col>
      </el-row>
    </el-scrollbar>
  </el-dialog>
</template>

<script setup>
import {MagicStick} from "@element-plus/icons-vue";
import {ref} from "vue";

const goToDiyPop = ref(false);
const squareUrl = ref("@/assets/豆子1@2x.png");
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

.demo-basic {
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