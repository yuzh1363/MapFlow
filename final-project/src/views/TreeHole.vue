<template>
    <div class="treehole-page">
        <div class="main-frame">
            <div class="container">
                <div class="text-container">
                    <h1>角色樹洞</h1>
                    <p>這是角色樹洞介紹</p>
                    <img src="../assets/images/treeholeimg.svg" alt="">
                </div>
                <InputCard></InputCard>
            </div>
        </div>
        <div class="root-container">
            <div class="container">
                <h2 class="mb-3">樹洞紀錄</h2>
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
</script>

<style scoped>
.treehole-page{
    background-color: #001354;
}
.main-frame{
    background-color: #001354;
    padding: var(--spacing-10) var(--spacing-24);
}
.main-frame>.container{
    display: flex;
    justify-content: space-between;
}
.text-container{
    text-align: end;
    border: 1px solid;
    position: relative;
}
img{
    position: absolute;
    width: 500px;
}
h1,p{
    color: var(--color-neutral-50);
}
.root-container{
    position: relative;
    border-radius: 40px 40px 0 0 ;
    padding: var(--spacing-12) 0;
    background-color: var(--color-bg-primary);
}
</style>