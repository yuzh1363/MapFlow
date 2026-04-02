<script setup>
import MyButton from '../components/MyButton.vue'
import SearchCard from '../components/SearchCard.vue';
</script>

<template>
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
</template>



<style scoped>
.card-container,.tab{
    padding: 0 var(--spacing-24);
}
</style>