<script setup>
import SearchCard from '../components/SearchCard.vue';
import Badge from '../components/Bagde.vue'
import MyButton from '../components/MyButton.vue'
import { useRouter } from 'vue-router';
import { usesearchStore } from '../stores/searchStore';
import { computed } from 'vue';
const search = usesearchStore()
const router = useRouter();

const carouselList = computed(() => {
  return search.searchs.slice(0, 4);
});

const carouselList2 = computed(() => {
  return search.searchs.slice(4, 8);
});

const carouselLis3 = computed(() => {
  return search.searchs.slice(8, 12);
});
</script>

<template>
    <div style="height: 300px; background-color: #333;"></div>
    <div class="container">
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
                    <div class="carousel-item active">
                        <div class="container-fluid">
                            <div class="row flex-nowrap row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 custom-carousel-row">
                                <div class="col" v-for="item in carouselList" :key="item.id">
                                    <SearchCard :info="item"></SearchCard>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="container-fluid">
                            <div class="row flex-nowrap row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 custom-carousel-row">
                                <div class="col" v-for="item in carouselList2" :key="item.id">
                                    <SearchCard :info="item"></SearchCard>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="container-fluid">
                            <div class="row flex-nowrap row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 custom-carousel-row">
                                <div class="col" v-for="item in carouselLis3" :key="item.id">
                                    <SearchCard :info="item"></SearchCard>
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
        <div class="container tags-container px-5 mb-5">
            <h2>熱門技能</h2>
            <div class="tag-list-group f-flex flex-column">
                <div class="tags-list d-flex justify-content-evenly mb-3">
                    <Badge text="Photoshop" type="tag" border="pill" size="size-sm"></Badge>
                    <Badge text="Illustrator" type="tag" border="pill" size="size-sm"></Badge>
                    <Badge text="After Effect" type="tag" border="pill" size="size-sm"></Badge>
                    <Badge text="Figma" type="tag" border="pill" size="size-sm"></Badge>
                    <Badge text="Sketch" type="tag" border="pill" size="size-sm"></Badge>
                    <Badge text="InDesign" type="tag" border="pill" size="size-sm"></Badge>
                </div>
                <div class="tags-list d-flex justify-content-evenly mb-3">
                    <Badge text="HTML5" type="tag" border="pill" size="size-sm"></Badge>
                    <Badge text="CSS 3" type="tag" border="pill" size="size-sm"></Badge>
                    <Badge text="Javascript" type="tag" border="pill" size="size-sm"></Badge>
                    <Badge text="Vue.js" type="tag" border="pill" size="size-sm"></Badge>
                    <Badge text="React" type="tag" border="pill" size="size-sm"></Badge>
                    <Badge text="Java" type="tag" border="pill" size="size-sm"></Badge>
                    <Badge text="C#" type="tag" border="pill" size="size-sm"></Badge>
                    <Badge text="Gemini" type="tag" border="pill" size="size-sm"></Badge>
                    <Badge text="Claude" type="tag" border="pill" size="size-sm"></Badge>
                </div>
                <div class="tags-list d-flex justify-content-evenly">
                    <Badge text="Adobe XD" type="tag" border="pill" size="size-sm"></Badge>
                    <Badge text="User Research" type="tag" border="pill" size="size-sm"></Badge>
                    <Badge text="Design Thinking" type="tag" border="pill" size="size-sm"></Badge>
                    <Badge text="色彩學" type="tag" border="pill" size="size-sm"></Badge>
                    <Badge text="Wireframe" type="tag" border="pill" size="size-sm"></Badge>
                    <Badge text="人機互動原則" type="tag" border="pill" size="size-sm"></Badge>
                </div>
            </div>
            
        </div>
        <div class="container overview-container px-5 mb-5">
            <div class="tab d-flex justify-content-between">
                <h2>總覽</h2>
                <div>
                    <RouterLink to="/"><MyButton text="角色" border="square" size="size-sm" class="me-2"></MyButton></RouterLink>
                    <RouterLink to="/skill"><MyButton text="技能" type="yellow" border="square" size="size-sm"></MyButton></RouterLink>
                </div>
            </div>
            <RouterView></RouterView>

        </div>
    </div>


</template>

<style scoped>
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
.tab{
    padding: 0 var(--spacing-24);
}
</style>