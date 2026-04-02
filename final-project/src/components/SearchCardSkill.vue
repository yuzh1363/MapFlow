<template>
    <div class="search-card">
        <div class="job-info">
            <div class="card-title">Photoshop</div>
            <div class="card-content line-clamp-4">為強大的視覺後援。設計師主要利用其精確的影像編修、去背與校色功能，來優化介面中的產品情境照或 Banner 素材，確保視覺層次的高度專業感。</div>
        </div>
        <div class="job-cta">
            <div class="tag-container">
                <div class="tag">
                    <img src="../assets/images/node.svg" alt="node">20
                </div>
                <Bagde text="藝術設計" type="green" border="square" size="size-xs"></Bagde>
            </div>
            <MyButton text="查看技能地圖" border="pill" size="size-sm"></MyButton>
        </div>
    </div>
</template>

<script setup>
import Bagde from './Bagde.vue';
import MyButton from './MyButton.vue';


</script>

<style scoped>
.search-card{
    width: 100%;
    max-width: 280px;
    margin: 0 auto;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid #757575;
    border-radius: 12px;
    padding: 20px;
    background-color: var(--color-neutral-50);
    transition: all 0.2s ease-in-out;
}
.search-card:hover{
    box-shadow: 1px 1px 12px #c9c9c9 ;
    
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
.line-clamp-4 {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;  
    overflow: hidden;
    word-break: break-all; 
}
</style>