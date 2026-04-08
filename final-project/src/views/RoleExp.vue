<script setup>
import MyButton from '../components/MyButton.vue';


</script>

<template>
    <div class="canva">
        <div class="left-dialog">
            <MyButton text="我要下班" type="yellow" size="size-md" border="pill"></MyButton>
            <RouterLink to="/start-role"><MyButton text="準備好了" type="primary" size="size-md" border="pill"></MyButton></RouterLink>
        </div>
        <div class="right-dialog">
            <h4>歡迎大家收聽角色模擬！</h4>
            <p>今天收到我們的聽眾<span>王戴明</span>的來信，
他正在計畫成為<span>前端工程師</span>，所以想要讓我們來模擬一下這個角色會遇到什麼問題，希望他能克服這些！你準備好了嗎？</p>
        </div>
        <div class="exit">
            <MyButton text="離開" border="square" size="size-md" type="green"></MyButton>
        </div>
        <img src="../assets/images/roleexptitle.png" alt="" class="title">
        <img src="../assets/images/pocast-wei.png" alt="" class="wei">
        <img src="../assets/images/pocast-peggy.png" alt="" class="pbody">
        <img src="../assets/images/peggy-hand.png" alt="" class="phand">
        <img src="../assets/images/left-dialog.png" alt="" class="l-dialog">
        <img src="../assets/images/right-dialog.png" alt="" class="r-dialog">
    </div>
</template>

<style lang="scss" scoped>
.canva{
    margin-top: 60px;
    height: 100vh;
    background-color: #000825;
    position: relative;
}
.exit{
    position: absolute;
    bottom: 100px;
    right: 50px;
    z-index: 5;
}
.left-dialog{
    position: absolute;
    top: 400px;
    left: 400px;

    background-color: #fff;
    width: 300px;
    height: 100px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content:space-between;
    padding: 0 24px;
    z-index: 10;
}
.l-dialog{
    position: absolute;
    top: 480px;
    left: 400px;
}
.r-dialog{
    position: absolute;
    top: 330px;
    right: 400px;
}
.right-dialog{
    position: absolute;
    top: 200px;
    right: 400px;

    background-color: #fff;
    width: 430px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    padding: 12px 24px;

    span{
        color: var(--color-primary);
    }
}
.title{
    position: absolute;
    top: 30px;
    left: 30px;
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
</style>