<template>
    <div class="treehole-page">
        <div class="main-frame fixed-top">
            <div class="container">
                <div class="text-container d-flex flex-column justify-content-end align-items-start">
                    <h1 class="">角色樹洞</h1>
                    <p>這是角色樹洞介紹</p>
                    <img src="../assets/images/treeholeimg.svg" alt="">
                </div>
                <InputCard></InputCard>
            </div>
        </div>
        <div class="root-container  sticky-top" :class="{ 'rounded-5': !isSticky, 'rounded-0': isSticky }">
            <div class="container">
                <h2 class="mb-3 ">樹洞紀錄</h2>
                <div class="content-container">
                    <div class="row">
                        <div class="col-12 col-md-6 col-lg-4 mb-4"><TreeHoleCard></TreeHoleCard></div>
                        <div class="col-12 col-md-6 col-lg-4 mb-4"><TreeHoleCard></TreeHoleCard></div>
                        <div class="col-12 col-md-6 col-lg-4 mb-4"><TreeHoleCard></TreeHoleCard></div>
                        <div class="col-12 col-md-6 col-lg-4 mb-4"><TreeHoleCard></TreeHoleCard></div>
                        <div class="col-12 col-md-6 col-lg-4 mb-4"><TreeHoleCard></TreeHoleCard></div>
                        <div class="col-12 col-md-6 col-lg-4 mb-4"><TreeHoleCard></TreeHoleCard></div>
                        <div class="col-12 col-md-6 col-lg-4 mb-4"><TreeHoleCard></TreeHoleCard></div>
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
}
.main-frame>.container{
    display: flex;
    justify-content: space-between;
}
.text-container{
    position: relative;
}
img{
    position: absolute;
    width: 500px;
    top: 14px;
    left: 140px;
}
h1,p{
    color: var(--color-neutral-50);
}
.root-container{
    border-radius: 40px 40px 0 0 ;
    transition: border-radius 0.3s;
    padding: var(--spacing-12) 0;
    background-color: var(--color-bg-primary);
    margin-top:400px;
    z-index: 2;
}
.no-radius {
  border-radius: 0;
}
</style>