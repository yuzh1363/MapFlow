<script setup>
import MyButton from '../components/MyButton.vue'
import SearchSkill from '../components/SearchCardSkill.vue'
import { useskillStore } from '../stores/skillStore';
import { storeToRefs } from 'pinia';
import { onMounted, computed } from 'vue';

// const search = usesearchStore()
// const{skills} = storeToRefs(search)

const skillStore = useskillStore();
onMounted(() => {
  // 1. 組件掛載後，叫 Store 去 Firebase 搬資料
  skillStore.fetchAllSkills();
});

// 2. 轉譯資料（如果 Firebase 欄位名跟組件 Props 名稱不一樣）
const searchs = computed(() => {
  return skillStore.allSkills.map(skill => ({
    id: skill.id,
    title: skill.id,        
    content: skill.intro,  
    node: skill.node,
    type: skill.type         
  }));
});
</script>

<template>
    <div class="card-container mt-4">
                <div class="row d-flex">
                    <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4 " v-for="item in searchs" :key="item.id">
                        <SearchSkill :info="item"></SearchSkill>
                    </div>
                </div>
                <div class="text-center">
                    <MyButton text="查看更多" type="sec" border="square" size="size-md"></MyButton>
                </div>
            </div>
</template>



<style scoped>
</style>