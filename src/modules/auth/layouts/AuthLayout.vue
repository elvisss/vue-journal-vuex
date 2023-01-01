<template>
  <div class="limiter">
    <div
      class="container-login100"
      :style="{ backgroundImage: `url(${bgPath})` }"
    >
      <div class="wrap-login100 p-t-30 p-b-50">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import bgPath from '@/assets/bg-01.jpg'
</script>

<style lang="scss">
@import '../css/auth.css';
@import '../css/util.css';
</style>
