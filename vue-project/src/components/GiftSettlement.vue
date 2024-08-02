<template>
  <el-container>
    <el-header class="header">
      <img src="../assets/arrow_right@2x.png" @click="goBack" class="back-icon">
      <p class="header-title"><strong>赠金予卿，留爱于心</strong></p>
    </el-header>
    <el-main class="main-content">
      <div class="block">
        <div class="block-header yellow-bg">受赠方</div>
        <div class="block-content">
          <el-form :model="form" ref="form" label-width="120px">
            <el-form-item label="户名" prop="name">
              <el-input v-model="form.name" placeholder="请输入（支持首字母检索）"></el-input>
            </el-form-item>
            <el-form-item label="手机号" prop="phone">
              <el-input type="tel" v-model="form.phone" placeholder="请输入受赠方手机号"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="block">
        <div class="block-header yellow-bg">
          赠予额度
          <span class="small-text">主题限定~定额赠送</span>
        </div>
        <div class="block-content">
          <el-form :model="form" ref="form" label-width="120px">
            <el-form-item label="赠予克数" prop="weight">
              <el-input type="number" v-model="form.weight" min="0.1" placeholder="请输入(0.1g起)"></el-input>
            </el-form-item>
            <el-form-item label="等额金豆赠送（¥/g）" prop="equivalent">
              <el-input type="number" v-model="form.equivalent" placeholder="免手续费"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="block">
        <div class="block-header yellow-bg">支付</div>
        <div class="block-content">
          <el-form :model="form" ref="form" label-width="120px">
            <el-form-item label="付款方式" prop="paymentMethod">
              <el-select v-model="form.paymentMethod" placeholder="使用工行卡">
                <el-option label="微信" value="wechat"></el-option>
                <el-option label="支付宝" value="alipay"></el-option>
                <el-option label="数字人民币" value="digitalRMB"></el-option>
                <el-option label="其他银行卡" value="otherBank"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="付款账户" prop="account">
              <el-input type="number" v-model="form.account" placeholder="请输入15位数字"></el-input>
            </el-form-item>
            <el-form-item label="留言" prop="message">
              <el-input type="text" v-model="form.message" placeholder="留言"></el-input>
            </el-form-item>
            <el-form-item label="短信通知" prop="smsNotification">
              <el-checkbox v-model="form.smsNotification">是否使用短信通知</el-checkbox>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="block">
        <el-button type="primary" class="confirm-button">确定</el-button>
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'GiftSettlement',
  data() {
    return {
      form: {
        name: '',
        phone: '',
        weight: '',
        equivalent: '',
        paymentMethod: '',
        account: '',
        message: '',
        smsNotification: false
      }
    };
  },
  methods: {
    goBack() {
      this.$router.push({ name: 'Transfer' });
    }
  }
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  background-color: white;
  padding: 10px;
}

.back-icon {
  width: 30px;
  height: 30px;
  cursor: pointer;
  transform: rotate(180deg); /* 旋转180度 */
}

.header-title {
  flex-grow: 1;
  text-align: center;
  font-size: 20px;
}

.main-content {
  /* background-color: #2c2c2c; */
  background-color: #302727;
  padding: 20px;
}

.block {
  background-color: white;
  border-radius: 10px;
  margin-bottom: 20px;
  overflow: hidden;
}

.block-header {
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
}

.yellow-bg {
  background-color: #fac248;
}

.yellow-text {
  color: yellow;
}

.small-text {
  float: right;
  color: gray;
  font-size: 12px;
}

.block-content {
  padding: 10px;
}

.confirm-button {
  width: 100%;
  background-color: #fac248;
  color: black;
  font-weight: bold;
}
</style>