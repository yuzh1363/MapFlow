<script setup>
  import MyButton from '../components/MyButton.vue';
</script>

<template>
  <div class="login-page">
    <div class="login-pic">
      <img src="../assets/images/Login.png" alt="Login pic">
    </div>

    <div class="login-form-section">
      <div class="content-wrapper">
        <h1 class="title">登入</h1>
        
        <div class="third-party-account">
          <img class="icon" src="../assets/images/Facebook.svg" alt="Facebook">
          <img class="icon" src="../assets/images/Google.svg" alt="Google">
          <img class="icon" src="../assets/images/Apple.svg" alt="Apple">
          <img class="icon" src="../assets/images/Linkin.svg" alt="Linkin">
        </div>

        <div class="divider">
          <span>OR</span>
        </div>

        <div class="login-input-group">
          <input type="email" placeholder="電子信箱" class="styled-input">
          <input type="password" placeholder="密碼" class="styled-input">
          <MyButton text="登入" type="primary" border="square" size="size-lg" class="full-width-btn"></MyButton>
        </div>

        <span class="forget-code">忘記密碼</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-page {
  display: flex;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}

.login-pic {
  flex: 1;
  height: 100vh;
  img {
    // width: 60%;
    height: 100%;
    object-fit: cover;
  }
}

.login-form-section {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
}

.content-wrapper {
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

.title {
  font-size: 48px;
  font-weight: 500;
  color: #333;
  margin-bottom: 10px;
}

.third-party-account {
  display: flex;
  gap: 25px;
  .icon {
    width: 32px;
    height: 32px;
    cursor: pointer;
    transition: opacity 0.2s;
    &:hover { opacity: 0.8; }
  }
}

.divider {
  width: 100%;
  display: flex;
  align-items: center;
  color: #888;
  font-size: 14px;
  &::before, &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: #dbdbdb;
  }
  span { padding: 0 15px; }
}

.login-input-group {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.styled-input {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  font-size: 16px;
  background-color: #f9f9f9;
  outline: none;
  transition: border-color 0.2s;
  
  &:focus {
    border-color: #4a72ff;
    background-color: #fff;
  }
}

.full-width-btn {
  width: 100%;
  margin-top: 10px;
}

.forget-code {
  color: #888;
  font-size: 14px;
  cursor: pointer;
  margin-top: 10px;
  &:hover { text-decoration: underline; }
}
</style>