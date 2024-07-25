<template>
  <div class="gold-buttons">
    <el-button type="text" class="gold-button gold-button1" plain @click="goToQuickPop = true, gram = 1"></el-button>
    <el-button type="text" class="gold-button gold-button5" plain @click="goToQuickPop = true, gram = 1"></el-button>
    <el-button type="text" class="gold-button gold-button10" plain @click="goToQuickPop = true, gram = 1"></el-button>
  </div>
  <el-dialog
      v-model="goToQuickPop"
      title="快捷购买"
      width="98%"
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
  align-items: flex-start; /* 使按钮的顶部对齐*/
  width: 100%;
}

.gold-button {
  width: 100px; /* 增加按钮的宽度 */
  height: 100px; /* 增加按钮的高度 */
  background-size: contain; /* 使背景图片适应按钮大小 */
  background-repeat: no-repeat;
}

.gold-button1 {
  background-image: url('@/assets/1g金图标@2x.png'); /* 背景图片路径 */
}

.gold-button5 {
  background-image: url('@/assets/5g金图标@2x.png'); /* 背景图片路径 */
  margin-top: 5vh; /* 设置底部间距 */
}

.gold-button10 {
  background-image: url('@/assets/10g金图标@2x.png'); /* 背景图片路径 */
}

/*弹窗*/


</style>

