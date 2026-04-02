<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const container = ref(null)

onMounted(() => {
  const frames = container.value.querySelectorAll('.peggy-frame')
  
  const tl = gsap.timeline({ repeat: -1 }) // 無限循環

  // 每一幀停留的時間，可以根據體感調整 (例如 0.2 秒)
  const frameDuration = 0.3 

  frames.forEach((frame, index) => {
    tl.to(frame, {
      display: 'block',
      duration: 0, // 瞬間切換
    }, index * frameDuration)
    
    // 如果不是最後一幀，在下一幀開始時隱藏自己
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
  width: 300px; /* 根據你的需求調整尺寸 */
  height: auto;
}

.peggy-frame {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  display: none; /* 預設全部隱藏 */
}

/* 確保第一幀在載入時先顯示，避免閃爍 */
.peggy-frame.first {
  position: relative; /* 讓容器有高度撐開 */
  display: block;
}
</style>