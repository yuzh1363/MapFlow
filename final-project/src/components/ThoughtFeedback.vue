<script setup>
import MyButton from './MyButton.vue';
import { ref } from 'vue';

const isPublic = ref(true)

defineEmits(['close']); // 定義關閉事件

const handleSend = () => {
  // 處理送出邏輯
  console.log('已送出');
};
</script>
<template>
  <div class="modal-content border-0 input-section">
    <div class="modal-header border-0 px-4 pt-4 pb-0 d-flex justify-content-between align-items-center">
      <h4 class="mb-0">你的心得</h4>
      <div class="form-check form-switch">
        <input class="form-check-input me-1" type="checkbox" role="switch" id="privacyToggle" v-model="isPublic">
        <label class="form-check-label me-2" for="privacyToggle">
          {{ isPublic ? '公開' : '非公開' }}
        </label>
      </div>
    </div>

    <div class="modal-body px-4">
      <form>
        <div class="mb-3">
          <textarea class="form-control" rows="3" placeholder="說說你遇到的瓶頸或想法"></textarea>
          <span style="font-size: 14px; color: var(--color-text-secondary);">請輸入 10-100 字心得</span>
        </div>
        <div class="inputbtn">
          <input class="form-control" type="text" placeholder="#課程 #單元">
        </div>
      </form>
    </div>

    <div class="modal-footer border-0 px-4 pb-4 pt-0 d-flex justify-content-end gap-3">
      <button class="my-btn cancel" @click="$emit('close')">取消</button>
      <MyButton @click="handleSend" text="送出" type="green" border="square" size="size-sm"></MyButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.input-section{
    height: 350px;
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