<template>
    <div class="my-lable" :class="[`lable-${type}`, size,border]">{{ text }} </div>
</template>

<script setup>
const props = defineProps({
  text: String,
  type: {
    type: String,
    default: 'primary'
  },
  size: String,
  border:String
});
</script>

<style lang="scss" scoped>

</style>