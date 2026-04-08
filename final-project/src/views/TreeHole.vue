<template>
    <div class="treehole-page">
        <div class="main-frame sticky-top">
            <div class="all container">
                <div class="text-container">
                    <h1 class="display-4 fw-bold">角色樹洞</h1>
                    <p>在樹洞寫下你在生活中不同角色所遇到的問題與困境，匿名交換來自遠方的煩惱。透過分享脆弱給予彼此支持。</p>
                </div>
                <div class="img-container">
                    <img src="../assets/images/treeholeimg.png" alt="">
                </div>
                <div class="card-box" :class="{'active':isOpen}">
                    <div class="circle" v-if="!isOpen" @click="isOpen = true"><i class="fa-solid fa-angle-left"></i></div>
                    <div class="input-container">
                        <InputCard></InputCard>
                    </div>
                </div>
                <div v-if="isOpen" class="bg-overlay" @click="isOpen = false"></div>
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
                <div class="text-center">
                    <MyButton text="查看更多" type="yellow" border="pill" size="size-md"></MyButton>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script setup>
import InputCard from '../components/InputCard.vue'
import MyButton from '../components/MyButton.vue';
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

const isOpen = ref(false)
</script>

<style lang="scss" scoped>
.treehole-page{
    background-color: #001354;
}
.main-frame{
    background-color: #001354;
    padding: var(--spacing-10) var(--spacing-24);
    height: 60vh;
    z-index: 1;
    top: 60px;
    overflow: hidden
}
.all{
    border: 2px solid seagreen;
    width: 100%;
    display: flex;

}
.text-container{
    display: flex;
    flex-direction: column;
    justify-content: end;
}
.img-container{
    width: 100%;
    border: 2px solid salmon;
}
img{
    max-width: 100%;
}
.card-box{
    position: fixed;
    top: 30%;
    right: 50px;
    display: flex;
    align-items: flex-start;
    transform: translate(100%, -10%); 
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);

    .circle{
        position: absolute;
        left: -25px; 
        top: -20px;
        cursor: pointer;
        display:flex ;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        background-color: var(--color-primary);
        border-radius: 50%;
        z-index: 10;
        i{
            font-size: 30px;
            color: white;
        }
    }
    .input-container{
    margin-right: -450px;
}
}
.active{
    transform: translate(-1000%, -10%);
}
.bg-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: transparent;
    z-index: 5; 
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