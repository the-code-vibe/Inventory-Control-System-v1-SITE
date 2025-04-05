import axios, { AxiosInstance } from "axios"

const api: AxiosInstance = axios.create({
  baseURL: "https://collaborative.vitorgabrieldev.io/gerenciador-estoque/api/"
})

export default api