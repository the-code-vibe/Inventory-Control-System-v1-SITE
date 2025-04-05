import axios, { AxiosInstance } from "axios"

const api: AxiosInstance = axios.create({
  baseURL: "https://collaborative.vitorgabrieldev.io/gerenciador-estoque/api/"
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token")
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

api.interceptors.response.use(
  response => response,
  error => {
    const code = error.response?.data?.code

    if (code === "TOKEN_INVALID" || code === "USER_NOT_FOUND") {
      localStorage.clear()
      window.location.href = "/login"
    }

    return Promise.reject(error)
  }
)

export default api