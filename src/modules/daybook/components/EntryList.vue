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
  height: calc(100vh - 62px);
}
.entry-scroll-area {
  height: calc(100vh - 110px);
  overflow-y: auto;
}
</style>
