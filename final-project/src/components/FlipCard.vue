<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import SkillProgress from './SkillProgress.vue'
import LearningCalendar from './LearningCalendar.vue'


const isFlipped = ref(false)
const cardInner = ref(null)

onMounted(() => {
  gsap.set(".card-back", { rotationY: 180 });
});

const handleFlip = () => {
  isFlipped.value = !isFlipped.value;
  gsap.to(cardInner.value, {
    rotationY: isFlipped.value ? 180 : 0,
    duration: 0.8,
    ease: "back.out(1.2)",
    overwrite: true,
    z: 0.1,
    transformPerspective: 1200,
    force3D: true,
    transformOrigin: "center center"
  });
};
</script>

<template>
  <div class="card-scene">
    <div class="card-inner" ref="cardInner">
      <div class="card-face card-front">
        <SkillProgress @click-view="handleFlip" />
      </div>

      <div class="card-face card-back">
        <LearningCalendar @click-close="handleFlip" />
      </div>

    </div>
  </div>
</template>

<style scoped>
.card-scene {
  width: 100%;
  min-width: 320px;
  max-width: 420px;
  height: 260px;
  perspective: 1200px;
  border-radius: 40px;
  /* border: 1px solid var(--color-neutral-900); */
}

.card-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  will-change: transform;
}

.card-face {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -webkit-font-smoothing: antialiased;
  border-radius: 40px;
  display: flex;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}

.card-front {
  background: white;
  z-index: 2;
}

.card-back {
  background: #f9f9f9;
  transform: rotateY(180deg);
}
</style>