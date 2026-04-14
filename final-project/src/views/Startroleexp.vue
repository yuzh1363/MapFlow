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
        <div class="left-dialog">
            <p class="mb-0">我覺得他...</p>
            <RouterLink to="/finish-role">
                <MyButton text="不行" type="yellow" size="size-md" border="pill"></MyButton>
            </RouterLink>
            <RouterLink to="/finish-role">
                <MyButton text="可以" type="primary" size="size-md" border="pill"></MyButton>
            </RouterLink>
        </div>
        <div class="right-dialog">
            <p><span>前端工程師</span>常常加班，責任制度是常態，能接受嗎？</p>
        </div>
        <div class="exit">
            <RouterLink to="/role-track">
                <MyButton text="離開" border="square" size="size-md" type="green"></MyButton>
            </RouterLink>

        </div>
        <div class="pagination-container d-flex gap-2">
            <button v-for="page in totalPages" :key="page" class="page-btn" :class="{ 'active': currentPage === page }"
                @click="changePage(page)">
                {{ page }}
            </button>
        </div>

        <img src="../assets/images/roleexptitle.png" alt="" class="title">
        <img src="../assets/images/confus.png" alt="" class="
        confus">
        <img src="../assets/images/pocast-wei.png" alt="" class="wei">
        <img src="../assets/images/pocast-peggy.png" alt="" class="pbody">
        <img src="../assets/images/peggy-hand.png" alt="" class="phand">
        <img src="../assets/images/left-dialog.png" alt="" class="l-dialog">
        <img src="../assets/images/right-dialog.png" alt="" class="r-dialog">
    </div>
</template>

<style lang="scss" scoped>
.canva {
    margin-top: 60px;
    height: 100vh;
    background-color: #000825;
    position: relative;
}

.exit {
    position: absolute;
    bottom: 100px;
    right: 50px;
    z-index: 5;
}

.left-dialog {
    position: absolute;
    top: 400px;
    left: 400px;

    background-color: #fff;
    width: 300px;
    height: 100px;
    border-radius: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
    z-index: 10;
}

.l-dialog {
    position: absolute;
    top: 480px;
    left: 400px;
}

.r-dialog {
    position: absolute;
    top: 330px;
    right: 400px;
}

.right-dialog {
    position: absolute;
    top: 200px;
    right: 400px;

    background-color: #fff;
    width: 430px;
    height: 150px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px 24px;

    span {
        color: var(--color-primary);
    }
}

.title {
    position: absolute;
    top: 30px;
    left: 30px;
}

.confus {
    position: absolute;
    z-index: 10;
    top: 510px;
    left: 100px;
    animation: confus 5s ease-in-out infinite;
}

@keyframes confus {
    0% {
        transform: translateY(20px);
    }

    50% {
        transform: translateY(-3px);
    }

    100% {
        transform: translateY(20px);
    }
}

.wei {
    position: absolute;
    bottom: 0px;
    left: 0;
    z-index: 3;
}

.pbody {
    position: absolute;
    right: -160px;
    bottom: 0px;
    z-index: 2;
}

.phand {
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
</style>