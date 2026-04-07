<script setup>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue'


</script>

<template>
  <Header></Header>
  <main> 
    <RouterView></RouterView>
  </main>
  <Footer></Footer>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Noto+Sans+TC:wght@400;700&display=swap');

:root, body, #app {
  font-family: 'Inter', 'Noto Sans TC', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>