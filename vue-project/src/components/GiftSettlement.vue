<template>
    <el-container>
        <el-header>
            <h2>赠礼结算</h2>
        </el-header>
        <el-main>
            <el-form :model="form" ref="form" label-width="120px">
                <el-form-item label="收礼人姓名" prop="recipientName">
                    <el-input v-model="form.recipientName"></el-input>
                </el-form-item>
                <el-form-item label="收礼人地址" prop="recipientAddress">
                    <el-input v-model="form.recipientAddress"></el-input>
                </el-form-item>
                <el-form-item label="礼物名称" prop="giftName">
                    <el-input v-model="form.giftName"></el-input>
                </el-form-item>
                <el-form-item label="礼物数量" prop="giftQuantity">
                    <el-input type="number" v-model="form.giftQuantity"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">提交</el-button>
                </el-form-item>
            </el-form>
        </el-main>
    </el-container>
</template>

<script>
export default {
    data() {
        return {
            form: {
                recipientName: '',
                recipientAddress: '',
                giftName: '',
                giftQuantity: 1
            }
        };
    },
    methods: {
        onSubmit() {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    alert('赠礼信息提交成功!');
                    // 在这里可以添加进一步的处理逻辑，例如发送数据到服务器
                } else {
                    alert('请填写完整的赠礼信息!');
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