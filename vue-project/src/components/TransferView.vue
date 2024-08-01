<template>
    <div class="transfer-page">
      <div class="banner">
        <img src="@/assets/banner.png" alt="七夕节" class="banner-img" />
      </div>
      <div class="gift-options">
        <div class="gift-item" @click="goToGiftSettlementPage">
          <img src="@/assets/gift.png" alt="Gift" class="gift-img" />
          <button class="gift-button">赠送</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Transfer',
    methods: {
      goToGiftSettlementPage() {
        this.$router.push({ name: 'GiftSettlement' });
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
  }
  
  .banner-img {
    width: 100%;
  }
  
  .gift-item {
    text-align: center;
  }
  
  .gift-button {
    background-color: #f0c040;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    color: white;
  }
  </style>