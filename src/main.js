import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone, faSignOutAlt, faUserSecret, faPlus, faTrashAlt, faUpload, faSave, faSync, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faAngry } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPhone, faTwitter, faUserSecret, faSignOutAlt, faAngry, faPlus, faTrashAlt, faUpload, faSave, faSync, faPlusCircle)

import './scss/styles.scss'
import './assets/main.css'

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(store)
app.use(router)

app.mount('#app')
