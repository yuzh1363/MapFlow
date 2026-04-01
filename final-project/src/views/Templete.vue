<template>
    <div class="templete-page">
        <div class="main-frame sticky-top">
            <div class="container d-flex flex-column flex-md-row">
                <div class="text-container d-flex flex-column justify-content-center align-items-start">
                    <h1 class="display-4 fw-bold">樣板市集</h1>
                    <p>這是樣板市集介紹</p>
                </div>
                <img src="../assets/images/templeteimg.png" >
            </div>
        </div>
        <div class="root-container  position-relative mt-5" :class="{ 'rounded-5': !isSticky, 'rounded-0': isSticky }">
            <div class="container">
                <div class="d-flex flex-column align-items-end">
                    <SearchBar text="樣板檢索" class="mb-3"></SearchBar>
                    <div class="btn-group mb-3">
                        <button class="btn dropdown-toggle" type="button" id="defaultDropdown" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                            最高分
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="defaultDropdown">
                            <li><a class="dropdown-item" href="#">最新</a></li>
                            <li><a class="dropdown-item" href="#">最熱門</a></li>
                        </ul>
                    </div>
                </div>
                
                <div class="content-container">
                    <div class="row d-flex justify-content-start">
                        <div class="col-12 col-md-6 col-lg-4 mb-4"><TempleteCard></TempleteCard></div>
                        <div class="col-12 col-md-6 col-lg-4 mb-4"><TempleteCard></TempleteCard></div>
                        <div class="col-12 col-md-6 col-lg-4 mb-4"><TempleteCard></TempleteCard></div>
                        <div class="col-12 col-md-6 col-lg-4 mb-4"><TempleteCard></TempleteCard></div>
                        <div class="col-12 col-md-6 col-lg-4 mb-4"><TempleteCard></TempleteCard></div>
                        <div class="col-12 col-md-6 col-lg-4 mb-4"><TempleteCard></TempleteCard></div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    
</template>

<script setup>
import TempleteCard from '../components/TempleteCard.vue'
import SearchBar from '../components/SearchBar.vue'
import { ref, onMounted, onUnmounted } from 'vue';

const isSticky = ref(false)
const handleScroll = () => {
  isSticky.value = window.scrollY > 400;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.templete-page{
    background-color: #001354;
}
.main-frame{
    background-color: #001354;
    padding: var(--spacing-10) var(--spacing-24);
    height: 400px;
    z-index: 1;
    top: 60px;
}
.main-frame>.container{
    display: flex;
    justify-content: space-between;
}
.text-container{
    position: relative;
}
img{
    max-width: 600px;
    min-width: 350px;
    height: auto; 
    object-fit: contain;
    z-index: 1;
}
h1,p{
    color: var(--color-neutral-50);
}
.root-container{
    border-radius: 40px 40px 0 0 ;
    transition: border-radius 0.3s;
    padding: var(--spacing-12) 0;
    background-color: var(--color-bg-primary);
    z-index: 1010;  
    min-height: 100vh;
}
.no-radius {
    border-radius: 0;
}
.btn-group{
    width: 100px;
}
.btn-group>button,.dropdown-menu{
    background-color: var(--color-neutral-900);
    color: var(--color-neutral-50);
}
.dropdown-item{
    color: var(--color-neutral-50);
}
</style>