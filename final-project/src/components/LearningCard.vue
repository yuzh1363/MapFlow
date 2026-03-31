<script setup>
  import MyButton from './MyButton.vue'
</script>
<template>
  <div class="learning-card">
    <div class="title">UI/UX 設計師</div>
    
    <div class="content-container">
      <div class="progress-section">
        <div class="status-info">
          <div class="icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none">
              <path d="M13.0084 14.9287V4.75L11.2743 4.75V8.61799L2.60357 8.61799V14.9287L4.33772 14.9287V10.3823L11.2743 10.3823V14.9287L13.0084 14.9287Z" fill="#FED94A"/>
              <ellipse cx="12.2152" cy="3.39292" rx="3.39292" ry="3.3929" transform="rotate(90 12.2152 3.39292)" fill="#FED94A"/>
              <ellipse cx="12.2152" cy="15.6068" rx="3.39292" ry="3.3929" transform="rotate(90 12.2152 15.6068)" fill="#FED94A"/>
              <ellipse cx="3.3929" cy="15.6068" rx="3.39292" ry="3.3929" transform="rotate(90 3.3929 15.6068)" fill="#FED94A"/>
            </svg>
          </div>
          <p class="count-text">10 / 30 已完成</p>
        </div>
        
        <div class="progress-bar-bg">
          <div class="progress-indicator" style="width: 33.3%"></div>
        </div>
      </div>

      <MyButton text="查看詳細" type="primary" border="square" size="size-sm"></MyButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.learning-card {
  width: 500px;
  background-color: var(--color-bg-primary, #fff);
  padding: 24px 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 16px;

  .title {
    font-size: 24px;
    font-weight: 600;
    color: #000;
    text-align: left;
  }

  .content-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .progress-section {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-width: 300px;

    .status-info {
      display: flex;
      align-items: center;
      gap: 8px;

      .icon-wrapper {
        display: flex;
        align-items: center;
        svg {
          transform: rotate(-90deg);
        }
      }

      .count-text {
        font-size: 16px;
        color: #333;
        margin: 0;
      }
    }

    .progress-bar-bg {
      height: 12px;
      background-color: #e5e5e5;
      border-radius: 6px;
      overflow: hidden; /* 確保進度條不會超出圓角 */
      
      .progress-indicator {
        height: 100%;
        background-color: #a3d14f; /* 圖片中的綠色 */
        border-radius: 6px;
      }
    }
  }
}
</style>