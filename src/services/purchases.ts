import api from "./api"
import {
  Purchase,
  CreatePurchasePayload,
  UpdatePurchasePayload
} from "@/dtos/purchases.dto"

export const getAllPurchases = async (): Promise<Purchase[]> => {
  const response = await api.get<Purchase[]>("/purchases")
  return response.data
}

export const getPurchaseById = async (uuid: string): Promise<Purchase> => {
  const response = await api.get<Purchase>(`/purchases/${uuid}`)
  return response.data
}

export const createPurchase = async (payload: CreatePurchasePayload): Promise<Purchase> => {
  const response = await api.post<Purchase>("/purchases", payload)
  return response.data
}

export const updatePurchase = async (
  uuid: string,
  payload: UpdatePurchasePayload
): Promise<Purchase> => {
  const response = await api.put<Purchase>(`/purchases/${uuid}`, payload)
  return response.data
}

export const deletePurchase = async (uuid: string): Promise<void> => {
  await api.delete(`/purchases/${uuid}`)
}