<script setup>
  import FlipCard from '../components/FlipCard.vue';
</script>

<template>
  <div class="hero-section">
    <div class="hero-inner">
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
      <div class="card-block">
        <FlipCard/>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
  .hero-section{
    min-height: 60vh;
    background-color: var(--primary-blue-400);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 60px 20px;
    margin-top: 30px;
  }

  .hero-inner{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1140px;
    gap: 40px;
  }
  .content-block{
    flex: 1;
    // min-width: 600px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding-right: 20px;
  }

  .card-block{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .title{
    font-size: var(--font-size-topic);
    color: var(--color-bg-primary);
    font-family: "Noto Sans TC";
    font-weight: var(--font-weight-medium);
  }
  .desc{
    max-width: 90%;
    font-size: var(--font-size-xl);
    color: var(--color-bg-primary);
    font-family: "Noto Sans TC";
    // font-weight: var(--font-weight-medium);
  }
  .skill-info{
    display: flex;
    justify-content: space-between; 
    max-width: 90%;
    span{
      font-size: var(--font-size-lg);
      color: var(--color-bg-primary);
      font-family: "Noto Sans TC";
    }
  }
  .user-learned{
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
  .user{
    width: 30px;
  }
  .learner-count{
    font-size: var(--font-size-lg);
    color: var(--color-bg-primary);
    font-family: "Noto Sans TC";
  }


@media (max-width: 992px) {
    .hero-inner {
      flex-direction: column; 
      flex-wrap: wrap; 
      text-align: center;
      gap: 50px;
    }

    .content-block, .card-block {
      flex: none; 
      width: 100%;
    }

    .desc, .skill-info, .user-learned {
      margin: 0 auto; 
      justify-content: center;
    }
  }
  
</style>