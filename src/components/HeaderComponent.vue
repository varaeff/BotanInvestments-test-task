<script setup lang="ts">
import { headers } from '@/data/data'
import { useStageStore } from '@/stores/stage'
import { computed } from 'vue'

const stageStore = useStageStore()

const mainHeader = computed(() => {
  switch (stageStore.stage) {
    case 0:
      return headers[0].header
    case 4:
      return headers[2].header
    default:
      return headers[1].header
  }
})

const addHeader = computed(() =>
  stageStore.stage > 0 && stageStore.stage < 4 ? ` ${stageStore.stage}.` : '',
)
</script>

<template>
  <div class="head">
    <h1 class="green">{{ mainHeader }}{{ addHeader }}</h1>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

.head h1 {
  text-align: center;
}
</style>
