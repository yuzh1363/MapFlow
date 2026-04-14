<template>
    <div class="search-card" @click="goToMap">
        <div class="job-info">
            <div class="card-title">{{info?.id}}</div>
            <div class="card-content line-clamp-4">{{info?.intro}}</div>
        </div>
        <div class="job-cta">
            <div class="tag-container">
                <div class="tag">
                    <img src="../assets/images/node.svg" alt="node">{{info?.node}}
                </div>
                <Badge :text="info.type" type="green" size="size-xs" border="square"></Badge>
            </div>
            <MyButton 
                :text="isSkill ? '查看技能地圖' : '查看角色地圖'" 
                border="pill" 
                size="size-sm"
                @click.stop="goToMap"
            ></MyButton>
        </div>
    </div>
</template>

<script setup>
import Badge from './Bagde.vue'
import MyButton from './MyButton.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps({
    info: {
        type: Object,
        required: true,
        default: () => ({})
    },
    isSkill: {
        type: Boolean,
        default: false
    }
})
const goToMap = () => {
    if (props.isSkill || props.info.id === 'Photoshop') {
        router.push('/photoshop');
    } else {
        router.push('/role-track');
    }
}
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
    cursor: pointer;
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