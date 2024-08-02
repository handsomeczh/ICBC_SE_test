<template>
  <div class="text-color">
    <!-- 顶部导航栏 -->
    <van-nav-bar title="小金豆盲盒">
      <template #left>
        <!-- 左侧返回按钮 -->
        <van-icon name="arrow-left" color="#ff0000" @click="onClickLeft"/>
      </template>
    </van-nav-bar>
  </div>
  <!-- 背景容器 -->
  <div class="background-container">
    <!-- 盲盒点击区域 -->
    <div class="blind-box" @click="openBox">
      <!-- 未打开盲盒时显示 -->
      <div v-if="!opened" class="box">
        <div class="image-container">
          <img src="../assets/images/三丽鸥/三丽鸥盲盒.png" alt="盲盒" class="animated-image">
        </div>
      </div>
      <!-- 打开盲盒后的爆炸动画 -->
      <div v-else class="explosion" @animationend="handleAnimationEnd">
        <div class="content">🎉</div>
      </div>
      <!-- 显示抽奖内容 -->
      <div v-if="showContent" class="explosion-content">
        <div class="blind-box-container">
          <div class="fancy-text">恭喜抽中</div>
        </div>
        <img :src="randomImage.src" alt="Explosion Image" class="explosion-image">
        <div class="button-container">
          <van-action-bar-button class="no-border-button" type="primary" text="< 继续抽奖"
                                 @click="goToBlindboxPage"/>
          <br>
          <br>
          <van-action-bar-button class="action-bar-button" plain type="primary" text="开心收下"
                                 @click="goToLuckyPage"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import state from "@/api/global_variable.js";

export default {
  data() {
    return {
      opened: false, // 是否打开盲盒
      showContent: false, // 是否显示盲盒内容
      randomImage: {src: '/src/assets/images/三丽鸥/HelloKitty.png'}, // 默认随机图片
      images: [ // 可供随机选择的图片数组
        {src: '/src/assets/images/三丽鸥/HelloKitty.png'},
        {src: '/src/assets/images/三丽鸥/帕恰狗.png'},
        {src: '/src/assets/images/三丽鸥/美乐蒂.png'},
      ],
    };
  },
  methods: {
    openBox() {
      this.opened = true; // 标记盲盒已打开

    },
    handleAnimationEnd() {
      this.showContent = true; // 动画结束后显示内容
      const randomIndex = Math.floor(Math.random() * this.images.length);
      this.randomImage = this.images[randomIndex]; // 随机选择图片
    },
    onClickLeft() {
      this.$router.go(-1); // 返回上一页
    },

    goToBlindboxPage() {
      this.$router.push('/blindbox'); // 跳转到盲盒页
    },

    goToLuckyPage() {
      // 添加金豆皮肤到换装扮界面
      if (!state.goldBeanSkins.includes(this.randomImage.src)) {
        state.goldBeanSkins.push(this.randomImage.src);
      }
      this.$router.push('/');
    }
  }
};


</script>

<style scoped>
/* 背景容器样式 */
.background-container {
  width: 100%;
  height: 93vh;
  background-image: url('../assets/images/三丽鸥2.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 图片容器样式 */
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 250px;
  background-color: transparent;
}

.image-container img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

/* 盲盒样式 */
.blind-box {
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  width: 250px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-radius: 10px;
  animation: shake 0.5s infinite alternate;
  cursor: pointer;
  transition: all 0.5s ease;
}

/* 盲盒摇动动画 */
@keyframes shake {

  0%,
  100% {
    transform: translateX(0);
  }

  25% {
    transform: translateX(-10px);
  }

  75% {
    transform: translateX(10px);
  }
}

/* 爆炸动画样式 */
.explosion {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  animation: explode 0.5s forwards;
  position: relative;
}

@keyframes explode {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(3);
    opacity: 0;
  }
}

/* 爆炸内容样式 */
.content {
  font-size: 3rem;
  animation: pop 0.5s forwards;
}

@keyframes pop {
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
}

/* 显示内容样式 */
.explosion-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  animation: show 0.5s forwards;
}

@keyframes show {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

/* 抽中奖品图片样式 */
.explosion-image {
  max-width: 200px;
  max-height: 200px;
  margin-bottom: 20px;
}

/* 盲盒容器样式 */
.blind-box-container {
  text-align: center;
  margin-top: 30px;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 50px;
  border-radius: 20px;
  background-image: linear-gradient(270deg, rgba(227, 173, 97, 0.00) 0%, #fcd8a5 50%, rgba(255, 223, 179, 0.00) 100%);
}

/* 盲盒文本样式 */
.fancy-text {
  font-size: 40px;
  color: #de8a23;
  font-family: 'Georgia', serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  opacity: 0.9;
  padding: 10px;
  border-radius: 20px;
}

/* 操作按钮样式 */
.action-bar-button {
  width: calc(90% - 40px);
  background-color: transparent;
  color: #2b0000;
  border: 1px solid #1f0000;
  position: absolute;
  border-radius: 20px;
  text-align: center;
}

.button-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: transparent;
  margin-top: 100px;
}

/* 无边框按钮样式 */
.no-border-button {
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  color: inherit;
  cursor: pointer;
  font-size: 15px;
}

.no-border-button:hover {
  opacity: 0.8;
}

.no-border-button:focus {
  outline: none;
}
</style>
