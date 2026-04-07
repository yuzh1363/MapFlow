<script setup>
import Bagde from '../components/Bagde.vue';
import LearningCard from '../components/LearningCard.vue';
import CommentCard from '../components/CommentCard.vue'
import LearningCardRole from '../components/LearningCardRole.vue';
</script>

<template>
  <main id="my-account-page">
    <div class="hero-bg">
      <div class="welcome-container">
        <div class="user-info">
          <div class="container">歡迎回來，王戴明</div>
          <div class="badge-group">
            <Bagde text="懵懂的初心者" type="white" border="pill" size="size-sm"></Bagde>
            <Bagde text="初級UI/UX設計師" type="green" border="pill" size="size-sm"></Bagde>
          </div>
        
        </div>
        <div class="card-container">
          <div class="card flag">
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path d="M6 40.0001V8.00015C5.99998 7.68023 6.0767 7.36498 6.22372 7.08085C6.37074 6.79673 6.58378 6.55201 6.84495 6.36725C7.10612 6.1825 7.4078 6.06308 7.72467 6.01904C8.04154 5.975 8.36435 6.00762 8.666 6.11415L42.666 18.1141C43.0645 18.2549 43.4082 18.5183 43.6477 18.8666C43.8872 19.2148 44.0103 19.63 43.9992 20.0525C43.9881 20.475 43.8434 20.8832 43.5859 21.2183C43.3284 21.5535 42.9714 21.7985 42.566 21.9181L10 31.4941V40.0001C10 40.5306 9.78929 41.0393 9.41421 41.4144C9.03914 41.7894 8.53043 42.0001 8 42.0001C7.46957 42.0001 6.96086 41.7894 6.58579 41.4144C6.21071 41.0393 6 40.5306 6 40.0001Z" fill="#333333"/>
            </svg>
            <span class="title">完成角色</span>
            <span class="count">10</span>
          </div>
          <div class="card chart">
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path d="M45 45H33V6H45V45ZM36 42H42V9H36V42ZM30 45H18V18H30V45ZM15 45H3V27H15V45Z" fill="#333333"/>
            </svg>
            <span class="title">完成技能</span>
            <span class="count">15</span>
          </div>
          <div class="card fire">
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
              <path d="M31.56 8.93461C31.2526 8.90439 30.9423 8.94654 30.6541 9.05767C30.3658 9.1688 30.1076 9.34583 29.9 9.57461C28.36 11.2546 26.26 12.1946 24.02 12.1946C19.6 12.1946 16 8.59461 16 4.17461C16 3.63461 16.06 3.05461 16.2 2.43461C16.36 1.65461 16.06 0.85461 15.44 0.39461C15.1295 0.160658 14.7564 0.0243314 14.3683 0.00296348C13.9801 -0.0184044 13.5943 0.0761522 13.26 0.27461C8.32 3.11461 0 9.49461 0 20.1746C0 27.3546 4.24 33.5746 10.36 36.4546C9.52 34.9546 9 33.1946 9 31.3146C9 23.3946 16.8 19.5546 17.14 19.3946C17.7 19.1346 18.32 19.1346 18.88 19.3946C19.22 19.5546 27.02 23.4146 27.02 31.3146C27.02 33.2146 26.5 34.9546 25.66 36.4546C31.76 33.5746 36.02 27.3746 36.02 20.1746C36.02 16.5346 35.04 13.0746 33.08 9.89461C32.9193 9.62865 32.6977 9.40472 32.4334 9.24128C32.1691 9.07784 31.8697 8.97958 31.56 8.95461V8.93461Z" fill="#333333"/>
            </svg>
            <span class="title">學習天數</span>
            <span class="count">6</span>
          </div>
        </div>
      </div>
    </div>
    <div class="content-container">
      <div class="content-section">
        <div class="learning-container">
          <div class="learning-column">
            <h3 class="section-title">正在學習角色</h3>
            <LearningCardRole title="UI /UX 設計師" type="yellow" countText="10 / 30 已完成" progress="33%" />
            <LearningCardRole title="前端工程師" type="yellow" countText="10 / 30 已完成" progress="33%" />
            <LearningCardRole title="網頁設計師" type="yellow" countText="10 / 30 已完成" progress="33%" />
          </div>
          <div class="learning-column">
            <h3 class="section-title">正在學習技能</h3>
            <LearningCard title="Photoshop" type="primary" countText="10 / 30 已完成" progress="33%" />
            <LearningCard title="Illustrator" type="primary" countText="15 / 30 已完成" progress="50%" />
            <LearningCard title="Sketch" type="primary" countText="12 / 30 已完成" progress="40%" />
            <LearningCard title="Figma" type="primary" countText="8 / 30 已完成" progress="25%" />
          </div>
        </div>
        <div class="feedback-section">
          <h3 class="section-title">我的心得</h3>
          <div class="card-grid">
            <CommentCard /> <CommentCard /> <CommentCard />
            <CommentCard /> <CommentCard /> <CommentCard />
          </div>
        </div>
        <div class="feedback-section">
          <h3 class="section-title">收藏心得</h3>
          <div class="card-grid">
            <CommentCard /> <CommentCard /> <CommentCard />
            <CommentCard /> <CommentCard /> <CommentCard />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>



<style lang="scss" scoped>
  #my-account-page{
    min-height: 100vh;
    width: 100%;
    margin-bottom: 30px;
    background-color: var(--color-neutral-50);
  }
  .hero-bg{
    height: 40vh;
    background-color: var(--color-primary);
    display: flex;
    padding: var(--spacing-16) 10%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 350px;
  }

  .welcome-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }

  .user-info{
    width: 410px;
  }
  .container{
    font-size: var(--font-size-5xl);
    color: var(--color-bg-primary);
  }

  .badge-group{
    margin-top: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 27px;
  }

  .card-container{
    display: flex;
    align-items: center;
    gap: 42px;
  }
  .card{
    display: flex;
    width: 180px;
    padding: var(--spacing-2) var(--spacing-5);
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 10px;
    border-radius: 16px;
    background: var(--color-neutral-100);
    .icon{
      width: 48px;
      height: 48px;
    }
    .title{
      color: var(--color-text-primary);
      font-size: var(--font-size-xl);
      font-style: normal;
      font-weight:var(--font-weight-regular);
      letter-spacing: 0.5px;
    }
    .count{
      color: #000;
      font-size: 40px;
      font-style: normal;
      font-weight: var(--font-weight-bold);
    }
  }
  .content-container{
    width: 70%;
    margin: 0 auto; 
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .content-section {
    padding-top: var(--spacing-16);
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-20);
  }

  .section-title {
    font-size: var(--font-size-2xl);
    font-weight: var(--font-weight-bold);
    margin-bottom: var(--spacing-8);
    color: var(--color-neutral-900);
  }

  .learning-container {
    display: flex;
    justify-content: space-around;
    gap: 40px;
    flex-wrap: wrap;
    width: 100%;
  }

  .learning-column {
    flex: 0 1 auto;
    width: 100%;
    max-width: 500px;
    min-width: 350px;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-6);
  }

  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: var(--spacing-8); 
    width: 100%;
  }

  .content-container {
    width: 85%; 
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

</style>