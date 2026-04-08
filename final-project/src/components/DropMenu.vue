<script setup>
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';
import { storeToRefs } from 'pinia';
import Bagde from './Bagde.vue';

const router = useRouter();
const authStore = useAuthStore();
const { user } = storeToRefs(authStore);

const emit = defineEmits(['close']);

const handleLogout = () => {
  authStore.logout();
  emit('close');
  router.push('/login');
};

const goToProfile = () => {
  emit('close');
  router.push('/myaccount');
};

const goToEdit = () => {
  emit('close');
  router.push('/editdata');
};
</script>

<template>
  <div class="drop-menu" @click.stop>
    <!-- User Profile Header -->
    <div class="user-header">
      <div class="avatar-container">
        <img src="../assets/images/rainyman.png" alt="User Avatar" class="avatar" />
      </div>
      <div class="user-info">
        <div class="name-container">
          <h3 class="username">{{ user?.name || '王戴明' }}</h3>
        </div>
        <p class="user-role">{{ user?.role || 'UI /UX 設計師' }}</p>
        <div class="badge-group">
          <Bagde text="懵懂的初心者" type="white" border="pill" size="size-sm" />
        </div>
      </div>
    </div>

    <div class="divider"></div>

    <!-- Menu Links -->
    <ul class="menu-list">
      <li class="menu-item">
        <router-link to="/myaccount" class="menu-link" @click="emit('close')">
          <div class="icon-box">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor"/>
            </svg>
          </div>
          <span>個人頁面</span>
        </router-link>
      </li>
      <li class="menu-item">
        <router-link to="/mytemplete" class="menu-link" @click="emit('close')">
          <div class="icon-box">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM7 10H17V12H7V10ZM7 14H17V16H7V14ZM7 6H17V8H7V6Z" fill="currentColor"/>
            </svg>
          </div>
          <span>我的樣板</span>
        </router-link>
      </li>
      <li class="menu-item">
        <router-link to="/editdata" class="menu-link" @click="emit('close')">
          <div class="icon-box">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z" fill="currentColor"/>
            </svg>
          </div>
          <span>修改資料</span>
        </router-link>
      </li>
      <li class="menu-item">
        <button class="menu-link logout-btn" @click="handleLogout">
          <div class="icon-box">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 7L15.59 8.41L18.17 11H8V13H18.17L15.59 15.59L17 17L22 12L17 7ZM4 5H12V3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H12V19H4V5Z" fill="currentColor"/>
            </svg>
          </div>
          <span>登出</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.drop-menu {
  position: absolute;
  top: calc(100% + 15px);
  right: 0;
  width: 280px;
  background: var(--color-bg-primary);
  border-radius: var(--radius-lg);
  box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.12);
  padding: var(--spacing-6);
  z-index: var(--z-index-dropdown);
  border: 1px solid var(--color-neutral-200);
  animation: slideIn 0.2s ease-out;

  &::before {
    content: '';
    position: absolute;
    top: -8px;
    right: 20px;
    width: 16px;
    height: 16px;
    background: var(--color-bg-primary);
    transform: rotate(45deg);
    border-top: 1px solid var(--color-neutral-200);
    border-left: 1px solid var(--color-neutral-200);
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.user-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
  margin-bottom: var(--spacing-4);

  .avatar-container {
    .avatar {
      width: 56px;
      height: 56px;
      border-radius: var(--radius-full);
      object-fit: cover;
      border: 2px solid var(--color-primary);
    }
  }

  .user-info {
    flex: 1;
    
    .username {
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-bold);
      color: var(--color-text-primary);
      margin: 0;
      line-height: 1.2;
    }

    .user-role {
      font-size: var(--font-size-xs);
      color: var(--color-text-secondary);
      margin: 4px 0 8px 0;
    }

    .badge-group {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
    }
  }
}

.divider {
  height: 1px;
  background-color: var(--color-neutral-100);
  margin: var(--spacing-4) 0;
}

.menu-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.menu-item {
  .menu-link {
    display: flex;
    align-items: center;
    gap: var(--spacing-3);
    padding: var(--spacing-3) var(--spacing-4);
    text-decoration: none;
    color: var(--color-text-primary);
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-medium);
    border-radius: var(--radius-md);
    transition: all 0.2s ease;
    width: 100%;
    border: none;
    background: transparent;
    cursor: pointer;
    text-align: left;

    .icon-box {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      color: var(--color-neutral-600);
      transition: color 0.2s ease;
    }

    &:hover {
      background-color: var(--color-neutral-100);
      color: var(--color-primary);

      .icon-box {
        color: var(--color-primary);
      }
    }
  }

  .logout-btn {
    &:hover {
      background-color: #FFF5F5;
      color: var(--color-error);

      .icon-box {
        color: var(--color-error);
      }
    }
  }
}
</style>
