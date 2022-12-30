<template>
  <div class="d-flex align-items-center justify-content-center">
    <h1>No hay nada seleccionado</h1>
  </div>
  <Fab
    @on:click="goToCreateNewEntry"
  />
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    Fab: defineAsyncComponent(() => import('../components/Fab.vue'))
  },
  methods: {
    goToCreateNewEntry() {
      this.$router.push({
        name: 'daybook-entry',
        params: {
          daybookid: 'new'
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  height: 100%;
}
</style>
