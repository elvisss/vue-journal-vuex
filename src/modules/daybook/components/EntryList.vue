<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input
        v-model="term"
        type="text"
        name=""
        id=""
        class="form-control"
        placeholder="search entry"
      />
    </div>

    <div class="mt-2 d-flex flex-column">
      <button
        @click="
          $router.push({ name: 'daybook-entry', params: { daybookid: 'new' } })
        "
        class="btn btn-primary mx-3"
      >
        <font-awesome-icon :icon="['fas', 'fa-plus-circle']" />
        New Entry
      </button>
    </div>

    <div class="entry-scroll-area">
      <Entry v-for="entry in entriesByTerm" :key="entry.id" :entry="entry" />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    Entry: defineAsyncComponent(() => import('./Entry.vue'))
  },
  data() {
    return {
      term: ''
    }
  },
  computed: {
    ...mapGetters({
      getEntriesByTerm: 'journal/getEntriesByTerm'
    }),
    entriesByTerm() {
      return this.getEntriesByTerm(this.term)
    }
  }
}
</script>

<style lang="scss" scoped>
.entry-list-container {
  border-right: 1px solid #2c3e50;
  height: calc(100vh - 65px);
}
.entry-scroll-area {
  height: calc(100vh - 155px);
  overflow-y: auto;
}
</style>
