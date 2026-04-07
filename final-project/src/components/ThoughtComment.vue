<script setup>
import { ref } from 'vue';

const isExpand = ref(false)

const expandclick = ()=>{
    isExpand.value = !isExpand.value
}

const isLike = ref(true)
const likeclick = ()=>{
    isLike.value = !isLike.value
}
</script>
<template>
    <div class="list-item py-3 px-3">
                <div class="item-header d-flex mb-3">
                    <div class="content-block d-flex">
                        <div class="card-content" :class="{ 'line-clamp-2': !isExpand }">
                            整合模擬體驗、學習地圖與外部驗證建立信任履歷，並透過匿名樹洞分擔壓力，解決職涯轉換的認知與心理需求。整合模擬體驗、學習地圖與外部驗證建立信任履歷，並透過匿名樹洞分擔壓力，解決職涯轉換的認知與心理需求。整合模擬體驗、學習地圖與外部驗證建立信任履歷，並透過匿名樹洞分擔壓力，解決職涯轉換的認知與心理需求。
                        </div>
                        <div class="link-btn " @click="expandclick">{{ isExpand ? '收起' : '更多' }}</div>
                    </div>
                    <div class="timelike">
                        <p class="day text-center">2d</p>
                        <i class="fa-regular fa-heart" @click="likeclick" v-if="isLike"></i>
                        <i class="fa-solid fa-heart like" @click="likeclick"  v-else></i>
                    </div>
                </div>
                <div class="item-tag d-flex justify-content-between align-items-center">
                    <div class="tag-content d-flex gap-3">
                        <p class="card-tag">#注意到畫布問題導致失真</p>
                        <p class="card-tag">#3-1</p>
                    </div>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
            </div>
</template>



<style lang="scss" scoped>
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    word-break: break-all;
    line-height: 1.5;
    max-height: 3em;
}

.list-item {
    border-radius: var(--radius-md);
    box-shadow: 1px 1px 5px #c9c9c9;
}

.card-content {
    // border: 2px solid;
    width: 90%;
}
.link-btn {
    color: var(--primary-blue-500);
    width: 10%;
    display: flex;
    align-items: end;
    cursor: pointer;
}

.day {
    font-size: var(--font-size-sm);
    color: var(--color-neutral-500);
}

.timelike {
    display: flex;
    flex-direction: column;
}

i {
    font-size: var(--font-size-xl);
    cursor: pointer;
}
.like{
    color: var(--color-error);
}
</style>