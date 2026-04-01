<template>
    <div class="treehole-page">
        <div class="main-frame sticky-top">
            <div class="container d-flex flex-column flex-lg-row justify-content-between gap-5">
                <div class="text-container d-flex flex-column justify-content-end align-items-start w-100 w-lg-50 position-relative">
                    <h1 class="display-4 fw-bold">角色樹洞</h1>
                    <p>這是角色樹洞介紹</p>
                    <img src="../assets/images/treeholeimg.png" alt="">
                </div>
                <div class="w-100 w-lg-50 d-flex justify-content-center justify-content-lg-end">
                    <InputCard></InputCard>
                </div>
                
            </div>
        </div>
        <div class="root-container  position-relative mt-5" :class="{ 'rounded-5': !isSticky, 'rounded-0': isSticky }">
            <div class="container">
                <h2 class="mb-3 ">樹洞紀錄</h2>
                <div class="content-container">
                    <div class="row d-flex flex-column flex-md-row align-items-center align-items-md-start">
                        <div class="col-10 col-md-6 col-lg-4 mb-4 mx-auto"><TreeHoleCard></TreeHoleCard></div>
                        <div class="col-10 col-md-6 col-lg-4 mb-4 mx-auto"><TreeHoleCard></TreeHoleCard></div>
                        <div class="col-10 col-md-6 col-lg-4 mb-4 mx-auto"><TreeHoleCard></TreeHoleCard></div>
                        <div class="col-10 col-md-6 col-lg-4 mb-4 mx-auto"><TreeHoleCard></TreeHoleCard></div>
                        <div class="col-10 col-md-6 col-lg-4 mb-4 mx-auto"><TreeHoleCard></TreeHoleCard></div>
                        <div class="col-10 col-md-6 col-lg-4 mb-4 mx-auto"><TreeHoleCard></TreeHoleCard></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script setup>
import InputCard from '../components/InputCard.vue'
import TreeHoleCard from '../components/TreeHoleCard.vue'
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
.treehole-page{
    background-color: #001354;
}
.main-frame{
    background-color: #001354;
    padding: var(--spacing-10) var(--spacing-24);
    height: 400px;
    z-index: 1;
    top: 60px;
    overflow: hidden
}
.text-container{
    position: relative;
}
img{
    position: absolute;
    max-width: 100%;
    height: auto;
    top: 14px;
    left: 160px;
    z-index: -1;
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
</style>