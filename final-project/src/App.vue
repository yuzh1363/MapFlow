<script setup>
  import Footer from './components/Footer.vue';
import Header from './components/Header.vue'

</script>

<template>
  <Header class="sticky-top"></Header>
  <RouterView></RouterView>
  
  <Footer></Footer>
</template>
