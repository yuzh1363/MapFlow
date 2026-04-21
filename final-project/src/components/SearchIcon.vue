<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);
const isExpanded = ref(false);

const handleScroll = () => {
  // 捲動超過 400px 時顯示按鈕
  isVisible.value = window.scrollY > 400;
  
  // 按鈕消失，強制收合搜尋欄
  if (!isVisible.value) {
    isExpanded.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  // 初始化檢查一次
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="search-icon-container" :class="{ 'is-expanded': isExpanded }">
    <transition name="fade">
      <div v-if="isVisible" class="floating-content">
        <transition name="slide-expand" mode="out-in">
          <!-- 收合狀態：圓形搜尋按鈕 -->
          <button v-if="!isExpanded" class="search-btn-circle" @click="isExpanded = true" aria-label="開啟搜尋" key="icon">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>

          <!-- 展開狀態：搜尋欄位 (滑鼠移開後自動收合) -->
          <div v-else class="expanded-search-container" @mouseleave="isExpanded = false" key="bar">
            <div class="search-bar-bg"></div>
            <div class="expanded-search-wrapper">
              <input type="text" placeholder="角色學習、技能樹檢索" class="floating-input" autofocus>
              <div class="search-btn-inside">
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.search-icon-container {
  position: fixed;
  bottom: 100px;
  right: 40px;
  z-index: var(--z-index-fixed);
  pointer-events: none;

  &.is-expanded {
      width: auto;
  }
}

.floating-content {
    pointer-events: auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.search-btn-circle {
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
  transition: all 0.3s ease;
  font-size: 1.2rem;

  &:hover {
    background-color: var(--primary-blue-700);
    transform: translateY(-5px);
    box-shadow: var(--shadow-xl);
  }
}


.expanded-search-container {
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px 0;
}

.search-bar-bg {
  position: absolute;
  right: -3px;
  top: 50%;
  transform: translateY(-50%);
  width: 264px;
  height: 66px;
  background-color: var(--color-primary);
  border-radius: 100px;
  z-index: 1;
}

.expanded-search-wrapper {
  position: relative;
  z-index: 2;
  width: 258px;
  height: 60px;
  background: white;
  border-radius: 100px;
  display: flex;
  align-items: center;
  padding: 0 7px 0 20px;
  overflow: hidden;
}

.floating-input {
  flex: 1;
  border: none;
  outline: none;
  font-family: "Noto Sans TC", sans-serif;
  font-size: 16px;
  color: var(--color-text-primary);
  background: transparent;
  min-width: 0;

  &::placeholder {
    color: var(--color-text-disabled);
  }
}

.search-btn-inside {
  width: 46px;
  height: 46px;
  flex-shrink: 0;
  aspect-ratio: 1 / 1;
  background-color: var(--color-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
}


.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* 展開/收合滑動動畫 */
.slide-expand-enter-active,
.slide-expand-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-expand-enter-from,
.slide-expand-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

@media (max-width: 768px) {
  .search-icon-container {
    bottom: 70px;
    right: 20px;
  }
  .search-btn-circle {
    width: 40px;
    height: 40px;
  }
  .search-bar-bg {
    width: 220px;
    height: 54px;
  }
  .expanded-search-wrapper {
    width: 214px;
    height: 48px;
  }
  .search-btn-inside {
    width: 40px;
    height: 40px;
  }
}
</style>