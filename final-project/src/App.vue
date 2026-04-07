<script setup>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue'
import ThoughtComment from './components/ThoughtComment.vue';
import Thoughts from './components/Thoughts.vue';
import Role from './views/Role.vue';
import Skill from './views/Skill.vue';


</script>

<template>
  <Header></Header>
  <main> 
    <RouterView></RouterView>
  </main>
  <!-- <Skill></Skill> -->
  <!-- <Role></Role> -->
   <!-- <Thoughts></Thoughts> -->
  <Footer></Footer>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Noto+Sans+TC:wght@400;700&display=swap');

/* 設定全域字體 */
:root, body, #app {
  font-family: 'Inter', 'Noto Sans TC', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>