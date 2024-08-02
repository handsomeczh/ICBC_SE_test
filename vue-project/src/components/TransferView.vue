

<template>
  <div class="transfer-page">
    <div class="header">
      <img src="../assets/arrow_right@2x.png" @click="goBack" class="back-icon">
      <p class="header-title"><strong>赠金予卿 留爱于心</strong></p>
    </div>
    <div class="banner">
      <img src="@/assets/banner.png" alt="七夕节" class="banner-img" />
    </div>
    <div class="gift-options">
      <div class="options">
        <button
          v-for="(option, index) in options"
          :key="index"
          :class="['option-button', { selected: selectedOption === index }]"
          @click="selectOption(index)"
        >
          {{ option }}
        </button>
      </div>
      <div class="gift-item" @click="goToGiftSettlementPage">

        <div class="golden-rectangle">
            <img src="@/assets/gift.png" alt="Gift" class="gift-img" />
         </div>
        <button class="gift-button">赠送</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Transfer',
  data() {
    return {
      options: ['乞巧金', '孝顺金', '友谊金', '智慧金'],
      selectedOption: 0
    };
  },
  methods: {
    goToGiftSettlementPage() {
      this.$router.push({ name: 'GiftSettlement' });
    },
    goBack() {
      this.$router.push({ name: 'Home' });
    },
    selectOption(index) {
      this.selectedOption = index;
    }
  }
};
</script>

<style scoped>


.transfer-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative;
  background-color: #fbf1d0; /* 设置 transfer-page 的背景颜色 */
  width: 100vw; /* 确保背景覆盖整个视口宽度 */
  height: 100vh; /* 确保背景覆盖整个视口高度 */
}

.header {
  display: flex;
  align-items: center;
  justify-content: center; /* 水平居中对齐 */
  width: 100%; /* 占满整个宽度 */
  padding: 10px 20px; /* 添加一些内边距 */
  box-sizing: border-box; /* 包括内边距和边框在内的总宽度 */
  position: relative; /* 使子元素可以使用绝对定位 */
}

.header-title {
  flex-grow: 1;
  text-align: center;
  color: gold; /* 设置字体颜色为金黄色 */
  font-weight: bold; /* 设置字体为粗体 */
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000; /* 设置黑色边框 */
  margin-top: 60px; /* 往下一点 */
  font-size: 24px; /* 设置字体大小 */
}

.back-icon {
  position: relative;
  left: -15px; /* 调整左边距，使图片更靠左 */
  width: 50px;
  height: 50px;
  margin-top: 40px; /* 往下一点 */
  cursor: pointer;
  transform: rotate(180deg);
}

.banner-img {
  width: 100%;
  margin-top: 20px;
}

.gift-options {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.options {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top:20px;
  margin-bottom: 20px;
}

.option-button {
  background-color: #a49797;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  border: 2px solid gold; /* 添加金色边框 */
  color: white;
  transition: background-color 0.3s, color 0.3s;
  font-size: 18px; /* 增大字体 */
  font-family: 'Microsoft YaHei', sans-serif; /* 设置字体为微软雅黑 */
}

.option-button.selected {
  background-color: white;
  color: #f0c040;
}

.gift-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;;
}

.gift-img {
  width: 100%; /* 使图片适应矩形 */
  height: auto;
  border-radius: 15px; /* 确保图片的圆角与矩形一致 */
}

.golden-rectangle {
  width: 360px; /* 设置矩形的宽度 */
  height: 300px; /* 设置矩形的高度 */
  border: 2px solid gold; /* 金黄色边框 */
  border-radius: 15px; /* 圆角 */
  margin-top: 20px; /* 与其他元素之间的间距 */
  background-color: white; /* 矩形背景色 */
  overflow: hidden; /* 确保图片不会超出矩形边界 */
  display: flex; /* 使用 Flexbox 布局 */
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  position: relative;
  animation: glowing 1.5s infinite; /* 添加流光效果 */
}

@keyframes glowing {
  0% { border-color: gold; }
  50% { border-color: #ffdf00; }
  100% { border-color: gold; }
}

.gift-button {
  background-color: #f0c040;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  color: white;
  margin-top: 10px; /* 添加一些顶部外边距，使按钮与图片之间有间距 */
}
</style>