<script setup lang="ts">
import { ref as firebaseRef, get } from 'firebase/database'
import { database } from '@/firebaseConfig'
import { onMounted, onUnmounted, ref as vueRef } from 'vue'

const count = vueRef(0)
const loaded = vueRef(false)
let intervalId: null | number = null

onMounted(() => {
  fetchCounter()
  intervalId = setInterval(fetchCounter, 10000)
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})

async function fetchCounter() {
  try {
    const counterRef = firebaseRef(database, 'onboarding/completed')
    const snapshot = await get(counterRef)
    const data = snapshot.val()
    count.value = data?.count || 0
    loaded.value = true
  } catch (error) {
    console.error('Error during getting counter: ', error)
  }
}
</script>

<template>
  <div class="about">
    <div v-if="!loaded" class="loader"></div>
    <h1 v-else>The onboarding process completed {{ count }} times</h1>
  </div>
</template>

<style scoped>
.about {
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loader {
  width: 48px;
  height: 48px;
  border: 5px solid hsla(160, 100%, 37%, 1);
  border-bottom-color: #ff3d00;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
