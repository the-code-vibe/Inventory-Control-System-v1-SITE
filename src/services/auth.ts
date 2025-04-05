import api from "./api"
import { LoginPayload, LoginResponse } from "@/dtos/auth.dto"

export const login = async ({ email, password }: LoginPayload): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>("/auth/login", { email, password })
  return response.data
}
