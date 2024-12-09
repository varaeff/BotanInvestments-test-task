<script setup lang="ts">
import { ref as firebaseRef, get } from 'firebase/database'
import { database } from '@/firebaseConfig'
import { onMounted, onUnmounted, ref as vueRef } from 'vue'
import PreloaderComponent from '@/components/PreloaderComponent.vue'

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
    <PreloaderComponent v-if="!loaded" />
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
</style>
