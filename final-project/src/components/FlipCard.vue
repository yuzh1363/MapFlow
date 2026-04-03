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
    transformPerspective: 1000,
    force3D: true
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
  width: 420px;
  height: 260px;
  perspective: 1200px;
}

.card-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
}

.card-face {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  border-radius: 24px;
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