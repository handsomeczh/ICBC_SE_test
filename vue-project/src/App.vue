<template>
  <div class="background-page">
    <div id="app">
      <toSell />
       <!-- <toBuy /> -->
    </div>
  </div>
</template>

<script>
// import toBuy from './components/toBuy.vue'
import toSell from './components/toSell.vue'

export default {
  name: 'BackgroundPage',

  components: {
    // toBuy,
    toSell
  }
}
</script>

<style scoped>
.background-page {
  width: 100vw;
  height: 100vh;
  background-image: url('./assets/金枝玉叶4.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  
}
</style>