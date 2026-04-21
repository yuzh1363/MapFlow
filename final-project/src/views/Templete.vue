<script setup>
import TempleteCard from '../components/TempleteCard.vue'
import SearchBar from '../components/SearchBar.vue'
import { ref, onMounted, onUnmounted } from 'vue';
import MyButton from '../components/MyButton.vue';

const isSticky = ref(false)
const handleScroll = () => {
  isSticky.value = window.scrollY > 500;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const currentSort = ref('最高分');

const sortOptions = ['最高分', '最新', '最熱門'];

const changeSort = (item) => {
  currentSort.value = item;
};

import { useRoleStore} from '../stores/searchStore';
import { computed } from 'vue';
const templeteStore = useRoleStore();
onMounted(() => {
  // Store 去 Firebase 搬資料
  templeteStore.fetchAllTemplete();
});

// 轉譯資料（如果 Firebase 欄位名跟組件 Props 名稱不一樣）
const searchs = computed(() => {
  return templeteStore.allTempletes.map(templete => ({
    id: templete.id,       // 將文件 ID對應到 title
    intro: templete.intro,
    node: templete.node,
    owner:templete.owner,
    price:templete.price,
    star:templete.star,
    imgurl:templete.imgurl,
  }));
});
</script>

<template>
    <div class="templete-page">
        <div class="main-frame sticky-top">
            <div class="container d-flex flex-column flex-md-row">
                <div class="text-container d-flex flex-column justify-content-center align-items-start">
                    <h1 class="display-4 fw-bold">樣板市集</h1>
                    <p>這是樣板市集介紹</p>
                </div>
                <img src="../assets/images/templeteimg.png" >
            </div>
        </div>
        <div class="root-container  position-relative mt-5" :class="{ 'rounded-5': !isSticky, 'rounded-0': isSticky }">
            <div class="container">
                <div class="d-flex flex-column align-items-end">
                    <SearchBar text="樣板檢索" class="mb-3"></SearchBar>
                    <div class="btn-group mb-3">
                        <button 
                            class="btn dropdown-toggle" 
                            type="button" 
                            id="defaultDropdown" 
                            data-bs-toggle="dropdown" 
                            aria-expanded="false"
                        >
                            {{ currentSort }}
                        </button>

                        <ul class="dropdown-menu" aria-labelledby="defaultDropdown">
                            <li v-for="item in sortOptions" :key="item">
                            <a 
                                class="dropdown-item d-flex justify-content-between align-items-center" 
                                href="#" 
                                @click.prevent="changeSort(item)"
                            >
                                {{ item }}
                                <span v-if="item === currentSort" class="ms-2">✓</span>
                            </a>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div class="content-container">
                    <div class="row d-flex flex-column flex-md-row align-items-center align-items-md-start row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
                        <div class="col d-flex justify-content-center" v-for="template in searchs">
                            <TempleteCard
                             :info="template"></TempleteCard>
                        </div>
                    </div>
                    
                </div>
                <div class="text-center mt-4">
                    <MyButton text="查看更多" type="primary" border="pill" size="size-md"></MyButton>
                </div>
            </div>
        </div>
    </div>
    
</template>



<style scoped>
.searchbar{
    width: 33%;
}
.templete-page{
    background-color: #001354;
}
.main-frame{
    background-color: #001354;
    padding: var(--spacing-10) var(--spacing-24);
    height: 60vh;
    z-index: 1;
    top: 60px;
}
.main-frame>.container{
    display: flex;
    justify-content: space-between;
}
.text-container{
    position: relative;
}
img{
    max-width: 600px;
    min-width: 350px;
    height: auto; 
    object-fit: contain;
    z-index: 1;
}
h1,p{
    color: var(--color-neutral-50);
}
.root-container{
    border-radius: 40px 40px 0 0 ;
    transition: border-radius 0.3s;
    padding: var(--spacing-12) 0;
    background-color: var(--color-bg-primary);
    z-index: 1010;  
    min-height: 100vh;
}
.no-radius {
    border-radius: 0;
}
.btn-group{
    width: 100px;
}
.btn-group>button,.dropdown-menu{
    background-color: var(--color-neutral-900);
    color: var(--color-neutral-50);
}
.dropdown-item{
    color: var(--color-neutral-50);
}
</style>