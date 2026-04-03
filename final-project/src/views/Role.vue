<script setup>
  import FlipCard from '../components/FlipCard.vue';
</script>

<template>
  <div class="hero-section">
    <div class="content-block">
      <div class="title-container">
        <h1 class="title">Photoshop</h1>
        <p class="desc">為強大的視覺後援。設計師主要利用其精確的影像編修、去背與校色功能，來優化介面中的產品情境照或 Banner 素材，確保視覺層次的高度專業感。</p>
      </div>
      <div class="skill-info">
        <span>技能節點 12 / 24</span>
        <span>最後活動 ：今天</span>
      </div>
      <div class="user-learned">
        <div class="user-img">
          <img class="user" src="../assets/images/avatar.png" alt="user">
          <img class="user" src="../assets/images/avatar.png" alt="user">
          <img class="user" src="../assets/images/avatar.png" alt="user">
          <img class="user" src="../assets/images/avatar.png" alt="user">
          <img class="user" src="../assets/images/avatar.png" alt="user">
        </div>
        <div class="learner-count">120 人已經學習過</div>
      </div>
    </div>
    <FlipCard/>
  </div>

</template>

<style lang="scss" scoped>
  .hero-section{
    height: 60vh;
    background-color: var(--primary-blue-400);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 60px;
    margin-top: 30px;
  }
  .content-block{
    // width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .title{
    font-size: var(--font-size-topic);
    color: var(--color-bg-primary);
    font-family: "Noto Sans TC";
    font-weight: var(--font-weight-medium);
  }
  .desc{
    max-width: 515px;
    font-size: var(--font-size-xl);
    color: var(--color-bg-primary);
    font-family: "Noto Sans TC";
    font-weight: var(--font-weight-medium);
  }
  .skill-info{
    display: flex;
    justify-content: space-between;
    span{
      font-size: var(--font-size-lg);
      color: var(--color-bg-primary);
      font-family: "Noto Sans TC";
      font-weight: var(--font-weight-medium);
    }
  }
  .user-learned{
    display: flex;
    flex-direction: row;
    gap: 35px;
  }
  .user{
    width: 30px;
  }
  .learner-count{
    font-size: var(--font-size-xl);
    color: var(--color-bg-primary);
    font-family: "Noto Sans TC";
    font-weight: var(--font-weight-medium);
  }
</style>