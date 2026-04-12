<template>
  <div class="comment-card">

    <div class="comment-container">
      <div class="card-title">
        <div class="title">Photoshop</div>
        <div class="subtitle"> > 數位影像基礎與介面導覽</div>
      </div>
      <p class="content">
        很多新手會沒注意到畫布問題導致失真，印刷務必設為300DPI，網頁為72DPI很多新手會沒注意到畫布問題導致失真，印刷務必設為300DPI，網頁為72DPI很多新手會沒注意到畫布問題導致失真，印刷務必設為300DPI，網頁為72DPI很多新手會沒注意到畫布問題導致失真，
      </p>
    </div>
    <div class="d-flex flex-column justify-content-between">
      <div class="date-container">
        <p class="mb-0">26</p>
        <p>Mar</p>
      </div>
      <div class="text-center">
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </div>
    </div>

  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.comment-card {
  width: 100%;
  max-width: 480px;
  height: auto;
  border: 1px solid var(--color-neutral-200);
  background-color: var(--color-bg-primary);
  border-radius: var(--radius-md);
  box-shadow: 0 0 6.5px 0 rgba(0, 0, 0, 0.20);
  display: flex;
  flex-direction: row;
  padding: var(--spacing-5) var(--spacing-4);
  gap: var(--spacing-4);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-4px);
  }

  .date-container {
    display: flex;
    padding: var(--spacing-2);
    flex-direction: column;
    align-items: center;
    align-self: stretch;
    border-radius: var(--radius-8);
    color: var(--color-primary);
    text-align: center;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    letter-spacing: -0.608px;
  }

  .comment-container {
    display: flex;
    padding: 10px;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    flex: 1 0 0;
    align-self: stretch;

    .title {
      color: var(--color-text-rimary);
      font-family: "Noto Sans TC";
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }

    .subtitle {
      color: var(--color-neutral-400);
      font-family: "Noto Sans TC";
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }

    .content {
      overflow: hidden;
      color: var(--textsecondary);
      text-overflow: ellipsis;
      font-family: "Noto Sans TC";
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%;
    }
  }
  i{
    color: var(--color-primary);
    font-size: 24px;
  }
}
</style>