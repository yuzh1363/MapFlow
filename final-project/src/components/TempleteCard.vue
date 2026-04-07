<template>
    <div class="templete-card">
        <div class="card-img" style="width: 100%; height: 150px; background-color: #333;"></div>
        <div class="card-container">
            <div class="content-container mb-3">
                <div class="header-container">
                    <div class="card-title">AI機器學習工程師</div>
                    <p class="card-content">王大明</p>
                </div>
                <div class="card-content line-clamp-4">負責開發與佈署機器學習模型，優化演算法效能並處理大規模數據集。需具備 Python 程式能力及深度學習框架（如 PyTorch、TensorFlow）的使用經驗，致力於將 AI 技術轉化為實際的產品解決方案。</div>
            </div>
            <div class="tags d-flex justify-content-between mb-3">
                <div class="tag card-tag">
                    <img src="../assets/images/node.svg" alt="node">
                    200+
                </div>
                <div class="tag card-tag">
                    <img src="../assets/images/user.svg" alt="">
                    2
                </div>
                <div class="tag card-tag">
                    <img src="../assets/images/star.svg" alt="">
                    5.0(16)
                </div>
            </div>
            <div class="purchase">
                <span style="color: var(--primary-blue-500);" class="fs-5 me-3">NT$120</span>
                <MyButton text="立即購買" border="pill" size="size-sm"></MyButton>
            </div>
        </div>
    </div>
</template>

<script setup>
import MyButton from './MyButton.vue';


</script>

<style scoped>
.templete-card{
    width: 100%;
    min-width: 300px;
    /* max-width: 350px; */
    border: 1px solid #757575;
    box-shadow: 1px 1px 12px #dfdfdf ;
    border-radius: 12px;
    background-color: var(--color-bg-primary);
    overflow: hidden;
    
}
.card-container{
    padding: 16px 24px;
    gap:12px;
}
.tag{
    display: flex;
    align-items: center;
    gap: 4px;
}
.tags>.tag:nth-child(2)>img{
    width: 25px;
}
.tags>.tag:nth-child(3)>img{
    width: 25px;
}
.purchase{
    display: flex;
    justify-content: end;
    align-items: center;
}
.line-clamp-4 {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;  
    overflow: hidden;
    word-break: break-all; 
}
</style>