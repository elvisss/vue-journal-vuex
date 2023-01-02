import axios from 'axios'

const VERSION = 'v1'
const API_KEY = import.meta.env.VITE_FIREBASE_API_KEY

const authApi = axios.create({
  baseURL: `https://identitytoolkit.googleapis.com/${VERSION}/accounts`,
  params: {
    key: API_KEY
  }
})

export default authApi
