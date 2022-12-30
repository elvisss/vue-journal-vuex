import axios from 'axios'

const journalApi = axios.create({
  baseURL: 'https://vue-demos-9dbbe-default-rtdb.firebaseio.com'
})

export default journalApi
