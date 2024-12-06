import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStageStore = defineStore('stage', () => {
  const stage = ref(0)
  function increment() {
    stage.value++
  }

  return { stage, increment }
})
