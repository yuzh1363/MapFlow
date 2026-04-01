<script setup>
  import { useAuthStore } from '../stores/auth';
  import { storeToRefs } from 'pinia';
  import MyButton from './MyButton.vue';

  const authStore = useAuthStore();
  const { isLoggedIn } = storeToRefs(authStore);
  const handleLogout = () => {
    authStore.logout();
  };
</script>

<template>
  <header>
    <nav class="navbar py-3 px-4 d-flex justify-content-between align-items-center">
    <div class="navbar-brand-group d-flex align-items-center gap-2">
      <div class="icon">
        <img src="../assets/images/BrandName.png" alt="MapFlow" height="24">
      </div>
      <div class="name">
        <img src="../assets/images/LogoIcon.png" alt="Logo Icon" height="32">
      </div>
    </div>

    <div class="nav-links d-flex justify-content-between align-items-center">
      <ul class="nav d-flex gap-4 list-unstyled mb-0">
        <RouterLink to="/"><li class="nav-link p-0">開始探索</li></RouterLink>
        <RouterLink to="/treeHole"><li class="nav-link p-0">角色樹洞</li></RouterLink>
        <RouterLink to="/templete"><li class="nav-link p-0">樣板市集</li></RouterLink>
        <RouterLink><li class="nav-link p-0">關於我們</li></RouterLink>
      </ul>

      <div class="auth-section ms-4">
        <div v-if="isLoggedIn" class="user" @click="handleLogout">
          <img src="../assets/images/avatar.png" alt="user" class="avatar">
        </div>
        <div v-else class="button d-flex gap-2">
          <MyButton text="註冊" type="yellow" border="pill" size="size-sm"></MyButton>
          <MyButton text="登入" type="primary" border="pill" size="size-sm" @click="authStore.login({}, 'test_token')"></MyButton>
          <!-- <button class="btn btn-warning">註冊</button>
          <button class="btn btn-primary" @click="authStore.login({}, 'test_token')">登入</button> -->
        </div>
      </div>
    </div>
    </nav>
  </header>
  
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-index-sticky);
  background-color: var(--color-text-primary);
  border-bottom: 1px solid var(--color-neutral-200);
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
}

.user{
  cursor: pointer;
}

.nav-links{
  gap: var(--spacing-10);
}

.nav-link {
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-sm);
  color: var(--color-bg-primary);
  transition: color 0.2s ease, border-color 0.2s ease;
  padding-bottom: 6px; 
  border-bottom: 2px solid transparent; 
  text-decoration: none;
  display: inline-block; 

  &:hover {
    color: var(--color-bg-primary);
    border-bottom: 2px solid var(--color-bg-primary);
  }
}
</style>
