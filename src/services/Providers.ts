import api from "./api"
import {
  Provider,
  CreateProviderPayload,
  UpdateProviderPayload
} from "@/dtos/provider.dto"

export const getAllProviders = async (): Promise<Provider[]> => {
  const response = await api.get<Provider[]>("/providers")
  return response.data
}

export const getProviderById = async (uuid: string): Promise<Provider> => {
  const response = await api.get<Provider>(`/providers/${uuid}`)
  return response.data
}

export const createProvider = async (payload: CreateProviderPayload): Promise<Provider> => {
  const response = await api.post<Provider>("/providers", payload)
  return response.data
}

export const updateProvider = async (
  uuid: string,
  payload: UpdateProviderPayload
): Promise<Provider> => {
  const response = await api.put<Provider>(`/providers/${uuid}`, payload)
  return response.data
}

export const deleteProvider = async (uuid: string): Promise<void> => {
  await api.delete(`/providers/${uuid}`)
}