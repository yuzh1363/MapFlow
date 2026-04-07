<script setup>
import MyButton from './MyButton.vue';
import ThoughtComment from './ThoughtComment.vue';
import { ref } from 'vue';
defineEmits(['close-offcanvas']);

const isPublic = ref(true)

const clickPublic = ()=>{
    isPublic.value = !isPublic.value
}
</script>

<template>
    <div class="thoughts-frame ">
        <div class="frame-header d-flex justify-content-between mb-2 px-3 py-3">
            <div class="text-container">
                <h2 class="card-title">數位影像基礎與介面導覽</h2>
                <div class="card-sectitle">理解點陣圖邏輯與色彩空間</div>
            </div>
            <div class="close-btn" @click="$emit('close-offcanvas')">
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
            <div class=" d-flex justify-content-between">
                <h4 class="mb-3">你的心得</h4>
                <div class="form-check form-switch">
                    <lable class="form-check-label ms-2" for="privacyToggle">{{ isPublic ? '公開' : '非公開' }}</lable>
                    <input class="form-check-input" type="checkbox" role="switch" id="privacyToggle" v-model="isPublic">
                </div>
            </div>
            
            <form>
                <div class="mb-3">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="說說你遇到的瓶頸或想法"></textarea>
                    <span style="color: var(--color-text-secondary);">請輸入10-100字心得</span>
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
    display: flex; 
    flex-direction: column;
    height: 100vh;
    background-color: var(--color-neutral-50);
    max-width: 750px;
    border-top-left-radius: var(--radius-md);
    border-bottom-left-radius: var(--radius-md);
    border: 1px solid #333;
    width: 100%; 
    height: 100%;
    .frame-header {
        flex-shrink: 0;
    }
    .learning-deatail-list{
        flex-grow: 1;
        overflow-y: auto;
        &::-webkit-scrollbar { width: 6px; }
        &::-webkit-scrollbar-thumb { background: #ccc; border-radius: 10px; }
    }
}
.input-section{
    height: 280px;
    width: 100%;
    background-color: var(--color-neutral-50);
    border-top: 1px solid var(--color-neutral-600);
    border-bottom-left-radius: var(--radius-md);
    border-bottom-right-radius: var(--radius-md);

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
.form-check-input:checked {
    background-color: var(--color-success);
    border:none;
}
.form-check-input:focus {
    // background-color: #fff;
    box-shadow: none
}
.form-switch .form-check-input {
    width: 2.5em;
    height: 1.25em;
    cursor: pointer;
}
</style>