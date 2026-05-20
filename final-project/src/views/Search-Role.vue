<script setup>
import MyButton from '../components/MyButton.vue'
import SearchCard from '../components/SearchCard.vue';
import {  useRoleStore} from '../stores/searchStore';
import { onMounted, computed } from 'vue';


const roleStore = useRoleStore();
onMounted(() => {
  // Store 去 Firebase 搬資料
  roleStore.fetchAllRoles();
});

// 轉譯資料（如果 Firebase 欄位名跟組件 Props 名稱不一樣）
const searchs = computed(() => {
  return roleStore.allRoles.map(role => ({
    id: role.id,
    title: role.id,         // 文件 ID 對應到 title
    intro: role.intro,
    node: role.node,
    type: role.type         
  }));
});
</script>

<template>
    <div class="card-container mt-4 ">
                <div class="row">
                    <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4 " v-for="item in searchs" :key="item.id">
                        <SearchCard :info="item"></SearchCard>
                    </div>
                    
                </div>
                <div class="text-center">
                    <MyButton text="查看更多" type="sec" border="square" size="size-md"></MyButton>
                </div>
            </div>
</template>



<style scoped>

</style>