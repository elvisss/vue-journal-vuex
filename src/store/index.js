import { createStore } from 'vuex'
import journalModule from '../modules/daybook/store'
import authModule from '../modules/auth/store'

export default createStore({
  modules: {
    journal: journalModule,
    auth: authModule,
  }
})
