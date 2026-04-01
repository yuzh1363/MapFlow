<script setup>
  import Footer from './components/Footer.vue';
import Header from './components/Header.vue'
import Login from './views/Login.vue';
import Register from './views/Register.vue';
</script>

<template>
  <Header class="sticky-top"></Header>
  <!-- <RouterView> -->
  <!-- <Register/> -->
  <Login/>
  <!-- <Footer class="fixed-bottom"></Footer> -->
</template>
