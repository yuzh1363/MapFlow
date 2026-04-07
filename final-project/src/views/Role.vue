<script setup>
import FlipCard from '../components/FlipCard.vue';
import SkillmapCard from '../components/SkillmapCard.vue'
import Bagde from '../components/Bagde.vue';
import { ref } from 'vue';
import Thoughts from '../components/Thoughts.vue';

const isShowCanva = ref(false)
</script>

<template>
  <div class="hero-section">
    <div class="hero-inner">
      <div class="content-block">
        <div class="title-container">
          <h1 class="title  display-1">UIUX設計師</h1>
          <p class="desc  fs-6">為強大的視覺後援。設計師主要利用其精確的影像編修、去背與校色功能，來優化介面中的產品情境照或 Banner 素材，確保視覺層次的高度專業感。</p>
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
        <FlipCard />
      </div>
    </div>
  </div>
  <!-- map section -->
  <section>
    <div class="container">
      <h2 class="fw-bold mb-4">技能地圖</h2>
      <div class="section-item-container d-flex gap-4">
        <div class="map-container d-flex flex-column gap-5 w-75">
          <SkillmapCard @open-offcanvas="isShowCanva = true"></SkillmapCard>
          <SkillmapCard></SkillmapCard>
          <SkillmapCard></SkillmapCard>
          <SkillmapCard></SkillmapCard>
        </div>
        <div class="skill-side w-25 rounded-4 py-3 align-self-start">
          <h3 class="fw-bold fs-4 text-center">相關技能</h3>
          <div class="link-group d-flex flex-column px-5 gap-2">
            <Bagde text="Illustrator" type="white" border="square" size="size-sm"></Bagde>
            <Bagde text="Illustrator" type="white" border="square" size="size-sm"></Bagde>
            <Bagde text="Illustrator" type="white" border="square" size="size-sm"></Bagde>
            <Bagde text="Illustrator" type="white" border="square" size="size-sm"></Bagde>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Thoughts 
    class="offcanvas offcanvas-end w-50" 
    :class="{ 'show': isShowCanva }" 
    :style="{ 
      visibility: isShowCanva ? 'visible' : 'hidden'
    }"
    tabindex="-1"
    @close-offcanvas="isShowCanva = false"></Thoughts>
    <div 
    v-if="isShowCanva" 
    class="offcanvas-backdrop fade show" 
    @click="isShowCanva = false"> </div>
</template>

<style lang="scss" scoped>
.hero-section {
  min-height: 60vh;
  background-color: var(--Sec-yellow-400);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 20px;
  margin-top: 30px;
}

.hero-inner {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1140px;
  gap: 40px;
}

.content-block {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-right: 20px;
}

.card-block {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  color: var(--color-text-primaryy);
  font-family: "Noto Sans TC";
  font-weight: var(--font-weight-medium);
}

.desc {
  max-width: 90%;
  color: var(--color-text-primary);
}

.skill-info {
  display: flex;
  justify-content: space-between;
  max-width: 90%;

  span {
    font-size: var(--font-size-lg);
    color: var(--color-text-primary);
    font-family: "Noto Sans TC";
  }
}

.user-learned {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.user {
  width: 30px;
}

.learner-count {
  font-size: var(--font-size-lg);
  color: var(--color-text-primary);
  font-family: "Noto Sans TC";
}
section{
  background-color: var(--Sec-yellow-50);
}
.skill-side{
  background-color: var(--Sec-yellow-400);
  h3{
    color: #333;
  }
}

@media (max-width: 992px) {
  .hero-inner {
    flex-direction: column;
    flex-wrap: wrap;
    text-align: center;
    gap: 50px;
  }

  .content-block,
  .card-block {
    flex: none;
    width: 100%;
  }

  .desc,
  .skill-info,
  .user-learned {
    margin: 0 auto;
    justify-content: center;
  }
}
</style>