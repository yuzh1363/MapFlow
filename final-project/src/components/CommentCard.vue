<template>
  <div class="comment-card">
    <div class="date-container">
      <h2>26</h2>
      <h2>Mar</h2>
    </div>
    <div class="comment-container">
      <div class="card-title">
        <div class="title">Photoshop</div>
        <div class="subtitle"> > 數位影像基礎與介面導覽</div>
      </div>
      <p class="content">很多新手會沒注意到畫布問題導致失真，印刷務必設為300DPI，網頁為72DPI很多新手會沒注意到畫布問題導致失真，印刷務必設為300DPI，網頁為72DPI很多新手會沒注意到畫布問題導致失真，印刷務必設為300DPI，網頁為72DPI很多新手會沒注意到畫布問題導致失真，</p>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  .comment-card{
    width: 479px;
    height: auto;
    border: 1px solid var(--color-neutral-200);
    background-color: var(--color-bg-primary);
    border-radius: var(--radius-md);
    box-shadow: 0 0 6.5px 0 rgba(0, 0, 0, 0.20);
    display: flex;
    flex-direction: row;
    padding: var(--spacing-5) var(--spacing-4);
    gap: var(--spacing-4);
    .date-container{
      display: flex;
      padding: var(--spacing-8, 8px);
      flex-direction: column;
      align-items: center;
      align-self: stretch;
      border-radius: var(--radius-8, 8px);
      color: var(--color-primary);
      text-align: center;
      font-family: "Chiron GoRound TC";
      font-size: 32px;
      font-style: normal;
      font-weight: 500;
      line-height: 150%;
      letter-spacing: -0.608px;
    }
    .comment-container{
      display: flex;
      padding: 10px;
      flex-direction: column;
      align-items: flex-start;
      gap: 24px;
      flex: 1 0 0;
      align-self: stretch;

      .title{
        color: var(--Color-Text-Primary, #333);
        font-family: "Noto Sans TC";
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
      .subtitle{
        color: var(--Color-Neutral-400, #B1B1B1);
        font-family: "Noto Sans TC";
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
      .content{
        overflow: hidden;
        color: var(--textSecondary, #666);
        text-overflow: ellipsis;
        /* tw/card/content */
        font-family: "Noto Sans TC";
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 22.4px */
      }
    }
  }
</style>