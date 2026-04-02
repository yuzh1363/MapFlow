<script setup>
import SearchCard from '../components/SearchCard.vue';
import Badge from '../components/Bagde.vue'
import MyButton from '../components/MyButton.vue'
import gsap from 'gsap'
import { ref, onMounted } from 'vue'

// 
onMounted(() => {
    const tl = gsap.timeline({
        defaults:{
            ease: "sine.inOut"
        }
    })
    // 綠：左至右平移
    tl.to(".green", {
        x: 20,
        duration: 2,

    }, 0);
    // 橘色：右至左平移
    tl.to(".orange", {
        x: -10,
        duration: 2,

    }, 0);
    // 藍色：左至右
    tl.to(".blue", {
        x: 10,
        scale:1.15,
        duration: 2,
    }, 0);
    // MapFlow：下至上
    gsap.from(".mapflow-logo",{
        y:100,
        opacity:0,
        duration:1.5,
        ease:"power3.out",
        delay: 0.5
    })
})

</script>

<template>
    <div class="hero-section">
        <div class="hero-bg">
            <img class="layer green" src="../assets/images/green_bg.png" alt="green">
            <img class="layer orange" src="../assets/images/orange_bg.png" alt="orange">
            <img class="layer blue" src="../assets/images/blue_bg.png" alt="blue">
        </div>  
        <div class="hero-content">
            <img class="mapflow-logo" src="../assets/images/BrandName_bg.svg" alt="MapFlow">
        </div>
    </div>
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
                                <div class="col">
                                    <SearchCard></SearchCard>
                                </div>
                                <div class="col">
                                    <SearchCard></SearchCard>
                                </div>
                                <div class="col">
                                    <SearchCard></SearchCard>
                                </div>
                                <div class="col">
                                    <SearchCard></SearchCard>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="container-fluid">
                            <div class="row flex-nowrap row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 custom-carousel-row">
                                <div class="col">
                                    <SearchCard></SearchCard>
                                </div>
                                <div class="col">
                                    <SearchCard></SearchCard>
                                </div>
                                <div class="col">
                                    <SearchCard></SearchCard>
                                </div>
                                <div class="col">
                                    <SearchCard></SearchCard>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="container-fluid">
                            <div class="row flex-nowrap row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 custom-carousel-row">
                                <div class="col">
                                    <SearchCard></SearchCard>
                                </div>
                                <div class="col">
                                    <SearchCard></SearchCard>
                                </div>
                                <div class="col">
                                    <SearchCard></SearchCard>
                                </div>
                                <div class="col">
                                    <SearchCard></SearchCard>
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
                    <MyButton text="角色" border="square" size="size-sm" class="me-2"></MyButton>
                    <MyButton text="技能" type="yellow" border="square" size="size-sm"></MyButton>
                </div>
            </div>
            <div class="card-container mt-4">
                <div class="row d-flex">
                    <div class="col-10 col-sm-6 col-md-4 mb-4">
                        <SearchCard></SearchCard>
                    </div>
                    <div class="col-10 col-sm-6 col-md-4 mb-4">
                        <SearchCard></SearchCard>
                    </div>
                    <div class="col-10 col-sm-6 col-md-4 mb-4">
                        <SearchCard></SearchCard>
                    </div>
                    <div class="col-10 col-sm-6 col-md-4 mb-4">
                        <SearchCard></SearchCard>
                    </div>
                    <div class="col-10 col-sm-6 col-md-4 mb-4">
                        <SearchCard></SearchCard>
                    </div>
                    <div class="col-10 col-sm-6 col-md-4 mb-4">
                        <SearchCard></SearchCard>
                    </div>
                    <div class="col-10 col-sm-6 col-md-4 mb-4">
                        <SearchCard></SearchCard>
                    </div>
                    <div class="col-10 col-sm-6 col-md-4 mb-4">
                        <SearchCard></SearchCard>
                    </div>
                </div>
                <div class="text-center">
                    <MyButton text="查看更多" type="yellow" border="pill" size="size-md"></MyButton>
                </div>
            </div>

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
    width: 800px;
    margin-bottom: 2rem;
    /* 讓瀏覽器提前準備 */
    will-change: transform, opacity;
}

.container{
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
.card-container,.tab{
    padding: 0 var(--spacing-24);
}
</style>