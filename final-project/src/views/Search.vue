<script setup>
import SearchCard from '../components/SearchCard.vue';
</script>

<template>
    <div style="height: 300px; background-color: #333;"></div>
    <div class="main-container">
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
</style>