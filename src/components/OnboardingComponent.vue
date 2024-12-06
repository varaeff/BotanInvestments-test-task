<script setup lang="ts">
import { useStageStore } from '@/stores/stage'
import { onboardingTexts, videos, buttons } from '@/data/data'
import { computed, onMounted, onUpdated } from 'vue'
import { ref, increment, update } from 'firebase/database'
import { database } from '@/firebaseConfig'

const stageStore = useStageStore()

const buttonText = computed(() => {
  switch (stageStore.stage) {
    case 0:
      return buttons[0].header
    case 3:
      return buttons[2].header
    default:
      return buttons[1].header
  }
})

onMounted(() => {
  scrollToTop()
})

onUpdated(() => {
  scrollToTop()
})

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function completeOnboarding() {
  const counterRef = ref(database, 'onboarding/completed')
  update(counterRef, { count: increment(1) })
    .then(() => console.log('Onboarding completed'))
    .catch((error) => {
      console.error('Error during counter update', error)
    })
}

function buttonClick() {
  if (stageStore.stage === 3) completeOnboarding()
  stageStore.increment()
}
</script>

<template>
  <ul class="list" :key="stageStore.stage" v-if="stageStore.stage > 0 && stageStore.stage < 4">
    <li
      class="listItem"
      v-for="listData in onboardingTexts[stageStore.stage - 1]"
      :key="listData.id"
    >
      <h2>{{ listData.header }}</h2>
      <p>{{ listData.text }}</p>
    </li>
  </ul>

  <div class="videoBlock" v-if="stageStore.stage > 0 && stageStore.stage < 4">
    <video
      class="video"
      :src="videos[stageStore.stage - 1].link"
      autoplay
      muted
      playsinline
      loop
      style="height: auto; width: 200px"
    ></video>
    <p>{{ videos[stageStore.stage - 1].description }}</p>
  </div>

  <div class="buttonBlock" :class="{ buttonStart: stageStore.stage === 0 }">
    <button v-if="stageStore.stage < 4" class="button" @click="buttonClick">
      {{ buttonText }}
    </button>
  </div>
</template>

<style scoped>
.buttonBlock,
.videoBlock,
.list {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  margin-top: 2rem;
}

.list {
  list-style-type: none;
  padding: 0;
  margin-top: 5rem;
}

.buttonStart {
  margin-top: 15rem;
}

.listItem {
  border-radius: 20px;
  box-shadow: 4px 2px 6px 0px hsla(160, 100%, 37%, 1);
  padding: 0.5rem 1rem;
}

.listItem:not(:last-child) {
  margin-bottom: 1rem;
}

.video {
  border: 4px solid hsla(160, 100%, 37%, 1);
  border-radius: 20px;
  margin-bottom: 0.5rem;
}

.button {
  width: 200px;
  height: 50px;
  border: 0;
  border-radius: 20px;
  background: hsla(160, 100%, 37%, 1);
  color: white;
  font-size: larger;
  font-weight: 500;
  cursor: pointer;
}

.button:hover {
  box-shadow: 4px 2px 6px 0px hsla(160, 100%, 37%, 1);
}

.button:active {
  box-shadow: none;
}
</style>
