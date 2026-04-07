<script setup>
import MyButton from './MyButton.vue';
import ThoughtComment from './ThoughtComment.vue';


</script>

<template>
    <div class="thoughts-frame ">
        <div class="frame-header d-flex justify-content-between mb-2 px-3 py-3">
            <div class="text-container">
                <h2 class="card-title">數位影像基礎與介面導覽</h2>
                <div class="card-sectitle">理解點陣圖邏輯與色彩空間</div>
            </div>
            <div class="close-btn">
                <img src="../assets/images/close.svg" alt="close button">
            </div>
        </div>
        <div class="learning-deatail-list d-flex flex-column gap-3 px-3 py-1">
            <ThoughtComment></ThoughtComment>
            <ThoughtComment></ThoughtComment>
            <ThoughtComment></ThoughtComment>
            <ThoughtComment></ThoughtComment>
            <ThoughtComment></ThoughtComment>
        </div>
        <div class="input-section px-3 py-4">
            <h4 class="mb-3">你的心得</h4>
            <form>
                <div class="mb-3">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="說說你遇到的瓶頸或想法"></textarea>
                </div>
                <div class="inputbtn">
                    <input class="form-control" type="text" placeholder="#課程 #單元" aria-label="default input example">
                    <MyButton text="送出" type="green" border="square" size="size-sm" class="submitbtn"></MyButton>
                </div>
            </form>
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
    position: relative;

    .learning-deatail-list{
        height: 450px;
        overflow-y: auto;
    }
}
.input-section{
    height: 250px;
    width: 100%;
    background-color: var(--color-neutral-50);
    border-top: 1px solid var(--color-neutral-600);
    border-bottom-left-radius: var(--radius-md);
    border-bottom-right-radius: var(--radius-md);
    position: absolute;
    bottom: 0;
    left: 0;

    h4{
        font-weight:var(--font-weight-semibold);
        font-size: var(--font-size-xl);
    }
    textarea:focus{
        box-shadow: none;
        border: 1px solid var(--color-neutral-900);
        
    }
    .inputbtn{
        display: flex;
        align-items: center;
        gap: 8px;

        input{
            height: 50px;
            flex-grow: 1;
            width: 100%;
        }
        input:focus{
            box-shadow: none;
            border: 1px solid var(--color-neutral-900);
        }
        .submitbtn{
            width: 10%;
        }
        
    }
}
.close-btn{
    cursor: pointer;
}
</style>