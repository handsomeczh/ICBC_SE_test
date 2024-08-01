<template>
  <el-container>
    <el-header>
      <div class="header">
        <img src="../assets/arrow_right@2x.png" @click="goBack" class="back-icon">
        <p class="header-title"><strong>赠金予卿，留爱于心</strong></p>
      </div>
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
          <!-- 其他表单项 -->
        </el-form-item>
      </el-form>
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
        account: ''
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
</style>