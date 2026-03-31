import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  // 狀態 (State)
  const user = ref(null);
  const token = ref(localStorage.getItem('token') || ''); 

  // 計算屬性 (Getters)
  const isLoggedIn = computed(() => !!token.value);

  // 動作 (Actions)
  function login(userData, userToken) {
    user.value = userData;
    token.value = userToken;
    localStorage.setItem('token', userToken); 
  }

  function logout() {
    user.value = null;
    token.value = '';
    localStorage.removeItem('token');
  }

  return { user, token, isLoggedIn, login, logout };
});