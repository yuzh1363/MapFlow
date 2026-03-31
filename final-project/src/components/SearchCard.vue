<template>
    <div class="search-card">
        <div class="job-info">
            <div class="card-title">AI機器學習工程師</div>
            <div class="card-content">負責開發與佈署機器學習模型，優化演算法效能並處理大規模數據集。需具備 Python 程式能力及深度學習框架（如 PyTorch、TensorFlow）的使用經驗，致力於將 AI 技術轉化為實際的產品解決方案。</div>
        </div>
        <div class="job-cta">
            <div class="tag-container">
                <div class="tag">
                    <img src="../assets/images/node.svg" alt="node">20
                </div>
                <Bagde text="資訊科技" type="green" border="square" size="size-xs"></Bagde>
            </div>
            <MyButton text="查看角色地圖" border="pill" size="size-sm"></MyButton>
        </div>
    </div>
</template>

<script setup>
import Bagde from './Bagde.vue';
import MyButton from './MyButton.vue';


</script>

<style scoped>
.search-card{
    width: 280px;
    height: 280px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid #757575;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 1px 1px 12px #dfdfdf ;
}
.job-info{
    display: flex;
    flex-direction: column;
    gap: 12px;
}
.job-cta{
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.tag-container{
    display: flex;
    justify-content: space-between;
}
.tag{
    display: flex;
    align-items: center;
    gap: 10px;
}
</style>