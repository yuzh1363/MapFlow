<script setup>
import { RouterLink } from 'vue-router';
import MyButton from '../components/MyButton.vue';
import { ref } from 'vue';

const showbubble = ref(false);
const trackClick = ()=>{
    showbubble.value = !showbubble.value;
}

</script>

<template>
    <div class="role-track">
        <div class="banner">
            <div class="container d-flex align-items-center justify-content-between py-4">
                <h1 class="display-4">UIUX設計師</h1>
                <p>透過「UX研究與邏輯」分析使用者痛點，搭配「UI視覺與互動設計」創造美觀且流暢的數位體驗。</p>
                <div class="button-group">
                    <MyButton text="開始追蹤" type="black" border="square" size="size-sm" @click="trackClick"></MyButton>
                    <div class="bubble-frame" v-if="showbubble">
                        <p class="text-center">是否進行角色模擬？</p>
                        <div>
                            <RouterLink to="/role-detail"><i class="fa-solid fa-xmark" style="color: red; font-size: 30px;"></i></RouterLink> 
                            <RouterLink to="/role-exp"><i class="fa-regular fa-circle" style="color: blue;font-size: 28px;"></i></RouterLink>
                            
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
        <div class="container d-flex justify-content-center mb-5 ">
            <img src="../assets/images/map.png" alt="">
        </div>
        <div class="container ">
            <h3 class="fw-bold mb-4">相關角色</h3>
            <div class="d-flex justify-content-center">
                <img src="../assets/images/relativerole.png" alt="">
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.role-track {
    background-color: var(--color-neutral-50);
}

.banner {
    background-color: var(--Sec-yellow-500);
    margin-top: 60px;
}
.button-group{
    position: relative;
}
.bubble-frame{
    background-color: #fff;
    border-radius: 20px;
    width: 180px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: end;
    padding: 12px 8px;

    position: absolute;
    left: -70px;
    top: 50px;

    i{
        cursor: pointer;
    }
}
</style>