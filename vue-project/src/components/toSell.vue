<template>
    <el-card>

      <el-main>
        <el-form @submit.prevent="submitForm" label-width="120px">

          <el-form-item  label="输入克数">
            <el-input  v-model="grams" type="number" placeholder="请输入克数"></el-input>
          </el-form-item>
  
          <el-form-item  label="到账方式">
            <el-select v-model="paymentMethod" placeholder="请选择到账方式">
              <el-option label="微信" value="wechat"></el-option>
              <el-option label="支付宝" value="alipay"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item  label="预计金额">
            <el-p v-model="expectedAmount" >{{formattedNumber}}元</el-p>
            
          </el-form-item>
  
          <el-form-item>
            <el-button type="primary" @click="submitForm">确定</el-button>
          </el-form-item>
        </el-form>
      </el-main>
    </el-card>
  </template>
  
  <!-- <script>

  export default {
    data() {
      return {
        grams: '',
        expectedAmount: '',
        paymentMethod: 'wechat',
      };
    },
    computed: {
    formattedNumber() {
      return (this.grams*556).toFixed(2);
    }
  },
    methods: {

      submitForm() {
        this.$message({
          message: '表单已提交！',
          type: 'success',
        });
        // 处理表单提交逻辑
        console.log(`克数: ${this.grams}`);
        console.log(`预计到账金额: ${this.expectedAmount}`);
        console.log(`到账方式: ${this.paymentMethod}`);
      }
    }
  };
  </script> -->

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { ElMessage } from 'element-plus'

// 定义响应式变量
const grams = ref(0)
const expectedAmount = ref('')
const paymentMethod = ref('wechat')

// 计算属性
const formattedNumber = computed(() => ((grams.value) * 556).toFixed(2))

// 提交表单方法
const submitForm = () => {
  ElMessage({
    message: '表单已提交！',
    type: 'success',
  })
  // 处理表单提交逻辑
  console.log(`克数: ${grams.value}`)
  console.log(`预计到账金额: ${expectedAmount.value}`)
  console.log(`到账方式: ${paymentMethod.value}`)
}
</script>
  
  <style>
.el-card {
  padding: 20px;
  max-width: 500px;
  /* margin: auto; */
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
  /* 样式可以根据需要进行修改 */
  </style>
  