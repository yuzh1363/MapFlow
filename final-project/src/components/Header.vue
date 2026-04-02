<script setup>
  import { useRouter } from 'vue-router';
  import { useAuthStore } from '../stores/auth';
  import { storeToRefs } from 'pinia';
  import MyButton from './MyButton.vue';

  const router = useRouter();
  const authStore = useAuthStore();
  const { isLoggedIn } = storeToRefs(authStore);
  const handleLogout = () => {
    authStore.logout();
    router.push('/')
  };

  const gotoLogin = () => {
    router.push('/login')
  }

  const gotoRegister = () => {
    router.push('/register')
  }
</script>

<template>
  <header class="header">
    <nav class="navbar">
      <RouterLink to="/" class="navbar-brand">
        <img src="../assets/images/BrandName.png" alt="MapFlow" class="brand-name">
        <img src="../assets/images/LogoIcon.png" alt="Logo Icon" class="brand-icon">
      </RouterLink> 

      <div class="navbar-content">
        <ul class="nav-menu">
          <RouterLink to="/" class="nav-item"><li>開始探索</li></RouterLink>
          <RouterLink to="/treeHole" class="nav-item"><li>角色樹洞</li></RouterLink>
          <RouterLink to="/templete" class="nav-item"><li>樣板市集</li></RouterLink>
          <RouterLink to="/error" class="nav-item"><li>關於我們</li></RouterLink>
        </ul>

        <div class="auth-wrapper">
          <div v-if="isLoggedIn" class="user-profile" @click="handleLogout">
            <img src="../assets/images/avatar.png" alt="user" class="avatar">
          </div>
          <div v-else class="auth-buttons">
            <router-link to="/Register"><MyButton text="註冊" type="yellow" border="pill" size="size-sm"/></router-link>         
            <router-link to="/Login"><MyButton text="登入" type="primary" border="pill" size="size-sm" /></router-link>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-index-sticky);
  background-color: var(--color-text-primary);
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;

  .navbar-brand {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    .brand-name { height: 24px; }
    .brand-icon { height: 32px; }
  }

  .navbar-content {
    display: flex;
    align-items: center;
    gap: var(--spacing-10);

    .nav-menu {
      display: flex;
      list-style: none;
      margin-bottom: 0;
      padding-left: 0;
      gap: 1.5rem;

      .nav-item {
        font-weight: var(--font-weight-medium);
        font-size: var(--font-size-sm);
        color: var(--color-bg-primary);
        text-decoration: none;
        padding-bottom: 6px;
        border-bottom: 2px solid transparent;
        transition: all 0.2s ease;
        display: inline-block;

        &:hover {
          border-bottom-color: var(--color-bg-primary);
        }
      }
    }
  }

  .auth-wrapper {
    margin-left: 1.5rem;

    .user-profile {
      cursor: pointer;
      .avatar {
        display: block;
      }
    }

    .auth-buttons {
      display: flex;
      gap: 0.5rem;
    }
  }
}
</style>
