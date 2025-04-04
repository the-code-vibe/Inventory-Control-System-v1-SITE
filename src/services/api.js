import axios from "axios"

const api = axios.create({
  baseURL: "https://collaborative.vitorgabrieldev.io/gerenciador-estoque/api/"
})

export default api
