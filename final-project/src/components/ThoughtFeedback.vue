<script setup>
import MyButton from './MyButton.vue';
import { ref } from 'vue';

const isPublic = ref(true)
</script>
<template>
    <div class="input-section px-3 py-4">
            <div class=" d-flex justify-content-between">
                <h4 class="mb-3">你的心得</h4>
                <div class="form-check form-switch">
                    <lable class="form-check-label ms-2" for="privacyToggle">{{ isPublic ? '私人' : '公開' }}</lable>
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
                </div>
                <div class="mt-2 d-flex justify-content-end gap-3">
                    <button class="my-btn cancel">取消</button>
                    <MyButton text="送出" type="green" border="square" size="size-sm" class="submitbtn"></MyButton>
                </div>
            </form>
        </div>
</template>

<style lang="scss" scoped>
.input-section{
    height: 300px;
    max-width: 500px;
    background-color: var(--color-neutral-50);
    border-radius: var(--radius-md);
    box-shadow: 1px 1px 5px var(--primary-blue-50);

    h4{
        font-weight:var(--font-weight-semibold);
        font-size: var(--font-size-xl);
    }
    textarea:focus{
        box-shadow: none;
        border: 1px solid var(--color-neutral-900);
        
    }
    .inputbtn{

        input{
            height: 50px;
            flex-grow: 1;
            width: 100%;
        }
        input:focus{
            box-shadow: none;
            border: 1px solid var(--color-neutral-900);
        }
        
        
    }
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
.cancel{
    background-color: #ffffff00;
}
</style>