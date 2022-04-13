import axios from 'axios'

const api = axios.create({
    baseURL: 'https://aleviegas-happy-api.herokuapp.com/'
})

export default api;