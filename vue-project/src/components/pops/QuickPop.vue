<template>
  <div class="gold-buttons">
    <el-button type="text" class="gold-button gold-button1" plain @click="goToQuickPop = true, gram = 1"></el-button>
    <el-button type="text" class="gold-button gold-button5" plain @click="goToQuickPop = true, gram = 1"></el-button>
    <el-button type="text" class="gold-button gold-button10" plain @click="goToQuickPop = true, gram = 1"></el-button>
    <el-dialog
        v-model="goToQuickPop"
        title="快捷购买"
        width="98%"
        custom-class="custom-dialog"
    >
      <el-form label-width="100px" class="form-container">
        <el-form-item label="克数：">
          {{ gram }}
        </el-form-item>
        <el-form-item label="金额：">{{ (state.currentPrice * gram).toFixed(2) }}</el-form-item>
      </el-form>
      <template #footer>
        <el-button type="primary" @click="handleConfirm">确认</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import {ref} from "vue";
import router from "@/router/index.js";
import state from "@/api/global_variable.js";

const goToQuickPop = ref(false);
const gram = ref(0);
const handleConfirm = () => {
  // todo 这里可以添加提交表单的逻辑
  goToQuickPop.value = false;
  router.push({name: 'Purchase'});
};
</script>

<style scoped>
.gold-buttons {
  display: flex;
  justify-content: space-around;
  align-items: flex-start; /* 使按钮的顶部对齐 */
  width: 100%;
  margin: 0 10px; /* 将顶部和底部的间距减少 */
  padding-top: 20px; /* 向上增加内边距，使按钮更靠上 */
}

.gold-button {
  position: relative; /* 为了定位伪元素 */
  width: 100px; /* 增加按钮的宽度 */
  height: 100px; /* 增加按钮的高度 */
  background-size: contain; /* 使背景图片适应按钮大小 */
  background-repeat: no-repeat;
  background-position: center center;
  border: none; /* 移除按钮边框 */
  text-align: center; /* 文字居中 */
  font-size: 20px; /* 增加文字大小 */
  font-weight: bold; /* 设置文字粗细 */
  color: white; /* 设置文字颜色 */
}

.gold-button1 {
  background-image: url('@/assets/1g金图标@2x.png'); /* 背景图片路径 */
  margin-bottom: 40px; /* 设置更大的底部间距以增加落差 */
}

.gold-button5 {
  background-image: url('@/assets/5g金图标@2x.png'); /* 背景图片路径 */
  margin-bottom: 20px; /* 设置底部间距 */
}

.gold-button10 {
  background-image: url('@/assets/10g金图标@2x.png'); /* 背景图片路径 */
  margin-bottom: 0; /* 设置底部间距 */
}

.custom-dialog .el-dialog {
  background-image: url('@/assets/快捷购买弹窗@2x.png'); /* 背景图片路径 */
  background-size: cover; /* 调整背景图片的显示方式 */
  background-position: center; /* 调整背景图片的位置 */
  padding: 20px; /* 增加内边距 */
}

.custom-dialog .el-dialog__body {
  background: rgba(255, 255, 255, 0.8); /* 半透明白色背景使内容更易读 */
  border-radius: 10px; /* 圆角背景 */
  padding: 20px; /* 增加内边距 */
}

.custom-dialog .el-dialog__title {
  color: white; /* 标题文字颜色 */
  font-weight: bold; /* 标题文字粗细 */
}

.form-container {
  background: rgba(255, 255, 255, 0.8); /* 半透明白色背景使内容更易读 */
  padding: 20px; /* 增加内边距 */
  border-radius: 10px; /* 圆角背景 */
}
</style>

