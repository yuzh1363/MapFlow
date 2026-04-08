<script setup>
  import { useRouter } from 'vue-router';
  import { useAuthStore } from '../stores/auth';
  import { storeToRefs } from 'pinia';
  import MyButton from './MyButton.vue';
  import DropMenu from './DropMenu.vue';
  import { ref } from 'vue';

  const router = useRouter();
  const authStore = useAuthStore();
  const { isLoggedIn } = storeToRefs(authStore);
  const isMenuOpen = ref(false);

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };

  const closeMenu = () => {
    isMenuOpen.value = false;
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
          <div v-if="isLoggedIn" class="user-profile-wrapper">
            <div @click="toggleMenu" class="user-profile">
              <div class="cart-outline">
                <img src="../assets/images/cart.svg" alt="cart" class="cart">
              </div>
              <img src="../assets/images/rainyman.png" alt="user" class="avatar">
            </div>
            <DropMenu v-if="isMenuOpen" @close="closeMenu" />
          </div> 
          <RouterLink v-else class="auth-buttons">
            <div class="btn-area">
                <router-link to="/Register"><MyButton text="註冊" type="yellow" border="pill" size="size-sm"/></router-link>         
                <router-link to="/Login"><MyButton text="登入" type="primary" border="pill" size="size-sm" /></router-link>
            </div>
          </RouterLink>
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
  height: 60px;
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
    .brand-name,.brand-icon { 
      height:24px ; 
    }
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
        font-size: var(--font-size-base);
        color: var(--color-bg-primary);
        text-decoration: none;
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

    .user-profile-wrapper {
      position: relative;
    }

    .user-profile {
      display: flex;
      gap: 15px;
      cursor: pointer;
      align-items: center;

      .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: block;
        border: 2px solid var(--color-primary);
      }
      .cart{
        width: 20px;
        display: block;
        object-fit: contain;
      }
      .cart-outline {
        width: 32px;
        height: 32px;
        border: 1px solid var(--color-bg-primary);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .auth-buttons {
      display: flex;
      gap: 0.5rem;
    }
  }
}

.btn-area{
  display: flex;
  gap: 10px;
}
</style>
