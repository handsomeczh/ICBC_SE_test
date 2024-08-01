<template>
  <el-container>
    <el-header>
      <h2>赠金予卿，留爱于心</h2>
    </el-header>
    <el-main>
      <el-form :model="form" ref="form" label-width="120px">
        <el-form-item label="户名" prop="name">
          <el-input v-model="form.name" placeholder="请输入（支持首字母检索）"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input type="tel" v-model="form.phone" placeholder="请输入受赠方手机号"></el-input>
        </el-form-item>
        <el-form-item label="赠予克数" prop="weight">
          <el-input type="number" v-model="form.weight" min="0.1" placeholder="0.1g起"></el-input>
        </el-form-item>
        <el-form-item label="等额金豆赠送（¥/g）" prop="equivalent">
          <el-input type="number" v-model="form.equivalent" placeholder="免手续费"></el-input>
        </el-form-item>
        <el-form-item label="付款方式" prop="paymentMethod">
          <el-select v-model="form.paymentMethod">
            <el-option label="银行卡" value="bank"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="付款账户" prop="account">
          <el-input v-model="form.account" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="留言" prop="message">
          <el-input v-model="form.message" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="form.smsNotification">短信通知</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">确定</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'PurchasePage',
  data() {
    return {
      form: {
        name: '',
        phone: '',
        weight: 0.1,
        equivalent: 0,
        paymentMethod: 'bank',
        account: '',
        message: '',
        smsNotification: true
      }
    };
  },
  methods: {
    submitForm() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          console.log('Form submitted:', this.form);
          // 在这里可以添加进一步的处理逻辑，例如发送数据到服务器
        } else {
          alert('请填写完整的信息!');
          return false;
        }
      });
    }
  }
};
</script>

<style scoped>
.el-header {
  background-color: #f5f5f5;
  padding: 20px;
  text-align: center;
}

.el-main {
  padding: 20px;
}
</style>