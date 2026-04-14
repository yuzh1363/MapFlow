<script setup>
import MyButton from '../components/MyButton.vue';

import { ref } from 'vue';

const totalPages = 10;
const currentPage = ref(1);

const changePage = (page) => {
  currentPage.value = page;
  console.log(`載入第 ${page} 頁資料`);
};
</script>

<template>
    <div class="canva">
        <div class="ready">
            <h1 class="title">準備好成為<span>前端工程師</span>了嗎</h1>
            <div class="card-container">
                <div class="card">
                    <img src="../assets/images/ido.png" alt="">
                    <p  class="fs-4 mb-0">可以</p>
                    <div class="w-100">
                        <sapn>題數：6/10</sapn>
                        <div class="progress-container">
                            <div class="progress-bar" style="width: 60%;"></div>
                        </div>
                    </div>
                    <MyButton text="查看詳細" border="square" size="size-md" type="primary"></MyButton>
                </div>
                <div class="card">
                    <img src="../assets/images/icant.png" alt="">
                    <p class="fs-4 mb-0">不行</p>
                    <div class="w-100">
                        <sapn>題數：4/10</sapn>
                        <div class="progress-container">
                            <div class="progress-bar" style="width: 40%;"></div>
                        </div>
                    </div>
                    <MyButton text="查看詳細" border="square" size="size-md" type="yellow"></MyButton>
                </div>
            </div>
            <div class="btn-group d-flex gap-5">
                <RouterLink to="/role-track">
                    <MyButton text="再考慮一下" type="sec" border="pill" size="size-md"></MyButton>
                </RouterLink>
                
                <RouterLink to="/role-detail">
                    <MyButton text="我準備好了" type="primary" border="pill" size="size-md"></MyButton>
                </RouterLink>
                
            </div>
        </div>
        <div class="pagination-container d-flex gap-2">
            <button
                v-for="page in totalPages"
                :key="page"
                class="page-btn"
                :class="{ 'active': currentPage === page }"
                @click="changePage(page)"
            >
                {{ page }}
            </button>
        </div>
            
        <img src="../assets/images/roleexptitle.png" alt="" class="title">
        <img src="../assets/images/pocast-wei.png" alt="" class="wei">
        <img src="../assets/images/pocast-peggy.png" alt="" class="pbody">
        <img src="../assets/images/peggy-hand.png" alt="" class="phand">
    </div>
</template>

<style lang="scss" scoped>
.canva{
    margin-top: 60px;
    height: 100vh;
    background-color: #000825;
    position: relative;
}
span{
    color: var(--color-primary);
}
.exit{
    position: absolute;
    bottom: 100px;
    right: 50px;
    z-index: 5;
}
.ready{
    position: absolute;
    top: 10%;
    left: 50%;       
    transform: translateX(-50%);
    z-index: 10;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    .card-container{
        display: flex;
        justify-content: space-between;
        
        .card{
            width: 45%;
            padding: 12px 24px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            background-color: var(--color-neutral-50);
    }
    }
    
}
.title{
    color: white;
}

.wei{
    position: absolute;
    bottom: 0px;
    left: 0;
    z-index: 3;
}
.pbody{
  position: absolute;
  right: -160px;
  bottom: 0px;
  z-index: 2;
}
.phand{
    position: absolute;
    right: 220px;
    bottom: 130px;
    z-index: 1;

    transform-origin: bottom right; 
    animation: swing 2s ease-in-out infinite;
}

@keyframes swing {
    0% {
        transform: rotate(-5deg);
    }
    50% {
        transform: rotate(5deg);
    }
    100% {
        transform: rotate(-5deg);
    }
}

.pagination-container {
    position: absolute;  
    bottom: 60px;    
    left: 50%;       
    transform: translateX(-50%);
    padding: 20px;
    border-radius: 8px;
    z-index: 5;
}

.page-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%; 
  border: none;
  background-color: white; 
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: bold;
}

.page-btn.active {
  background-color: #FFD700; 
  color: #333;
}

.page-btn:hover:not(.active) {
  background-color: #FFD700;
}

.progress-container {
    width: 100%;
    background-color: #9c9c9c;
    height: 13px; 
    border-radius: 100px;  
    overflow: hidden;
}
.progress-bar { 
  background: var(--color-support-b);
  height: 100%;  
}
</style>