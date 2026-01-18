import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://olive-guests-stay.loca.lt/api/',
  timeout: 15000,
})
