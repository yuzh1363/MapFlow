<script setup>
  defineEmits(['click-view'])
  import MyButton from './MyButton.vue';
  import Bagde from './Bagde.vue';
</script>

<template>
  <div class="content">
    <div class="header">
      <span class="title">目前技能進度</span>
      <Bagde text="基礎" type="green" border="square" size="size-xs"></Bagde>
    </div>
    
    <div class="main-val">35%</div>
    
    <div class="progress-container">
      <div class="progress-bar" style="width: 35%"></div>
    </div>
    <MyButton text="查看學習記錄" type="green" border="square" size="size-sm" @click="$emit('click-view')"></MyButton>
  </div>
</template>

<style scoped>
.content {
  padding: var(--spacing-6) 39px;
  width: 575px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 40px;
  background: rgba(255, 255, 255, 0.61);
}
.header { 
  display: flex;
  justify-content: space-between; 
  align-items: center; 
  font-size: var(--font-size-sm); 
}
.badge { 
  background: var(--color-support-b); 
  padding: var(--spacing-1) var(--spacing-2); 
  border-radius: var(--radius-base); 
  font-size: var(--font-size-sm); 
  font-family: "Noto Sans TC";
  color: var(--color-text-primary);
}
.title{
  color: var(--color-text-primary);
  font-family: "Noto Sans TC";
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
}
.main-val { 
  color: var(--color-text-primary);
  font-size: var(--font-size-5xl);
  font-family: "Chiron GoRound TC";
  font-weight: var(--font-weight-bold); 
  margin: 10px 0; 
}
.progress-container {
  background: rgba(255, 255, 255, 0.64);
  border: 1px solid var(--color-text-primary);
  height: 13px; 
  border-radius: 100px; 
  margin-bottom: 20px; 
}
.progress-bar { 
  background: var(--color-support-b);
  height: 100%; 
  border-radius: 5px; 
}
</style>