<template>
    <div class="input-card">
        <form>
            <div class="mb-3">
                <input class="form-control" type="text" placeholder="輸入你的職業" aria-label="default input example">
            </div>
            <div class="mb-3">
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="說說你遇到的問題"></textarea>
            </div>
            <div class="d-flex justify-content-end">
                <MyButton text="送出" type="green" border="square" size="size-sm" ></MyButton>
            </div>
            
        </form>
    </div>
</template>

<script setup>
import MyButton from './MyButton.vue'
</script>

<style scoped>
.input-card{
    width:500px ;
    min-width: 300px;
    height: 250px;
    padding: 32px 24px;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 1px 1px 12px #dfdfdf ;
}

</style>