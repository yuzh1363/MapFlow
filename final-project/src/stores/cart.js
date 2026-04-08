import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useCartStore = defineStore('cart', () => {
  const items = ref([
    {
      id: 1,
      title: 'UI/UX 設計師學習地圖',
      price: 1200,
      image: new URL('../assets/images/cover01.jpg', import.meta.url).href,
      tags: ['入門', '實戰'],
      quantity: 1
    },
    {
      id: 2,
      title: '前端開發者：Vue.js 進階課程',
      price: 1500,
      image: new URL('../assets/images/cover02.jpg', import.meta.url).href,
      tags: ['中階', '熱門'],
      quantity: 1
    }
  ]);

  const totalAmount = computed(() => {
    return items.value.reduce((total, item) => total + (item.price * item.quantity), 0);
  });

  const totalCount = computed(() => {
    return items.value.reduce((total, item) => total + item.quantity, 0);
  });

  const addItem = (product) => {
    const existingItem = items.value.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      items.value.push({ ...product, quantity: 1 });
    }
  };

  const removeItem = (id) => {
    items.value = items.value.filter(item => item.id !== id);
  };

  const clearCart = () => {
    items.value = [];
  };

  return {
    items,
    totalAmount,
    totalCount,
    addItem,
    removeItem,
    clearCart
  };
});