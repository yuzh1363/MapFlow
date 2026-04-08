<script setup>
import { useCartStore } from '../stores/cart';
import MyButton from '../components/MyButton.vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const cartStore = useCartStore();
const router = useRouter();

const paymentMethod = ref('credit-card');

const handlePlaceOrder = () => {
  alert('訂單已送出！感謝您的購買。');
  cartStore.clearCart();
  router.push('/');
};

const formatCurrency = (value) => {
  return new Intl.NumberFormat('zh-TW', { style: 'currency', currency: 'TWD', minimumFractionDigits: 0 }).format(value);
};
</script>

<template>
  <div class="checkout-page">
    <div class="container py-5">
      <div class="checkout-header mb-5 text-center">
        <h1 class="h2 fw-bold">結帳</h1>
        <p class="text-muted">請填寫您的資訊以完成購買</p>
      </div>

      <div v-if="cartStore.items.length > 0" class="row g-5">
        <!-- 左側：填寫資訊 -->
        <div class="col-lg-8">
          <div class="checkout-form">
            <!-- 聯絡資訊 -->
            <section class="mb-5 p-4 card border-0 shadow-sm rounded-4">
              <h2 class="h5 fw-bold mb-4 d-flex align-items-center">
                <span class="step-badge me-2">1</span> 聯絡資訊
              </h2>
              <div class="row g-3">
                <div class="col-md-6">
                  <label class="form-label text-muted small fw-bold">姓名</label>
                  <input type="text" class="form-control" placeholder="您的姓名" required>
                </div>
                <div class="col-md-6">
                  <label class="form-label text-muted small fw-bold">電子郵件</label>
                  <input type="email" class="form-control" placeholder="example@mail.com" required>
                </div>
                <div class="col-12">
                  <label class="form-label text-muted small fw-bold">聯絡電話</label>
                  <input type="tel" class="form-control" placeholder="09XX-XXX-XXX" required>
                </div>
              </div>
            </section>

            <!-- 收件地址 (數位商品可選) -->
            <section class="mb-5 p-4 card border-0 shadow-sm rounded-4">
              <h2 class="h5 fw-bold mb-4 d-flex align-items-center">
                <span class="step-badge me-2">2</span> 收件資訊 (選填)
              </h2>
              <p class="small text-muted mb-4">若您購買包含實體教材的組合，請填寫此欄位。</p>
              <div class="row g-3">
                <div class="col-12">
                  <label class="form-label text-muted small fw-bold">收件地址</label>
                  <input type="text" class="form-control" placeholder="詳細收件地址">
                </div>
              </div>
            </section>

            <!-- 付款方式 -->
            <section class="mb-5 p-4 card border-0 shadow-sm rounded-4">
              <h2 class="h5 fw-bold mb-4 d-flex align-items-center">
                <span class="step-badge me-2">3</span> 付款方式
              </h2>
              <div class="payment-options d-flex flex-column gap-3">
                <label class="payment-option p-3 border rounded-3 d-flex align-items-center" :class="{ active: paymentMethod === 'credit-card' }">
                  <input type="radio" v-model="paymentMethod" value="credit-card" class="form-check-input me-3">
                  <div class="d-flex align-items-center flex-grow-1">
                    <i class="fa-regular fa-credit-card fa-lg me-3 text-primary"></i>
                    <span class="fw-bold">信用卡 / 簽帳金融卡</span>
                  </div>
                </label>
                <label class="payment-option p-3 border rounded-3 d-flex align-items-center" :class="{ active: paymentMethod === 'line-pay' }">
                  <input type="radio" v-model="paymentMethod" value="line-pay" class="form-check-input me-3">
                  <div class="d-flex align-items-center flex-grow-1">
                    <img src="../assets/images/Google.svg" alt="LINE Pay" class="me-3" style="width: 24px;">
                    <span class="fw-bold">Google Pay</span>
                  </div>
                </label>
                <label class="payment-option p-3 border rounded-3 d-flex align-items-center" :class="{ active: paymentMethod === 'bank' }">
                  <input type="radio" v-model="paymentMethod" value="bank" class="form-check-input me-3">
                  <div class="d-flex align-items-center flex-grow-1">
                    <i class="fa-solid fa-building-columns fa-lg me-3 text-muted"></i>
                    <span class="fw-bold">銀行轉帳</span>
                  </div>
                </label>
              </div>
            </section>
          </div>
        </div>

        <!-- 右側：訂單摘要 -->
        <div class="col-lg-4">
          <div class="order-summary-sidebar">
            <div class="card border-0 shadow-sm rounded-4 p-4 mb-4">
              <h2 class="h5 fw-bold mb-4">訂單內容</h2>
              <div class="order-items-list mb-4">
                <div v-for="item in cartStore.items" :key="item.id" class="order-item d-flex gap-3 mb-3">
                  <img :src="item.image" :alt="item.title" class="rounded shadow-sm" style="width: 60px; height: 40px; object-fit: cover;">
                  <div class="flex-grow-1 overflow-hidden">
                    <h3 class="small fw-bold mb-0 text-truncate">{{ item.title }}</h3>
                    <div class="d-flex justify-content-between">
                      <span class="text-muted extra-small">x{{ item.quantity }}</span>
                      <span class="fw-bold small">{{ formatCurrency(item.price * item.quantity) }}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="price-details bg-light p-3 rounded-3 mb-4">
                <div class="d-flex justify-content-between mb-2">
                  <span class="text-muted small">小計</span>
                  <span class="fw-bold small">{{ formatCurrency(cartStore.totalAmount) }}</span>
                </div>
                <div class="d-flex justify-content-between mb-2">
                  <span class="text-muted small">運費</span>
                  <span class="fw-bold small">$0</span>
                </div>
                <hr class="my-2 border-secondary opacity-25">
                <div class="d-flex justify-content-between align-items-center">
                  <span class="h6 fw-bold mb-0">總計</span>
                  <span class="h5 fw-bold text-primary mb-0">{{ formatCurrency(cartStore.totalAmount) }}</span>
                </div>
              </div>

              <MyButton text="確認付款" type="primary" border="pill" size="size-lg" class="w-100 py-3" @click="handlePlaceOrder" />
              <p class="extra-small text-muted text-center mt-3">點擊確認付款即表示您同意我們的服務條款與退款政策。</p>
            </div>
            
            <RouterLink to="/cart" class="text-decoration-none text-muted small d-flex align-items-center justify-content-center hover-primary">
              <i class="fa-solid fa-chevron-left me-2"></i> 返回購物車
            </RouterLink>
          </div>
        </div>
      </div>

      <!-- 若無商品則引導至探索頁 -->
      <div v-else class="text-center py-5">
        <h2 class="h4 fw-bold">購物車沒有商品</h2>
        <RouterLink to="/" class="mt-3 d-inline-block">
            <MyButton text="開始探索" type="primary" border="pill" size="size-lg" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.checkout-page {
  min-height: 100vh;
  background-color: var(--color-bg-secondary);
  padding-top: 80px;
}

.step-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background-color: var(--color-primary);
  color: white;
  border-radius: 50%;
  font-size: 14px;
}

.form-control {
  padding: 12px 16px;
  border-radius: 12px;
  border: 1px solid var(--color-neutral-300);
  background-color: var(--color-neutral-50);
  &:focus {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 4px rgba(74, 111, 254, 0.1);
  }
}

.payment-option {
  cursor: pointer;
  transition: all 0.2s ease;
  border-color: var(--color-neutral-200) !important;
  
  &:hover {
    background-color: var(--color-neutral-50);
  }
  
  &.active {
    border-color: var(--color-primary) !important;
    background-color: rgba(74, 111, 254, 0.05);
  }
}

.order-summary-sidebar {
  position: sticky;
  top: 100px;
}

.extra-small {
  font-size: 12px;
}

.hover-primary:hover {
  color: var(--color-primary) !important;
}

/* 自定義 Radio Style */
.form-check-input:checked {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
}
</style>