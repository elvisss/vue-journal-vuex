import { createStore } from 'vuex'
import journalModule from '../modules/daybook/store'

export default createStore({
  modules: {
    journal: journalModule
  }
})
