import axios from 'axios'

const VERSION = 'v1_1'

const cloudinaryApi = axios.create({
  baseURL: `https://api.cloudinary.com/${VERSION}`
})

export default cloudinaryApi
