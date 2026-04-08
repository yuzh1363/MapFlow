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
  const isMobileMenuOpen = ref(false);

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };

  const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
  };

  const closeMenu = () => {
    isMenuOpen.value = false;
    isMobileMenuOpen.value = false;
  };

  const gotoLogin = () => {
    router.push('/login');
    closeMenu();
  }

  const gotoRegister = () => {
    router.push('/register');
    closeMenu();
  }
</script>

<template>
  <header class="header">
    <nav class="navbar">
      <RouterLink to="/" class="navbar-brand" @click="closeMenu">
        <img src="../assets/images/BrandName.png" alt="MapFlow" class="brand-name">
        <img src="../assets/images/LogoIcon.png" alt="Logo Icon" class="brand-icon">
      </RouterLink> 

      <button class="mobile-toggle" @click="toggleMobileMenu" :class="{ 'active': isMobileMenuOpen }">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>

      <div class="navbar-content" :class="{ 'show': isMobileMenuOpen }">
        <ul class="nav-menu">
          <RouterLink to="/" class="nav-item" @click="closeMenu"><li>開始探索</li></RouterLink>
          <RouterLink to="/treeHole" class="nav-item" @click="closeMenu"><li>角色樹洞</li></RouterLink>
          <RouterLink to="/templete" class="nav-item" @click="closeMenu"><li>樣板市集</li></RouterLink>
          <RouterLink to="/error" class="nav-item" @click="closeMenu"><li>關於我們</li></RouterLink>
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
          <div v-else class="auth-buttons">
            <div class="btn-area">
                <router-link to="/Register" @click="closeMenu"><MyButton text="註冊" type="yellow" border="pill" size="size-sm"/></router-link>         
                <router-link to="/Login" @click="closeMenu"><MyButton text="登入" type="primary" border="pill" size="size-sm" /></router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div v-if="isMobileMenuOpen" class="menu-overlay" @click="closeMenu"></div>
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
  max-width: 1400px;
  margin: 0 auto;

  .navbar-brand {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    z-index: 1001;
    .brand-name,.brand-icon { 
      height:24px ; 
    }
  }

  .mobile-toggle {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 21px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 1001;

    .bar {
      width: 100%;
      height: 3px;
      background-color: var(--color-bg-primary);
      border-radius: 10px;
      transition: all 0.3s linear;
    }

    &.active {
      .bar:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
      .bar:nth-child(2) { opacity: 0; }
      .bar:nth-child(3) { transform: rotate(-45deg) translate(7px, -8px); }
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

.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0,0,0,0.5);
  z-index: 999;
}

@media (max-width: 991px) {
  .navbar {
    .mobile-toggle {
      display: flex;
    }

    .navbar-content {
      position: fixed;
      top: 0;
      right: -100%;
      width: 70%;
      height: 100vh;
      background-color: var(--color-text-primary);
      flex-direction: column;
      justify-content: flex-start;
      padding: 100px 40px;
      transition: 0.3s ease;
      box-shadow: -5px 0 15px rgba(0,0,0,0.1);
      z-index: 1000;

      &.show {
        right: 0;
      }

      .nav-menu {
        flex-direction: column;
        gap: 2rem;
        width: 100%;

        .nav-item {
          font-size: 1.5rem;
        }
      }

      .auth-wrapper {
        margin-left: 0;
        margin-top: 2rem;
        width: 100%;

        .btn-area {
          flex-direction: column;
          width: 100%;
          gap: 1rem;
        }
      }
    }
  }
}
</style>
