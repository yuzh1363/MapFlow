<script setup>
import MyButton from './MyButton.vue';
import { ref } from 'vue';

const isClick = ref(false)

const btnClick  = ()=>{
    isClick.value = !isClick.value
}
</script>

<template>
    <div class="skillmap-card">
        <!-- all -->
        <div class="all-container p-3">
            <!-- header -->
            <div class="header-container d-flex align-items-center">
                <img src="../assets/images/lets-icons_check-fill.svg" alt="">
                <div class="text-container">
                    <div class="card-title">數位影像基礎與介面導覽</div>
                    <div class="sec-title">理解點陣圖邏輯與色彩空間</div>
                </div>
            </div>
            <!-- 心得+按鈕 -->
            <div class="d-flex align-items-center justify-content-between py-4 gap-3">
                <div class="feedback p-3">
                    <div class="fs-6 fw-bold">
                        學習心得
                    </div>
                    <div class="card-content">
                        很多新手會沒注意到畫布問題導致失真，印刷務必設為300DPI，網頁為72DPI
                    </div>
                </div>
                <MyButton text="寫心得" border="square" size="size-sm"></MyButton>
            </div>
            <!-- 學習資源 -->
            <div class="resource-container d-flex justify-content-between align-items-center">
                <div class="card-title">學習資源</div>
                <i class="fa-solid fa-angle-up" @click="btnClick" v-if="isClick"></i>
                <i class="fa-solid fa-angle-down" @click="btnClick"   v-else></i>
            </div>
            <!-- video -->
            <div class="video-list-group d-flex mt-4" v-if="isClick">
                <div class="video-item">
                    <img src="../assets/images/cover01.jpg" alt="">
                </div>
                <div class="video-item">
                    <img src="../assets/images/cover02.jpg" alt="">
                </div>
                <div class="video-item">
                    <img src="../assets/images/cover01.jpg" alt="">
                </div>
                <div class="video-item">
                    <img src="../assets/images/cover02.jpg" alt="">
                </div>

            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.skillmap-card {
    width: 100%;
    max-width: 880px;
    border-radius: var(--radius-md);
    background-color: var(--color-neutral-50);
    box-shadow: 1px 1px 12px #c9c9c9;
}

.feedback {
    background-color: var(--color-neutral-50);
    border-radius: var(--radius-md);
    box-shadow: 1px 1px 5px #c9c9c9;
    width: 85%;
}

i {
    font-size: var(--font-size-2xl);
}

.video-list-group {
    overflow-x: auto;
    white-space: nowrap;
    gap: 10px;
    .video-item {
        flex: 0 0 48%;
        aspect-ratio: 16 / 9;
        overflow: hidden;

        img {
            width: 100%;
            object-fit: cover;
        }
    }
}
</style>