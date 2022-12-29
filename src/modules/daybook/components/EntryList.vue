<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input
        type="text"
        name=""
        id=""
        class="form-control"
        placeholder="search entry"
      />
    </div>
    <div class="entry-scroll-area">
      <Entry v-for="item in 20" :key="item" :id="item" />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    Entry: defineAsyncComponent(() => import('./Entry.vue'))
  }
}
</script>

<style lang="scss" scoped>
.entry-list-container {
  border-right: 1px solid #2c3e50;
  height: calc(100vh - 62px);
}
.entry-scroll-area {
  height: calc(100vh - 110px);
  overflow-y: auto;
}
</style>
