<template>
  <NavBar />

  <template v-if="isLoading">
    <div class="row justify-content-md-center">
      <div class="col-3 alert alert-info text-center mt-5">
        Espere por favor...
        <h3 class="mt-2">
          <font-awesome-icon :icon="['fas', 'fa-sync']" spin />
        </h3>
      </div>
    </div>
  </template>

  <template v-else>
    <div class="d-flex">
      <div class="col-4">
        <EntryList />
      </div>
      <div class="col-8">
        <router-view />
      </div>
    </div>
  </template>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapActions, mapState } from 'vuex'

export default {
  components: {
    NavBar: defineAsyncComponent(() => import('../components/NavBar.vue')),
    EntryList: defineAsyncComponent(() => import('../components/EntryList.vue'))
  },
  methods: {
    ...mapActions('journal', ['loadEntries'])
  },
  created() {
    this.loadEntries()
  },
  computed: {
    ...mapState('journal', ['isLoading', 'entries'])
  }
}
</script>
