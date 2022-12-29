<template>
  <div @click="goTo" class="entry-container mb-3 pointer p-2">
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">15 - id {{ id }}</span>
      <span class="mx-1 fs-5">Julio</span>
      <span class="mx-2 fw-light">2022, miércoles</span>
    </div>
    <div class="entry-description">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit sunt
      aliquam eveniet facere nostrum dolorem vel, dolore accusantium dolor
      voluptatibus esse eos quasi, nesciunt ipsam doloribus deserunt ipsa
      maiores animi.
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  methods: {
    goTo() {
      this.$router.push({ name: 'daybook-entry', params: { daybookid: this.id } })
    }
  }
}
</script>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: lighten($color: black, $amount: 45);
  }
}

.entry-description {
  font-size: 12px;
}
</style>
