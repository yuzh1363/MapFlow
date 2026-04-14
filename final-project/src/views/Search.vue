<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import gsap from 'gsap'
import Badge from '../components/Bagde.vue'
import MyButton from '../components/MyButton.vue'
import SearchBar from '../components/SearchBar.vue'
import SearchIcon from '../components/SearchIcon.vue'
import SearchCard from '../components/SearchCard.vue'

//Hero-section動畫
const searchSection = ref(null)

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    const tl = gsap.timeline({
        defaults: {
            ease: "sine.inOut"
        }
    })
    // 綠：左至右平移
    tl.to(".green", {
        x: 20,
        scale: 1.05,
        duration: 2,

    }, 0);
    // 橘色：右至左平移
    tl.to(".orange", {
        x: -15,
        scale: 1.05,
        duration: 1.5,

    }, 0);
    // 藍色：左至右
    tl.to(".blue", {
        x: 10,
        scale: 1.05,
        duration: 1,
    }, 0);
    // MapFlow：下至上
    gsap.from(".mapflow-logo", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.5
    })
})
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})

//向下滾動hero慢慢變透明
const heroOpacity = ref(1)
const handleScroll = () => {
    //捲動高度
    const scrollTop = window.scrollY
    //捲動多少距離後完全透明
    const fadeDistance = window.innerHeight * 0.8
    //計算透明度
    let newOpacity = 1 - (scrollTop / fadeDistance)
    heroOpacity.value = Math.max(newOpacity, 0)
}

// 從資料庫撈取技能資料
import { useskillStore } from '../stores/skillStore';
const skillStore = useskillStore();
onMounted(() => {
    skillStore.fetchAllSkills();
});

const searchs = computed(() => {
    return skillStore.allSkills.map(skill => ({
        id: skill.id,
        title: skill.id,
        content: skill.intro,
        node: skill.node,
        type: skill.type
    }));
});

// 從資料庫搜尋與關鍵字相符的資料(含名稱、type)
import { collection, doc, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
const finalresults = ref([]);
// 判斷是否按下搜尋，false則不顯示搜尋結果區塊
const isSearch = ref(false);
const handleSearch = async (keywordfromChild) => {

    const roleSnapshot = await getDocs(collection(db, "roles"));
    const skillSnapshot = await getDocs(collection(db, "skills"));

    const roleData = roleSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        category: '職位'
    }));

    const skillData = skillSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        category: '技能'
    }));
    // 將角色與技能陣列整合
    const allData = [...roleData, ...skillData];
    // 從allData過濾，標題或type含關鍵字即呈現在畫面上
    finalresults.value = allData.filter(item => {
        return item.id.includes(keywordfromChild) || item.type.includes(keywordfromChild);
    });
    // 搜尋後isSearch為真，搜尋結果區塊會打開
    isSearch.value = true;
}


import {useRoleStore} from '../stores/searchStore';
const roleStore = useRoleStore();
const roleGroups = computed(() => {
  // 1. 先從 Pinia 拿到原始的 roles 資料
  const data = roleStore.allRoles; 
  
  const groups = [];
  // 2. 使用 for 迴圈，每次跳 4 格
  for (let i = 0; i < data.length; i += 4) {
    // 每次切下 4 筆資料，塞進 groups 陣列中
    groups.push(data.slice(i, i + 4));
  }
  
  return groups; // 回傳結果會是 [[role1~4], [role5~8], ...]
});
</script>

