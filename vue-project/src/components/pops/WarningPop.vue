<template>
  <el-icon plain @click="goToWarnPop = true">
    <Warning/>
  </el-icon>
  <el-dialog
      v-model="goToWarnPop"
      width="98%"
  >
    <span>注意事项or说明</span>
  </el-dialog>
</template>

<script setup>
import {Warning} from "@element-plus/icons-vue";
import {ref} from 'vue';

const goToWarnPop = ref(false);
</script>

<style scoped>

</style>