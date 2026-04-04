<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const container = ref(null)

onMounted(() => {
  const frames = container.value.querySelectorAll('.peggy-frame')
  
  const tl = gsap.timeline({ repeat: -1 })

  const frameDuration = 0.5 

  frames.forEach((frame, index) => {
    tl.to(frame, {
      display: 'block',
      duration: 0,
    }, index * frameDuration)
    

    tl.to(frame, {
      display: 'none',
      duration: 0,
    }, (index + 1) * frameDuration)
  })
})
</script>

<template>
  <div ref="container" class="peggy-wrapper">
    <img src="../assets/images/Peggy1.png" class="peggy-frame first" alt="Peggy 1">
    <img src="../assets/images/Peggy2.png" class="peggy-frame" alt="Peggy 2">
    <img src="../assets/images/Peggy3.png" class="peggy-frame" alt="Peggy 3">
    <img src="../assets/images/Peggy4.png" class="peggy-frame" alt="Peggy 4">
  </div>
</template>

<style scoped>
.peggy-wrapper {
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-end;
}

.peggy-frame {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  display: none;
}

.peggy-frame.first {
  position: relative;
  display: block;
  opacity: 1;
}
</style>