<template>
    <div class="hero-section" :style="{ opacity: heroOpacity }">
        <div class="hero-bg">
            <img class="layer green" src="../assets/images/green_bg.png" alt="green">
            <img class="layer orange" src="../assets/images/orange_bg.png" alt="orange">
            <img class="layer blue" src="../assets/images/blue_bg.png" alt="blue">
        </div>
        <div class="hero-content">
            <img class="mapflow-logo" src="../assets/images/BrandName_bg.svg" alt="MapFlow">
        </div>
    </div>
    <div class="search-section" ref="searchSection">
        <div class="search-txt">
            <h1 class="search-title">開啟專業學習地圖</h1>
            <p class="search-subtitle">超過500+種職業角色與核心技能，打造專屬你的成長學習路徑</p>
        </div>
        <SearchBar text="角色學習、技能樹檢索" class="search-bar" color="blue" @search="handleSearch"></SearchBar>
    </div>

    <!-- 懸浮搜尋按鈕組件 -->
    <SearchIcon targetSelector=".search-section" />

    <div class="container">
        <!-- 搜尋結果區塊 -->
        <div v-if="isSearch">
            <div class="container" v-if="finalresults.length > 0">
                <h2>搜尋結果</h2>
                <div class="row ">
                    <SearchCard v-for="role in finalresults" :key="role.id" :info="role" class="mb-3"></SearchCard>
                </div>
            </div>
            <h2 v-else class="text-center">找不到相關課程喔！</h2>
        </div>
        <!-- 推薦角色區塊 -->
        <div class="container px-5 mb-5">
            <h2>推薦角色</h2>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                        class="active" aria-current="true" aria-label="Slide 1"
                        style="color: var(--color-neutral-900);"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2" style="color: var(--color-neutral-900);"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3" style="color: var(--color-neutral-900);"></button>
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                    <i class="fa-solid fa-circle-arrow-left"
                        style="font-size: 2rem; color: var(--color-neutral-900);"></i>
                    <span class="visually-hidden">Previous</span>
                </button>
                <div class="carousel-inner">
                    <div
                    v-for="(groups,index) in roleGroups"
                    :key="index"
                    :class="['carousel-item',{active:index === 0}]">
                        <div class="container-fluid">
                            <div
                                class="row flex-nowrap row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 custom-carousel-row">
                                <div class="col" v-for="role in groups" :key="role.id">
                                    <SearchCard :info="role"></SearchCard>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                    <i class="fa-solid fa-circle-arrow-right"
                        style="font-size: 2rem; color: var(--color-neutral-900);"></i>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <!-- 熱門技能區塊 -->
        <div class="container tags-container px-5 mb-5">
            <h2>熱門技能</h2>
            <div class="tag-list-group f-flex flex-column mt-4">
                <div class="tags-list d-flex justify-content-evenly mb-3 flex-wrap">
                    <Badge :text="item.title" type="tag" border="pill" size="tag-size" v-for="item in searchs"
                        :key="item.id"></Badge>
                </div>
            </div>

        </div>
        <!-- 總覽區塊 -->
        <div class="container overview-container px-5 mb-5">
            <div class="tab d-flex justify-content-between">
                <h2>總覽</h2>
                <div>
                    <RouterLink to="/">
                        <MyButton text="角色" border="square" size="size-sm" class="me-2"></MyButton>
                    </RouterLink>
                    <RouterLink to="/skill">
                        <MyButton text="技能" type="sec" border="square" size="size-sm"></MyButton>
                    </RouterLink>
                </div>
            </div>
            <RouterView></RouterView>

        </div>
    </div>


</template>

<style scoped>
.hero-section {
    position: relative;
    height: 80vh;
    background-color: #333;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    padding-top: 70px;
    border-radius: 0 0 100px 100px;
}

.hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}

.layer {
    position: absolute;
    width: 100%;
    bottom: 0;
    object-fit: cover;
}

.green {
    z-index: 2;
    left: -10%;
    bottom: 25%;
}

.orange {
    z-index: 3;
    right: -10%;
    bottom: 25%;
}

.blue {
    overflow: visible;
    z-index: 4;
    left: 0%;
    bottom: 0%;
}

.hero-content {
    position: relative;
    z-index: 10;
    text-align: center;
    color: white;
    margin-top: -50px;
}

.mapflow-logo {
    width: 100%;
    margin-bottom: 2rem;
    /* 讓瀏覽器提前準備 */
    will-change: transform, opacity;
}

.search-bar {
    width: 560px;
    margin-top: 20px;
}

.search-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: auto;
    max-width: 1000px;
    padding: 40px 20px;
    position: relative;
    margin: -150px auto 0 auto;
    z-index: 20;
    border-radius: 9999px;
    background: rgba(175, 202, 219, 0.20);
    /* 毛玻璃效果 */
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
}

.search-title {
    color: #FFF;
    text-align: center;
    font-family: "Noto Sans TC";
    font-size: 48px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.search-subtitle {
    color: #FFF;
    font-family: "Noto Sans TC";
    font-size: 20px;
    font-style: normal;
    /* font-weight: 500; */
    line-height: 24px;
    letter-spacing: 0.5px;
}

.search-bar {
    width: 600px;
    margin-top: 20px;
}

.search-btn {
    width: 40px;
    height: 40px;
    border-radius: var(--radius-sm);
    border: none;
}

.container {
    margin-top: 40px;
}

#carouselExampleIndicators {
    position: relative;
    padding: 0 60px;
}

.carousel-item .row {
    margin-left: 0;
    margin-right: 0;
}

.carousel-control-prev {
    left: -10px;
    width: 60px;
}

.carousel-control-next {
    right: -10px;
    width: 60px;
}

.carousel-control-prev:hover,
.carousel-control-next:hover {
    opacity: 0.8;
}

.carousel-indicators {
    bottom: -40px;
    filter: invert(1);
}

.custom-carousel-row {
    display: flex;
    flex-wrap: nowrap;
    overflow: hidden;
}

.custom-carousel-row .col {
    flex: 0 0 auto;
}
.tags-list {
    gap: 12px 8px;
}
</style>