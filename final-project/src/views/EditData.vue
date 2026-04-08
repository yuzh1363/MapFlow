<script setup>
  import MyButton from '../components/MyButton.vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const goToData = () => {
    router.push('/editdata');
  };
  
  const goToCode = () => {
    router.push('/editcode');
  };
</script>

<template>
  <div id="edit-page">
    <aside class="sidebar">
      <h1>個人資料修改</h1>
      <div class="user-avatar">
        <img src="../assets/images/scott-user.png" alt="使用者大頭貼" class="user-img">
      </div>
      <MyButton text="更改頭像" type="yellow" border="square" size="size-md"></MyButton>
    </aside>
    <main class="edit-form">
      <div class="tab-block">
        <div class="tab-group">
          <MyButton text="基本資料" type="yellow" border="square" size="size-md" @click="goToData"></MyButton>
          <MyButton text="更改密碼" type="yellow" border="square" size="size-md" class="inactive" @click="goToCode"></MyButton>
        </div>
      </div>
      <div class="edit-content">
        <div class="info-group">
          <h2 class="title">基本資料</h2>
          <input type="text" placeholder="姓氏" class="styled-input">
          <input type="text" placeholder="名字" class="styled-input">
          <input type="text" placeholder="角色" class="styled-input">
        </div>

        <div class="info-group">
          <h2 class="title">網站連結</h2>
          <input type="url" placeholder="Github" class="styled-input">
          <input type="url" placeholder="Behance" class="styled-input">
          <input type="url" placeholder="Linkin" class="styled-input">
          <input type="url" placeholder="104" class="styled-input">
        </div>
        <div class="submit-action">
        <MyButton text="儲存" type="black" border="pill" size="size-md" class="save-btn"></MyButton>
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
  #edit-page{
    display:flex;
    min-height: 100vh;
    width: 100%;

    @media (max-width: 992px) {
      flex-direction: column;
    }
  }
  .sidebar{
    flex: 1;
    min-width: 320px;
    background-color: var(--color-primary);
    display: flex;
    align-items: center;
    padding: 90px 20px;
    flex-direction: column;
    gap: 40px;

    @media (max-width: 992px) {
      min-width: 100%;
      padding: var(--spacing-12) var(--spacing-4);
      gap: var(--spacing-6);
    }

    h1{
      font-size: var(--font-size-5xl);
      color: var(--color-bg-primary);
      font-family: "Noto Sans TC";

      @media (max-width: 768px) {
        font-size: var(--font-size-3xl);
      }
    }
  }
  .user-img{
    width: 220px;
    height: 220px;
    border-radius: 50%;
    background-color: #FA6506;
    object-fit: cover;

    @media (max-width: 768px) {
      width: 150px;
      height: 150px;
    }
  }

  .edit-form{
    flex: 3;
    background-color: var(--color-bg-primary);
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 100px 10%;

    @media (max-width: 992px) {
      padding: var(--spacing-8) var(--spacing-4);
    }
  }
  .tab-block{
    width: 100%;
    max-width: 600px;
    display: flex;
    align-items: flex-start;

    @media (max-width: 768px) {
      justify-content: center;
    }
  }

  .tab-group{
    display: flex;
    gap: 20px;
    margin-bottom: 40px;
    
    @media (max-width: 768px) {
      gap: 10px;
      flex-wrap: wrap;
      justify-content: center;
    }

    .inactive {
    background-color: var(--Sec-yellow-300);
    }
  }

  .edit-content{
    width: 100%;
    max-width: 600px;
  }

  .info-group{
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 40px;
    .title{
      font-size: var(--font-size-3xl);
      font-weight: bold;
      margin-bottom: 10px;
      color: var(--color-neutral-900);
    }
  }

  .styled-input {
    width: 100%;
    padding: 12px 20px;
    border: 2px solid var(--color-neutral-200);
    border-radius: var(--radius-lg);
    font-size: var(--font-size-bas);
    background-color: #f9f9f9;
    outline: none;
    transition: all 0.2s;

    &:focus {
      border-color: var(--color-primary);
      background-color: var(--color-bg-primary);
      box-shadow: 0 0 0 4px rgba(var(--color-primary-rgb));
    }
  }

  .submit-action {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;

    .save-btn {
      width: 100%;
    }
  }
</style>