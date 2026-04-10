<template>
    <div class="aboutus">
        <div class="container">
            <h1 class="display-4 mb-5">關於我們</h1>
            <div class="box">
                <div class="member">
                    <div class="title fs-3">概念架構師</div>
                    <div class="s-img">
                        <img src="../assets/images/about-s.png" alt="">
                    </div>
                    <div class="intro">
                        <p>Scott</p>
                        <p>設計組</p>
                    </div>
                </div>
                <div class="member">
                    <div class="title fs-3">想法淬煉師 </div>
                    <div class="y-img">
                        <img src="../assets/images/about-y.png" alt="">
                    </div>
                    <div class="intro">
                        <p>YY</p>
                        <p>開發組</p>
                    </div>
                </div>
                <div class="member">
                    <div class="title fs-3">美感調律師</div>
                    <div class="p-img">
                        <img src="../assets/images/about-p.png" alt="">
                    </div>
                    <div class="intro">
                        <p>Peggy</p>
                        <p>設計組</p>
                    </div>
                </div>
                <div class="member">
                    <div class="title fs-3">雷鳴動畫師</div>
                    <div class="w-img">
                        <img src="../assets/images/about-w.png" alt="">
                    </div>
                    <div class="intro">
                        <p>William</p>
                        <p>開發組</p>
                    </div>
                </div>
            </div>

        </div>
    </div>

</template>

<script setup>

</script>

<style lang="scss" scoped>
h1,
p,.title {
    color: white;
}
p{
    font-size: 24px;
}
.aboutus{
    background-color: var(--color-neutral-800);
    // height: 100vh;
}
.container {
    padding-top: 80px;
}
.y-img>img{
    height: 100px;
}
img {
    height: 300px;
}
.box {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items:end;
}
.intro{
    text-align: center;
}
.member{
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    // border: 1px solid salmon;
}
</style>