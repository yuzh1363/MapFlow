<script setup>

</script>

<template>
    <div class="thoughts-frame px-3 py-3">
        <div class="frame-header d-flex justify-content-between mb-2">
            <div class="text-container">
                <div class="card-title">數位影像基礎與介面導覽</div>
                <div class="card-sectitle">理解點陣圖邏輯與色彩空間</div>
            </div>
            <div class="close-btn">
                <img src="../assets/images/close.svg" alt="close button">
            </div>
        </div>
        <div class="learning-deatail-list d-flex flex-column gap-3">
            <div class="list-item py-3 px-3">
                <div class="item-header d-flex mb-3">
                    <div class="content-block d-flex">
                        <div class="card-content line-clamp-2">
                            整合模擬體驗、學習地圖與外部驗證建立信任履歷，並透過匿名樹洞分擔壓力，解決職涯轉換的認知與心理需求。整合模擬體驗、學習地圖與外部驗證建立信任履歷，並透過匿名樹洞分擔壓力，解決職涯轉換的認知與心理需求。整合模擬體驗、學習地圖與外部驗證建立信任履歷，並透過匿名樹洞分擔壓力，解決職涯轉換的認知與心理需求。
                        </div>
                        <div class="link-btn ">更多</div>
                    </div>
                    <div class="timelike">
                        <p class="day text-center">2d</p>
                        <i class="fa-regular fa-heart"></i>
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
            <!-- 第二組 -->
            <div class="list-item py-3 px-3">
                <div class="item-header d-flex mb-3">
                    <div class="content-block d-flex">
                        <div class="card-content line-clamp-2">
                            整合模擬體驗、學習地圖與外部驗證建立信任履歷，並透過匿名樹洞分擔壓力，解決職涯轉換的認知與心理需求。整合模擬體驗、學習地圖與外部驗證建立信任履歷，並透過匿名樹洞分擔壓力，解決職涯轉換的認知與心理需求。整合模擬體驗、學習地圖與外部驗證建立信任履歷，並透過匿名樹洞分擔壓力，解決職涯轉換的認知與心理需求。
                        </div>
                        <div class="link-btn ">更多</div>
                    </div>
                    <div class="timelike">
                        <p class="day text-center">2d</p>
                        <i class="fa-regular fa-heart"></i>
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
        </div>
    </div>
</template>

<style lang="scss" scoped>
.thoughts-frame {
    background-color: var(--color-neutral-50);
    max-width: 750px;
    border-radius: var(--radius-md);
    border: 2px solid #333;
    height: 800px;
}

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
}
</style>