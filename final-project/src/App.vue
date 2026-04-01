<script setup>
  import Footer from './components/Footer.vue';
import Header from './components/Header.vue'

import Login from './views/Login.vue';
import Register from './views/Register.vue';
</script>

<template>
    <Header ></Header>
  <main>
    <RouterView ></RouterView>
  </main>
  
  
  <!-- <Register/> -->
  <!-- <Login/> -->
  <Footer></Footer>
</template>

<style scoped>
.main-content {
  /* 假設你的導覽列高度是 56px (Bootstrap 預設差不多是這樣) */
  padding-top: 60px; 
}
</style>