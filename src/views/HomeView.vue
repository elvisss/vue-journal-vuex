<template>
  <main>
    <h1>Welcome</h1>
    <button @click="goToDayBook" class="btn btn-primary">primary</button>
    <button @click="goToDayBook" class="btn btn-secondary">secondary</button>
    <button @click="goToDayBook" class="btn btn-success">success</button>
  </main>
</template>

<script>
export default {
  methods: {
    goToDayBook() {
      this.$router.push({ name: 'daybook' })
    }
  }
}
</script>
