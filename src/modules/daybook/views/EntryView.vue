<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-3 fw-bold">15</span>
      <span class="mx-1 fs-3">Mes</span>
      <span class="mx-2 fs-4 fw-light">Year</span>
    </div>
    <div>
      <button class="btn btn-danger mx-2">
        Borrar
        <font-awesome-icon :icon="['fas', 'fa-trash-alt']" />
      </button>
      <button class="btn btn-primary">
        Borrar
        <font-awesome-icon :icon="['fas', 'fa-upload']" />
      </button>
    </div>
  </div>

  <hr />

  <div class="d-flex flex-column px-3 h-75">
    <textarea
      name=""
      id=""
      cols="30"
      rows="3"
      placeholder="What happened today?"
    ></textarea>
  </div>

  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" alt="entry-picture">

  <Fab icon="fa-save" />
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    Fab: defineAsyncComponent(() => import('../components/Fab.vue'))
  },
  props: {
    id: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
textarea {
  background-color: transparent;
  font-size: 20px;
  border: none;
  height: 100%;
  color: white;

  &:focus {
    outline: none;
  }
}

img {
  width: 200px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  box-shadow: 0px 5px 10px rgba($color: #000, $alpha: 0.2);
}
</style>
