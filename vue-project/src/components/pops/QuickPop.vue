<template>
  <div class="gold-buttons">
    <el-button type="text" class="gold-button gold-button1" plain @click="goToQuickPop = true, gram = 1"></el-button>
    <el-button type="text" class="gold-button gold-button5" plain @click="goToQuickPop = true, gram = 1"></el-button>
    <el-button type="text" class="gold-button gold-button10" plain @click="goToQuickPop = true, gram = 1"></el-button>
  </div>
  <el-dialog
      v-model="goToQuickPop"
      width="98%"
      class="q-dialog-center"
  >
    <el-form label-width="100px" class="form-container">
      <div class="current">当前实时金价 <span style="color: #cfac34">{{ state.currentPrice.toFixed(2) }}元/g</span>
      </div>
      <el-form-item>
        克数(g)：{{ gram }}
      </el-form-item>
      <el-form-item class="el-form-item__content">金额(元)：{{ (state.currentPrice * gram).toFixed(2) }}</el-form-item>
    </el-form>
    <template #footer>
      <el-button color="#f5c153" size="large"  @click="handleConfirm">确认</el-button>
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

</style>

<style>
/*弹窗*/
.q-dialog-center {
  width: 350px; /* 固定宽度 */
  height: 290px; /* 固定高度 */
  background-color: transparent; /* 弹窗背景颜色 */
  background-image: url('@/assets/快捷购买弹窗@2x.png');
  background-size: contain; /* 覆盖整个元素 */
  background-repeat: no-repeat;
  background-position: center;
  padding-top: 10px;
}

.el-dialog__footer {
  padding-top: 1px;
  text-align: right;
  background-color: transparent; /* 透明背景 */
}

.el-form-item {
  height: 5vh;
  margin-top: 2vh;
  background-color: #FFFFFF;
  padding-top: 5px;
}

.el-form-item__content {
  font-size: 20px;
  font-weight: bold;

}


.current {
  margin-top: 3vh;
}


</style>

