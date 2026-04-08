<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);

const handleScroll = () => {
  // 當捲動超過 400px 時顯示按鈕
  isVisible.value = window.scrollY > 400;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <transition name="fade">
    <button v-if="isVisible" class="go-to-top" @click="scrollToTop"aria-label="回到頂部">
      <img src="../assets/images/gototop.svg" alt="GoToTop">
    </button>
  </transition>
</template>

<style lang="scss" scoped>
.go-to-top {
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--color-primary);
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-lg);
  z-index: var(--z-index-fixed);
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--primary-blue-700);
    transform: translateY(-5px);
    box-shadow: var(--shadow-xl);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateY(-2px);
  }
}

/* 過場動畫 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

@media (max-width: 768px) {
  .go-to-top {
    bottom: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
  }
}
</style>
