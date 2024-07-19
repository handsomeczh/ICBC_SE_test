<!-- <template>
    <div>
      <h2>购买表单</h2>
      <form @submit.prevent="submitForm">
        <div>
          <label for="amount">输入金额：</label>
          <input id="amount" v-model="amount" type="number" @input="updateImage" />
        </div>
  
        <div>
          <label for="paymentMethod">支付方式：</label>
          <select id="paymentMethod" v-model="paymentMethod">
            <option value="wechat">微信</option>
            <option value="alipay">支付宝</option>
          </select>
        </div>
  
        <div>
          <label for="participateInBlindBox">
            是否参加盲盒活动：
            <input id="participateInBlindBox" type="checkbox" v-model="participateInBlindBox" />
            <button type="button" @click="showInfo">?</button>
          </label>
        </div>
  
        <div v-if="participateInBlindBox">
          <p>盲盒活动内容：随机获得一份惊喜礼物！</p>
        </div>
  
        <div v-if="amount">
          <p>预计买入：{{ amount/500.0 }}克</p>
          <img :src="imageSrc" alt="动态图片" />
        </div>
  
        <button type="submit">提交</button>
      </form>
  
      <div v-if="showModal" class="modal">
        <div class="modal-content">
          <span class="close-button" @click="hideModal">&times;</span>
          <p>盲盒活动详情：购买指定金额商品即可参与盲盒抽奖活动，有机会获得惊喜礼物！</p>
          <button @click="hideModal">确定</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        amount: '',
        paymentMethod: 'wechat',
        participateInBlindBox: false,
        showModal: false,
        imageSrc: ''
      };
    },
    methods: {
      showInfo() {
        this.showModal = true;
      },
      hideModal() {
        this.showModal = false;
      },
      updateImage() {
        if (this.amount/500.0 < 1) {
          this.imageSrc = '../public/image1.png';
        } else if (this.amount/500.0 < 10) {
          this.imageSrc = '../public/image2.png';
        } else {
          this.imageSrc = '../public/image3.png';
        }
      },
      submitForm() {
        alert('表单已提交！');
        // 处理表单提交逻辑
      }
    }
  };
  </script>
  
  <style>
  .modal {
    display: block;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
  }
  
  .modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  }
  
  .close-button {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  
  .close-button:hover,
  .close-button:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
  </style> -->


<template>

  <el-card>
    <el-form @submit.prevent="submitForm" :model="form" label-width="130px">

      <el-form-item label="输入金额">
        <el-input v-model="form.amount" type="number" @input="updateImage" ></el-input>
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
        <p>预计买入：{{formattedNumber}}克</p>
        <!-- <img :src="imageSrc" alt="动态图片" /> -->
      </el-form-item>

      <el-form-item >
        <!-- <p>预计买入：{{formattedNumber}}克</p> -->
        <img :src="imageSrc" alt="动态图片" />
      </el-form-item>
      

      <el-form-item>
        <el-button type="primary" @click="submitForm">提交</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import type { Action } from 'element-plus'
import { el } from 'element-plus/es/locale';

const form = ref({
  amount: 0,
  expectedPurchase: '',
  paymentMethod: 'wechat',
  participateInBlindBox: false,
})

const imageSrc = ref('./src/assets/image1.png')

// const formattedNumber = computed(() => {
//   if(form.value.amount==''){
//     return 0
//   }else{ 
//     return parseFloat(form.value.amount) / 556.0).toFixed(6) }  

  const formattedNumber = computed(() => (  (form.value.amount / 556.0).toFixed(6) ))

const showInfo = () => {
  ElMessageBox.alert('参加盲盒活动可以获得惊喜礼品！', '盲盒活动详情', {
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
  const amount = form.value.amount / 556.0
  if (amount <1) {
    imageSrc.value = './src/assets/image1.png'
  } else if (amount < 10) {
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

  
