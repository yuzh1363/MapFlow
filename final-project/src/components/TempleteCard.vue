<template>
    <div class="templete-card">
        <div class="card-img" style="width: 100%; height: 150px;">
            <img :src="`${baseUrl}images/${info.imgurl}`" alt="" style="width: 100%; height: 150px;">
        </div>
        <div class="card-container">
            <div class="content-container mb-3">
                <div class="header-container">
                    <div class="card-title">{{info.id}}</div>
                    <div class="d-flex">
                        <div class="user-img me-1">w</div>
                        <p class="card-content">{{info.owner}}</p>
                    </div>
                </div>
                <div class="card-content line-clamp-4">{{info.intro}}</div>
            </div>
            <div class="tags d-flex justify-content-between mb-3">
                <div class="tag card-tag">
                    <img src="../assets/images/node.svg" alt="node">
                    {{info.node}}
                </div>
                <div class="tag card-tag">
                    <img src="../assets/images/user.svg" alt="">
                    2
                </div>
                <div class="tag card-tag">
                    <img src="../assets/images/star.svg" alt="">
                    {{ info.star }}
                </div>
            </div>
            <div class="purchase">
                <span style="color: var(--primary-blue-500);" class="fs-5 me-3">NT${{info.price}}</span>
                <RouterLink to="/cart">
                    <button><i class="fa-solid fa-cart-plus"></i></button>
                </RouterLink>
                
            </div>
        </div>
    </div>
</template>

<script setup>
const prop  = defineProps({
    info:{
        type: Object,
        default: ()=>({})
    }
})
const baseUrl = import.meta.env.BASE_URL;
</script>

<style scoped>
.templete-card{
    width: 100%;
    max-width: 300px;
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
.user-img{
    background-color: #6c8fe1;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}
button{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--primary-blue-500);
    border: none;
    
    i{
        color: white;
    }
    &:hover{
        background-color: var(--primary-blue-700);
    }
}
</style>