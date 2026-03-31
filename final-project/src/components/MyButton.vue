<template>
        <button class="my-btn" :class="[`btn-${type}`, size,border]" >
    {{ text }}
  </button>
</template>

<script setup>

const props = defineProps({
  text: String,
  type: {
    type: String,
    default: 'primary' // 沒傳的話預設是藍色
  },
  size: String,
  border:String
});

</script>

<style scoped>

</style>