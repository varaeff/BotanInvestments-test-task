<script setup lang="ts">
import HeaderComponent from '../components/HeaderComponent.vue'
import OnboardingComponent from '../components/OnboardingComponent.vue'
</script>

<template>
  <header>
    <HeaderComponent class="wrapper" />
  </header>
  <main>
    <OnboardingComponent />
  </main>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background: linear-gradient(to bottom, white 75%, rgba(255, 255, 255, 0) 100%);
  padding: 1rem;
  line-height: 1.5;
}
</style>
