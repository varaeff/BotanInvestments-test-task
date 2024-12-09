<script setup lang="ts">
import type { videoBlock } from '@/data/data'
import { ref, watch } from 'vue'
import PreloaderComponent from './PreloaderComponent.vue'

const props = defineProps<{
  clip: videoBlock
}>()

const isLoading = ref(true)

watch(
  () => props.clip,
  () => {
    isLoading.value = true
  },
)

const handleVideoLoaded = () => {
  isLoading.value = false
}
</script>

<template>
  <div class="videoWrapper">
    <PreloaderComponent v-if="isLoading" />
    <video
      v-show="!isLoading"
      class="video"
      :src="clip.link"
      autoplay
      muted
      playsinline
      loop
      @loadeddata="handleVideoLoaded"
      style="height: auto; width: 200px"
    ></video>
    <p>{{ clip.description }}</p>
  </div>
</template>

<style scoped>
.videoWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.video {
  border: 4px solid hsla(160, 100%, 37%, 1);
  border-radius: 20px;
  margin-bottom: 0.5rem;
}
</style>
