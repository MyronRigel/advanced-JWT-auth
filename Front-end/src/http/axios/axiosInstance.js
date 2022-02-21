import axios from 'axios'

const API_URL = 'http://localhost:5000/api'

const $axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
})


const authInterceptor = config => {
  config.headers.authorization = `Bearer ${localStorage.getItem('access_token')}`
  return config
}

$axiosInstance.interceptors.request.use(authInterceptor)

$axiosInstance.interceptors.response.use((config) => {
  return config
}, async (error) => {
  const originalRequest = error.config
  if (error.response.status == 401 && error.config && !error.config._isRetry) {
    originalRequest._isRetry = true
    try {
      const response = await $axiosInstance.get(`/users/refresh`)
      localStorage.setItem('access_token', response.data.access_token)

      return $axiosInstance.request(originalRequest)
    } catch (err) {
      console.log(err)
    }
  }
  throw error
})

export {
  $axiosInstance,
}