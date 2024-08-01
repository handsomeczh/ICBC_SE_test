<template>
  <div class="app" >
    <div style="display: flex;align-items: center; /* 垂直居中 */position: relative; ">
      <img src='../assets/arrow_right@2x.png' @click="goBack" style=" transform: rotate(180deg);">
      <!-- <p style=" text-align: center ;" > 主动积存 </p> -->
      <p style="flex-grow: 1; /* 占据剩余空间 */text-align: center; /* 水平居中 */position: absolute;left: 50%;
          transform: translateX(-50%); font-size: 20px;" > 提现 </p>
    </div>
    <el-card>

      <el-form @submit.prevent="submitForm" :model="form" label-width="130px">

        <el-countdown prefix="请在" suffix="内完成交易!" format="mm:ss" :value="timevalue" value-style="color:#bd3a7c"  />

        <el-form-item label="交易账户" >
          <!-- <el-input  type="number" class="account"  ></el-input> -->
          <p style="color:rgb(141 113 129);">662008601780443</p>
        </el-form-item>

        <el-form-item  label="提现份额">
          <el-input v-model.number="gramsinput1" type="number"  style="width: 180px" placeholder="请输入" /> 克
        </el-form-item>


        <el-form-item  label="实时价格">
          <p>559.87</p><p style="color:rgb(141 113 129);">元/克</p>
        </el-form-item>

        <el-form-item  label="到账金额" >
          <el-input v-model.number="number1" style="width: 180px" disabled type="number"  placeholder="待回显" />元
        </el-form-item>

        <el-button type="primary" @click="submitForm">确定</el-button>

      </el-form>
    </el-card>
  </div>
</template>


<script lang="ts" setup>
import { ref, computed,reactive, watch } from 'vue'
import { ElMessage, ElMessageBox, useDisabled } from 'element-plus'
import type { Action } from 'element-plus'
import { Check, Close } from '@element-plus/icons-vue'
import gsap from 'gsap'
import { ArrowLeft } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router';

const router = useRouter();

// 定义响应式变量

const timevalue = ref(Date.now() +  1000 * 60 )

//按克
const gramsinput1= ref(0)
const gramstweened = reactive({
  gramsinput: 0
})
watch(gramsinput1, (n) => {
  gsap.to(gramstweened, { duration: 0.5, gramsinput: Number(n) || 0 })
})
const number1 = computed(() => (  (gramstweened.gramsinput * 559.87).toFixed(2)))

const form = ref({

  participateInBlindBox: false,
})


// 提交表单方法
const submitForm = () => {
  // ElMessage({
  //   message: '表单已提交！',
  //   type: 'success',
  // })
  // 处理表单提交逻辑
  // console.log(`克数: ${grams.value}`)
  // console.log(`预计到账金额: ${expectedAmount.value}`)
  // console.log(`到账方式: ${paymentMethod.value}`)

  router.push("/")
}

const goBack = () => {
  router.back(); // 使用Vue Router的返回功能
};

</script>

<style>

.el-card {
  padding: 20px;
  max-width: 500px;
  /* margin: auto; */
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  --el-card-padding:0px;
}
.el-statistic{
  --el-statistic-content-color: #372b31;  /*倒计时文本颜色*/
}

.el-form-item__content{
  font-size: 16px;
  font-weight:normal  ;
}
:root{
  --el-color-primary:#bd3a7c;
  --el-color-primary-light-3:#bd3a7c;
  --el-text-color-primary:#bd3a7c;
  --el-text-color-regular: #571305;
  --el-text-color-placeholder:#868bd3;
  --el-border-color-light:#dde1ea;
  --el-fill-color-light:#e8e5e5;
  --el-color-white:#e0e84d;

}
</style>

<style scoped>

.el-card {
  padding: 20px;
  max-width: 500px;
  /* margin: auto; */
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  --el-card-padding:0px;
}

h2 {
  margin-bottom: 20px;
  text-align: center;
}

.el-form-item {
  margin-bottom: 20px;
  align-items:center;
}

.el-form {
  --el-form-label-font-size: 18px;
}

.dialog-footer {
  text-align: right;
}

.el-button {
  width: 100%;
}

</style>
  