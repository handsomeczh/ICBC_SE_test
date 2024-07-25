<template>

  <el-card>
    <el-form @submit.prevent="submitForm" :model="form" label-width="130px">

      <el-form-item label="输入金额">
        <!-- <el-input v-model="form.amount" type="number" @input="updateImage" ></el-input> -->
        <el-input v-model.number="number" type="number" @input="updateImage" ></el-input>

      </el-form-item>


      <el-form-item label="支付方式">
        <el-radio-group v-model="form.paymentMethod">
          <el-radio label="wechat">微信</el-radio>
          <el-radio label="alipay">支付宝</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="参加主题盲合活动">
        <el-checkbox v-model="form.participateInBlindBox"></el-checkbox>
        <el-button plain @click="showInfo">了解盲盒活动</el-button>
      </el-form-item>


      <el-form-item v-model="form.amount">
        <p>预计买入：{{(tweened.number / 556.0).toFixed(6) }}克</p>
        <!-- <p>预计买入：{{(number / 556.0).toFixed(6) }}克</p> -->

        <!-- <p>预计买入：{{(form.amount / 556.0).toFixed(6) }}克</p> -->

        <!-- <img :src="imageSrc" alt="动态图片" /> -->
      </el-form-item>

      <el-form-item >
        <!-- <p>预计买入：{{formattedNumber}}克</p> -->
        <img :src="imageSrc" alt="动态图片" />
      </el-form-item>


      <el-form-item>
        <el-button type="primary" @click="submitForm">买入</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script lang="ts" setup>
import { ref, computed,reactive, watch } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import type { Action } from 'element-plus'
import gsap from 'gsap'

const number = ref(0)
const tweened = reactive({
  number: 0
})
watch(number, (n) => {
  gsap.to(tweened, { duration: 0.5, number: Number(n) || 0 })
})



const form = ref({
  amount: number,
  expectedPurchase: '',
  paymentMethod: 'wechat',
  participateInBlindBox: false,
})

const imageSrc = ref('./src/assets/image1.png')

// const formattedNumber = computed(() => (  tweened.number / 556.0))

const showInfo = () => {
  ElMessageBox.alert('参加盲盒活动可以获得惊喜礼品！活动时间：xxxx活动内容：xxxx金豆子皮肤:xxxx参与方式：xxxxx注意事项：xxx',
      '盲盒活动详情', {
        confirmButtonText: 'OK',
        callback: (action: Action) => {
          ElMessage({
            type: 'info',
            message: `action: ${action}`,
          })
        },
      })
}

const updateImage = () => {
  const amount = form.value.amount/556
  // const amount = tweened.number / 556.0

  if (amount <1.0) {
    imageSrc.value = './src/assets/image1.png'
  } else if (amount < 10.0) {
    imageSrc.value = './src/assets/image2.png'
  } else {
    imageSrc.value = './src/assets/image3.png'
  }
}

const submitForm = () => {
  ElMessage({
    message: '表单已提交！',
    type: 'success',
  })
  // 处理表单提交逻辑
  console.log(`金额: ${form.value.amount}`)
  console.log(`预计购买: ${form.value.expectedPurchase}`)
  console.log(`支付方式: ${form.value.paymentMethod}`)
  console.log(`参加盲盒活动: ${form.value.participateInBlindBox}`)
}

</script>

<style scoped>
.el-card {
  padding: 20px;
  max-width: 500px;
  /* margin: auto; */
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

h2 {
  margin-bottom: 20px;
  text-align: center;
}

.el-form-item {
  margin-bottom: 20px;
}

.dialog-footer {
  text-align: right;
}

.el-button {
  width: 100%;
}
</style>

