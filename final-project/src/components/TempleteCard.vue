<template>
    <div class="templete-card">
        <div class="card-img"></div>
        <div class="card-container">
            <div class="content-container">
                <div class="header-container">
                    <div class="card-title">AI機器學習工程師</div>
                    <p class="card-content">王大明</p>
                </div>
                <div class="card-content">負責開發與佈署機器學習模型，優化演算法效能並處理大規模數據集。需具備 Python 程式能力及深度學習框架（如 PyTorch、TensorFlow）的使用經驗，致力於將 AI 技術轉化為實際的產品解決方案。</div>
            </div>
            <div class="tags">
                <div class="tag">
                    <img src="../assets/node.svg" alt="node">
                    200+
                </div>
                <div class="tag">
                    <img src="../assets/user.svg" alt="">
                    2
                </div>
                <div class="tag">
                    <img src="../assets/star.svg" alt="">
                    5.0(16)
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.templete-card{
    width: 300px;
    border: 1px solid #757575;
    box-shadow: 1px 1px 12px #dfdfdf ;
    border-radius: 12px;
}
.card-container{
    padding: 16px 24px;
    display: flex;
    flex-direction: column;
    gap:12px;
}
.header-container{
    margin-bottom: 12px;
}
.tags{
    display: flex;
    justify-content: space-between;   
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
</style>