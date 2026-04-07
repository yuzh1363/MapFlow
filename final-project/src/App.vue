<script setup>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue'
import EditData from './views/EditData.vue';
import EditCode from './views/EditCode.vue';


</script>

<template>
  <Header></Header>
  <main>
    <!-- <RouterView></RouterView> -->
    <EditCode/>
  </main>
  
  <Footer></Footer>
</template>

<style scoped></style>