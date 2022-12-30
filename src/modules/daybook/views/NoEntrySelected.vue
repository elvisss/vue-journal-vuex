<template>
  <div class="d-flex align-items-center justify-content-center">
    <h1>No hay nada seleccionado</h1>
  </div>
  <Fab
    @on:click="newEntry"
  />
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    Fab: defineAsyncComponent(() => import('../components/Fab.vue'))
  },
  methods: {
    async newEntry() {
      console.log('newEntry')
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  height: 100%;
}
</style>
