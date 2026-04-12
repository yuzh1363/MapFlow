<script setup>
import MyButton from '../components/MyButton.vue'
import SearchSkill from '../components/SearchCardSkill.vue'
import { usesearchStore } from '../stores/searchStore';
import { storeToRefs } from 'pinia';

const search = usesearchStore()
const{skills} = storeToRefs(search)
</script>

<template>
    <div class="card-container mt-4">
                <div class="row d-flex">
                    <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4 " v-for="item in skills" :key="item.id">
                        <SearchSkill :info="item"></SearchSkill>
                    </div>
                </div>
                <div class="text-center">
                    <MyButton text="查看更多" type="yellow" border="pill" size="size-md"></MyButton>
                </div>
            </div>
</template>



<style scoped>
</style>