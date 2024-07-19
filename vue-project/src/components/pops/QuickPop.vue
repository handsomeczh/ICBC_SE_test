<template>
  <div class="gold-buttons">
    <el-button type="text" class="gold-button" plain @click="goToQuickPop = true, gram = 1">+1g</el-button>
    <el-button type="text" class="gold-button" plain @click="goToQuickPop = true, gram = 5">+5g</el-button>
    <el-button type="text" class="gold-button" plain @click="goToQuickPop = true, gram = 10">+10g</el-button>
    <el-dialog
        v-model="goToQuickPop"
        title="快捷购买"
        width="98%"
    >
      <el-form label-width="100px">
        <el-form-item label="克数：">
          {{ gram }}
        </el-form-item>
        <el-form-item label="金额：">{{ (state.currentPrice * gram).toFixed(2) }}</el-form-item>
        <!--            todo 增加金豆图片-->
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

state.currentPrice;
const goToQuickPop = ref(false);
const gram = ref(0)
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
  width: 100%;
  margin: 10px;
  flex: 1 1 45%;
}
</style>