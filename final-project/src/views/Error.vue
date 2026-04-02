<script setup>

</script>

<template>
  <div class="error-page">
    <div class="error-msg">
      <img src="../assets/images/404.png" alt="404">
      <h2>找不到此頁面</h2>
    </div>
    <div class="error-img">
      <img src="../assets/images/Error.png" alt="peggy">
    </div>
  </div>
</template>



<style lang="scss" scoped>
  .error-msg{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    top: 170px;
    left: -290px;
    img{
      margin-bottom: 70px;
    }
  }
  .error-img{
    position: relative;
    top: -120px;
    left: 1001px;
    img{
      width:30%
    }
  }
</style>