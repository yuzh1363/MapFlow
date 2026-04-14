<script setup>
import MyButton from './MyButton.vue'

const props = defineProps({
  title: {
    type: String,
    default: '職位或技能名稱'
  },
  // 'yellow' (角色) 或 'primary' (技能)
  type: {
    type: String,
    default: 'primary' 
  },
  progress: {
    type: String,
    default: '0%'
  },
  countText: {
    type: String,
    default: '0 / 0 已完成'
  }
})
</script>

<template>
  <div class="learning-card">
    <div class="card-title">{{ title }}</div>
    
    <div class="content-container">
      <div class="progress-section">
        <div class="status-info">
          <div class="icon-wrapper">
            <img src="../assets/images/Dot.svg" alt="">
          </div>
          <p class="count-text">{{ countText }}</p>
        </div>
        
        <div class="progress-bar-bg">
          <div class="progress-indicator" :style="{ width: progress }"></div>
        </div>
      </div>

      <RouterLink to="/role-detail"><MyButton text="查看詳細" :type="type" border="square" size="size-sm"></MyButton></RouterLink> 
    </div>
  </div>
</template>

<style lang="scss" scoped>
.learning-card {
  width: 100%;
  max-width: 500px; 
  background-color: var(--color-bg-primary); /* */
  padding: var(--spacing-6) var(--spacing-5); /* */
  border-radius: var(--radius-md); /* */
  box-shadow: var(--shadow-md); /* */
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-4px);
  }
  .card-title {
    font-size: var(--font-size-xl); /* */
    font-weight: var(--font-weight-semibold); /* */
    color: var(--color-neutral-900);
    text-align: left;
    font-family: "Noto Sans TC", sans-serif;
  }

  .content-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: var(--spacing-4);
  }

  .progress-section {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3);

    .status-info {
      display: flex;
      align-items: center;
      gap: var(--spacing-2);

      .icon-wrapper {
        display: flex;
        align-items: center;
        svg {
          transform: rotate(-90deg); 
        }
      }

      .count-text {
        font-size: var(--font-size-sm);
        color: var(--color-neutral-700);
        margin: 0;
        font-family: "Noto Sans TC", sans-serif;
      }
    }

    .progress-bar-bg {
      height: 12px;
      background-color: var(--color-neutral-200); /* */
      border-radius: var(--radius-full);
      overflow: hidden; 
      
      .progress-indicator {
        height: 100%;
        background-color: var(--color-support-b); /* 使用你風格統一的綠色 */
        border-radius: var(--radius-full);
        transition: width 0.6s cubic-bezier(0.34, 1.56, 0.64, 1); /* 讓進度增加時帶點彈性效果 */
      }
    }
  }
}
</style>