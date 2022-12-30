<template>
  <button @click="$emit('on:click')" class="btn btn-primary">
    <font-awesome-icon :icon="['fas', icon]" />
  </button>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'fa-plus'
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  border-radius: 100%;
  bottom: 20px;
  height: 80px;
  position: fixed;
  right: 20px;
  width: 80px;
}

svg {
  font-size: 2rem;
}
</style>
