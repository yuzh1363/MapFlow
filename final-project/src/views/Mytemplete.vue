<script setup>
import SampleCard from '../components/SampleCard.vue';
import SearchBar from '../components/SearchBar.vue'
</script>

<template>
    <div class="hero-bg d-flex align-items-center">
      <div class="container d-flex flex-column flex-md-row align-items-center justify-content-md-between">
        <div class="templete-left mb-2">
          <h1 class="display-6 text-center text-md-start">我的樣板庫</h1>
          <SearchBar text="搜尋樣板"></SearchBar>
        </div>
        <div class="card-container">
          <div class="card">
            <i class="fa-solid fa-pen"></i>
            <span class="title">自訂義樣板</span>
            <span class="count">10</span>
          </div>
          <div class="card">
            <i class="fa-solid fa-bookmark"></i>
            <span class="title">收藏樣板</span>
            <span class="count">15</span>
          </div>
          <div class="card">
            <i class="fa-solid fa-square-check"></i>
            <span class="title">完成樣板</span>
            <span class="count">6</span>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-10 col-md-4 col-lg-3 mb-4 d-flex justify-content-center"><SampleCard></SampleCard></div>
            <div class="col-10 col-md-4 col-lg-3 mb-4 d-flex justify-content-center"><SampleCard></SampleCard></div>
            <div class="col-10 col-md-4 col-lg-3 mb-4 d-flex justify-content-center"><SampleCard></SampleCard></div>
            <div class="col-10 col-md-4 col-lg-3 mb-4 d-flex justify-content-center"><SampleCard></SampleCard></div>
            <div class="col-10 col-md-4 col-lg-3 mb-4 d-flex justify-content-center"><SampleCard></SampleCard></div>
            <div class="col-10 col-md-4 col-lg-3 mb-4 d-flex justify-content-center"><SampleCard></SampleCard></div>
            <div class="col-10 col-md-4 col-lg-3 mb-4 d-flex justify-content-center"><SampleCard></SampleCard></div>
            <div class="col-10 col-md-4 col-lg-3 mb-4 d-flex justify-content-center"><SampleCard></SampleCard></div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
.hero-bg{
    background-color: var(--color-primary);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 350px;
    height: 40vh;
    padding: var(--spacing-16) 7%;
    h1{
        color: white;
    }
}
.card-container{
    display: flex;
    align-items: center;
    gap: 42px;
    flex-wrap: wrap;
    justify-content: center;
}
.card{
    display: flex;
    width: 180px;
    padding: var(--spacing-2) var(--spacing-5);
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 10px;
    border-radius: 16px;
    background: var(--color-neutral-100);

    .title{
        color: var(--color-text-primary);
      font-size: var(--font-size-xl);
      font-style: normal;
      font-weight: var(--font-weight-regular);
      letter-spacing: 0.5px;
    }
    .count{
        font-size: var(--font-size-3xl);
        font-weight: bold;
    }
    i{
        font-size: var(--font-size-4xl);
    }
}

@media (max-width: 992px){
  .hero-bg {
      padding: var(--spacing-12) 5%;
      height: auto;
    }
}

@media (max-width: 768px){
  .hero-bg {
      margin-top: 60px;
    }
  .card-container {
      gap: 20px;
    }

    .card {
      width: 150px;
      display: flex;
      align-items: center;
      .icon { width: 36px; height: 36px; }
      .title { font-size: var(--font-size-xl); }
      .count { font-size: 24px; }
    }
}
</style>