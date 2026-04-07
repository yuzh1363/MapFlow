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
        <div class="card-container w-50 d-flex justify-content-between gap-4">
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
        <div class="row">
            <div class="col-10 col-md-4 col-lg-3 mb-4"><SampleCard></SampleCard></div>
            <div class="col-10 col-md-4 col-lg-3 mb-4"><SampleCard></SampleCard></div>
            <div class="col-10 col-md-4 col-lg-3 mb-4"><SampleCard></SampleCard></div>
            <div class="col-10 col-md-4 col-lg-3 mb-4"><SampleCard></SampleCard></div>
            <div class="col-10 col-md-4 col-lg-3 mb-4"><SampleCard></SampleCard></div>
            <div class="col-10 col-md-4 col-lg-3 mb-4"><SampleCard></SampleCard></div>
            <div class="col-10 col-md-4 col-lg-3 mb-4"><SampleCard></SampleCard></div>
            <div class="col-10 col-md-4 col-lg-3 mb-4"><SampleCard></SampleCard></div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
.hero-bg{
    height: 40vh;
    background-color: var(--color-primary);
    h1{
        color: white;
    }
}
.card{
    width: 33%;
    height: 150px;
    // min-width: 180px;
    padding: var(--spacing-2) var(--spacing-5);

    display: flex;
    flex-direction: column;
    gap: 10px;

    .title{
        font-size: var(--font-size-xl);
    }
    .count{
        font-size: var(--font-size-3xl);
        font-weight: bold;
    }
    i{
        font-size: var(--font-size-4xl);
    }
}
</style>