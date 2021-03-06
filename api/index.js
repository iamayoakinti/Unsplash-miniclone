import axios from 'axios'
import config from '../config'

const instance = axios.create({
  baseURL: config.baseURL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`
  }
})

export default instance
