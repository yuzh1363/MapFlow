<script setup>
import { useCartStore } from '../stores/cart';
import MyButton from '../components/MyButton.vue';
import Badge from '../components/Bagde.vue';
import { useRouter } from 'vue-router';

const cartStore = useCartStore();
const router = useRouter();

const goBack = () => {
  router.push('/');
};

const handleCheckout = () => {
  alert('功能開發中！即將前往結帳...');
};

const formatCurrency = (value) => {
  return new Intl.NumberFormat('zh-TW', { style: 'currency', currency: 'TWD', minimumFractionDigits: 0 }).format(value);
};
</script>

<template>
  <div class="cart-page">
    <div class="container py-5">
      <div class="cart-header mb-4">
        <h1 class="h2 fw-bold">購物車</h1>
        <p class="text-muted">確認您的學習計劃與課程</p>
      </div>

      <div v-if="cartStore.items.length > 0" class="row g-4">
        <!-- 購物車清單 -->
        <div class="col-lg-8">
          <div class="cart-list card border-0 shadow-sm rounded-4 overflow-hidden">
            <div class="table-responsive">
              <table class="table align-middle mb-0">
                <thead class="bg-light">
                  <tr>
                    <th class="ps-4 py-3">內容名稱</th>
                    <th class="py-3 text-center">數量</th>
                    <th class="py-3 text-end pe-4">價格</th>
                    <th class="py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in cartStore.items" :key="item.id">
                    <td class="ps-4 py-4">
                      <div class="d-flex align-items-center">
                        <div class="item-img-wrapper me-3">
                          <img :src="item.image" :alt="item.title" class="rounded-3 shadow-sm">
                        </div>
                        <div>
                          <h3 class="h6 mb-1 fw-bold">{{ item.title }}</h3>
                          <div class="d-flex gap-1">
                            <Badge v-for="tag in item.tags" :key="tag" :text="tag" type="tag" border="pill" size="tag-size" />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="text-center py-4">
                      <div class="quantity-control d-inline-flex align-items-center bg-light rounded-pill px-2">
                        <button class="btn btn-sm" @click="item.quantity > 1 ? item.quantity-- : null" :disabled="item.quantity <= 1">
                          <i class="fa-solid fa-minus"></i>
                        </button>
                        <span class="px-3 fw-bold">{{ item.quantity }}</span>
                        <button class="btn btn-sm" @click="item.quantity++">
                          <i class="fa-solid fa-plus"></i>
                        </button>
                      </div>
                    </td>
                    <td class="text-end py-4 pe-4 fw-bold text-primary">
                      {{ formatCurrency(item.price * item.quantity) }}
                    </td>
                    <td class="text-center py-4">
                      <button class="btn btn-link text-danger p-0" @click="cartStore.removeItem(item.id)">
                        <i class="fa-solid fa-trash-can"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- 訂單摘要 -->
        <div class="col-lg-4">
          <div class="order-summary card border-0 shadow-sm rounded-4 p-4">
            <h2 class="h5 fw-bold mb-4">訂單摘要</h2>
            <div class="d-flex justify-content-between mb-3">
              <span class="text-muted">小計</span>
              <span class="fw-bold">{{ formatCurrency(cartStore.totalAmount) }}</span>
            </div>
            <div class="d-flex justify-content-between mb-3">
              <span class="text-muted">折扣</span>
              <span class="text-success fw-bold">-$0</span>
            </div>
            <hr class="my-4">
            <div class="d-flex justify-content-between align-items-center mb-4">
              <span class="h6 fw-bold mb-0">總計</span>
              <span class="h4 fw-bold text-primary mb-0">{{ formatCurrency(cartStore.totalAmount) }}</span>
            </div>
            <MyButton text="前往結帳" type="primary" border="pill" size="size-lg" class="w-100 py-3" @click="handleCheckout" />
            <MyButton text="繼續探索" border="pill" size="size-lg" class="w-100 py-3 mt-3 bg-white text-dark border-light shadow-none" @click="goBack" />
          </div>
        </div>
      </div>

      <!-- 空購物車 -->
      <div v-else class="empty-cart text-center py-5">
        <div class="mb-4">
          <i class="fa-solid fa-cart-shopping fa-4x text-light"></i>
        </div>
        <h2 class="h4 fw-bold">購物車目前是空的</h2>
        <p class="text-muted mb-4">快去探索更多精彩的學習地圖，開啟您的成長路徑吧！</p>
        <MyButton text="開始探索" type="primary" border="pill" size="size-lg" @click="goBack" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cart-page {
  min-height: 80vh;
  background-color: var(--color-bg-secondary);
  padding-top: 80px; /* 避開固定 Header */
}

.item-img-wrapper {
  width: 100px;
  height: 60px;
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.quantity-control {
  border: 1px solid var(--color-neutral-300);
  
  .btn {
    border: none;
    color: var(--color-neutral-600);
    &:hover:not(:disabled) {
      color: var(--color-primary);
    }
    &:disabled {
      opacity: 0.3;
    }
  }
}

.order-summary {
  position: sticky;
  top: 100px;
}

.empty-cart {
  i {
    opacity: 0.5;
    color: var(--color-neutral-400);
  }
}

/* 移除表格底部邊框 */
.table > :not(caption) > * > * {
  border-bottom-width: 1px;
  border-color: var(--color-neutral-200);
}

.table tr:last-child td {
  border-bottom: none;
}
</style>