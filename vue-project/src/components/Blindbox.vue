<template>
  <HelloWorld msg="Vite + Vue"/>
  <div class="background-container">
    <!-- 其他内容 -->
    <div>
      <van-nav-bar title="小金豆盲盒">
        <template #left>
          <van-icon name="arrow-left" color="#ff0000" @click="onClickLeft"/>
        </template>
        <template #right>
          <van-dropdown-menu class="menu-right">
            <van-dropdown-item v-model="selected" :options="options"/>
          </van-dropdown-menu>
        </template>
      </van-nav-bar>

    </div>

    <van-notice-bar left-icon="volume-o" text="🎉三丽鸥陪你玩，快来开启你的三丽鸥惊喜之旅吧！🎉"/>

    <div class="center-container">
      <div class="help-button-container">
        <van-icon class="help-button" size="20px" @click="onHelpClick" name="replay"/>

      </div>
      <div class="text-container">
        <van-divider class="fancy-text">
          三丽鸥系列盲盒
        </van-divider>
      </div>
      <div class="image-container">
        <img :src="imageUrl" alt="Description" class="animated-image" :class="{ flash: isFlashing }">
      </div>
      <div class="text-container">
        <van-divider class="fancy-text">
          款式预览
        </van-divider>
      </div>
      <div class="carousel-container">
        <van-swipe :autoplay="3000" indicator-color="white" ref="swipe">
          <van-swipe-item v-for="(item, index) in images" :key="index">
            <div class="carousel-image-wrapper">
              <img :src="item.src" :alt="item.alt" class="carousel-image"/>
              <div class="carousel-caption">{{ item.caption }}</div>
            </div>
          </van-swipe-item>
        </van-swipe>
        <van-icon name="arrow-left" class="carousel-nav left-nav" @click="prev"/>
        <van-icon name="arrow" class="carousel-nav right-nav" @click="next"/>
      </div>
    </div>
    <van-action-bar>
      <van-col span="4" class="icon-column">
        <van-action-bar-icon icon="coupon-o" text="显示卡" @click="showCardDialog"/>
      </van-col>

      <van-action-bar-button class="button" type="primary" text="就抽它" @click="goToLuckyPage"/>

      <van-col span="4" class="icon-column">
        <van-badge :content="2" color="#d73434">
          <van-action-bar-icon icon="coupon-o" text="提示卡" @click="showTipDialog"/>
        </van-badge>
      </van-col>
    </van-action-bar>

    <van-dialog v-model:show="cardDialogVisible" title="显示卡" show-cancel-button class="custom-dialog">
      <div class="dialog-content">
        显示卡：用此卡后可以直接显示出盲盒样式
        <br>
        * 可用积分兑换
      </div>
    </van-dialog>
    <!-- 提示卡弹窗 -->
    <van-dialog v-model:show="tipDialogVisible" title="提示卡" show-cancel-button class="custom-dialog">
      <div class="dialog-content">
        提示卡：用此卡后可以排除盲盒样式
        <br>
        * 可用积分兑换
      </div>
    </van-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: 'home',
      options: [
        {text: '三丽鸥', value: 'home'},
        {text: '迪士尼', value: 'Disney'},

      ],
      images: [
        {src: '/src/assets/images/三丽鸥/HelloKitty.png', alt: 'Image 1', caption: 'HelloKitty'},
        {src: '/src/assets/images/三丽鸥/帕恰狗.png', alt: 'Image 2', caption: '帕恰狗'},
        {src: '/src/assets/images/三丽鸥/美乐蒂.png', alt: 'Image 3', caption: '美乐蒂'},
      ],
      imageUrl: '/src/assets/images/三丽鸥/三丽鸥盲盒.png', // Initial image URL
      isFlashing: false, // Control the flashing effect
      cardDialogVisible: false,
      tipDialogVisible: false, // 提示卡
    };
  },
  watch: {
    selected(newVal) {
      this.onMenuClick(newVal);
    }
  },
  methods: {
    goToLuckyPage() {
      this.$router.push('/lucky1'); // 使用 $router.push 方法跳转到 'lucky' 页面
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    prev() {
      this.$refs.swipe.prev();
    },
    next() {
      this.$refs.swipe.next();
    },
    onMenuClick(menu) {
      switch (menu) {
        case 'home':
          this.$router.push('/blindbox');
          break;
        case 'Disney':
          this.$router.push('/disney');
          break;

      }
    },
    showCardDialog() {
      this.cardDialogVisible = true;
    },
    showTipDialog() {
      this.tipDialogVisible = true; // 显示提示卡弹窗
    },
    onHelpClick() {

      // Trigger the flash effect
      this.isFlashing = true;

      // Reset the flashing effect after the animation duration
      setTimeout(() => {
        this.isFlashing = false;
      }, 500); // Duration of the flash animation

    }
  }
};
</script>

