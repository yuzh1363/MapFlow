<script setup>
  import Peggy from '../components/Peggy.vue';
</script>

<template>
  <div class="error-page">
    <div class="content-container">
      <div class="number-wrapper">
        <img class="img-404" src="../assets/images/404.png" alt="404">
        <div class="peggy-position">
          <Peggy></Peggy>
        </div>
      </div>
      <h2 class="error-txt">找不到此頁面</h2>
    </div>
  </div>
</template>



<style lang="scss" scoped>
  .error-page{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color:var(----color-neutral-200);
    text-align: center;
  }
  
  .content-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 10vh;
  }

  .number-wrapper{
    position: relative;
    display: inline-block;
    width: 60vw;
    max-width: 800px;
  }
  .img-404{
    width: 90%;
    height: auto;
  }
  .peggy-position{
    position: absolute;
    bottom: -42%;
    right: -25%;
    width: 50%;
  }
  .error-text {
  margin-top: 2rem;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  color: var(--color-text-primary);
}
</style>