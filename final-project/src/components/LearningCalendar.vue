<script setup>
defineEmits(['click-close'])
</script>

<template>
  <div class="content">
    <button class="close-btn" @click="$emit('click-close')">✕</button>
    
    <div class="title">我的當週學習記錄</div>
    
    <div class="calendar-grid">
      <div class="days">
        <span>Su</span>
        <span>Mo</span>
        <span>Tu</span>
        <span>We</span>
        <span>Th</span>
        <span>Fr</span>
        <span>Sa</span>
      </div>
      <div class="dates">
        <span>7</span>
        <span>8</span>
        <span>9</span>
        <span>10</span>
        <span>11</span>
        <span>12</span>
        <span class="today">13</span>
      </div>
    </div>

    <div class="log-footer">
      理解點陣圖邏輯與色彩空間
    </div>
  </div>
</template>

<style scoped>
.content { 
  padding: var(--spacing-6); 
  width: 100%; 
  position: relative;
  border-radius: 40px;
  border: 1px solid var(--color-neutral-900);
}
.close-btn {
  position: absolute;
  right: 15px;
  top: 15px;
  background: var(--color-support-b);
  border: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.title { font-weight: bold; 
  margin-bottom: var(--spacing-5); 
}
.calendar-grid { 
  text-align: center; 
  margin-bottom: var(--spacing-5); 
}
.days, .dates {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  color: #888;
}
.dates { 
  color: var(--color-text-primary); 
  margin-top: 10px; 
}
.today {
  background: var(--color-primary);
  color: var(--color-bg-primary);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: -5px auto;
}
.log-footer {
  border-top: 1px solid #eee;
  padding-top: 15px;
  text-align: center;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color:var(--color-neutral-800);
}
</style>