<style scoped>
.icon-column {
  display: flex;
  align-items: center;
  justify-content: center;
}

.van-action-bar-icon,
.van-badge {
  display: flex;
  align-items: center;
}

.menu-right {
  width: 0px;
}

.nav-right-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 10px;
}

.van-dropdown-menu {
  background-color: #ffffff;
  border: 10px solid #ffffff;
}

.van-dropdown-item {
  color: #333;
}

.van-dropdown-item__option {
  background-color: #fff;
  color: #4c4c4c;
}

.van-dropdown-item__option--selected {
  background-color: #ffffff;
  color: #6cc5e6;
}

.van-dropdown-menu__item--active {
  color: #5594f2;
}

.van-dropdown-item__option--active {
  color: #d73434;
}

.button {
  background-color: #CAAD75;
}

.van-nav-bar__left {
  color: #d73434;
}

.carousel-container {
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 5px solid #CAAD75;
  align-items: center;
  justify-content: center;
  background-color: rgb(252, 249, 245, 0.6);
  display: flex;
  padding: 10px;
}

.carousel-image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.carousel-image {
  max-width: 100%;
  max-height: 100%;
}

.carousel-caption {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(175, 93, 0, 0.5);
  color: white;
  padding: 0px 20px;
  border-radius: 20px;
  font-size: 16px;
}

.center-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
}

.background-container {
  width: 100%;
  height: 100vh;
  background-image: url('../assets/images/三丽鸥.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}

.image-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border: 5px solid #CAAD75;
  border-radius: 20px;
  background-color: rgb(252, 249, 245, 0.6);
}

.image-container img {
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
}

.blindbox-text {
  text-align: center;
  font-size: 15px;
  color: #ce8a24;
}

.animated-image {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.1s ease-out;
}

.image-container:hover .animated-image {
  transform: scale(1.1);
}

.fancy-text {
  font-size: 15px;
  color: #000000;
  font-family: 'PingFangSC-Regular';
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  opacity: 0.6;
  border-radius: 20px;
  font-weight: 540;
  text-align: center;
  display: inline-block;
  animation: pulse 2s infinite;
}

.text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 30px;
  border-radius: 20px;
  margin-top: 25px;
  margin-bottom: 0px;
  background-image: linear-gradient(270deg, rgba(227, 173, 97, 0.00) 0%, #fcd8a5 50%, rgba(255, 223, 179, 0.00) 100%);
}

.carousel-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 50%;
  z-index: 10;
  font-size: 14px;
}

.left-nav {
  left: 10px;
}

.right-nav {
  right: 10px;
}

.carousel-nav:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.van-dialog__body {
  padding: 20px;
}

.dialog-content {
  background: url('../assets/images/三丽鸥2.jpg') no-repeat center center;
  background-size: cover;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  padding: 20px;
  color: #532100;
  text-align: center;
  font-size: 16px;
}

.help-button-container {
  position: absolute;
  top: 125px;
  /* Adjust this value as needed */
  right: 17px;
  /* Adjust this value as needed */
  z-index: 1000;
  /* padding: 5px;*/

}

.help-button {
  background-color: #ce8a24;
  border-radius: 50px;
  border: transparent;
  color: #ffffff;
  padding: 5px;
}

@keyframes flash {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.flash {
  animation: flash 0.3s ease;
}
</style>
