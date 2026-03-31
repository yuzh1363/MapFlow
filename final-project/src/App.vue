<script setup>
import Bagde from './components/Bagde.vue';
import MyButton from './components/MyButton.vue';
import SearchCard from './components/SearchCard.vue';
import TempleteCard from './components/TempleteCard.vue';
</script>

<template>
  <h2>按鈕組件</h2>
  <MyButton text="小按鈕" type="primary" size="size-sm" border="pill"></MyButton>
  <MyButton text="大按鈕" type="green" size="size-md" border="square"></MyButton>
  <MyButton text="純連結" type="yellow" size="size-lg" border="square"></MyButton>
  <hr>
  <h2>標籤組件</h2>
  <Bagde text="進階" type="primary" size="size-sm" border="square"></Bagde>
  <Bagde text="基礎" type="white" size="size-sm" border="square"></Bagde>
  <Bagde text="未啟用" type="tag" size="size-sm" border="pill"></Bagde>
  <hr>
  <h2>卡片組件</h2>
  <SearchCard></SearchCard>
  <TempleteCard></TempleteCard>
</template>
