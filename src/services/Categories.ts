import api from "./api"
import {
  Categories,
  CreateCategoriesPayload,
  UpdateCategoriesPayload
} from "@/dtos/categories.dto"

export const getAllCategories = async (): Promise<Categories[]> => {
  const response = await api.get<Categories[]>("/categories")
  return response.data
}

export const getCategoriesById = async (uuid: string): Promise<Categories> => {
  const response = await api.get<Categories>(`/categories/${uuid}`)
  return response.data
}

export const createCategories = async (payload: CreateCategoriesPayload): Promise<Categories> => {
  const response = await api.post<Categories>("/categories", payload)
  return response.data
}

export const updateCategories = async (
  uuid: string,
  payload: UpdateCategoriesPayload
): Promise<Categories> => {
  const response = await api.put<Categories>(`/categories/${uuid}`, payload)
  return response.data
}

export const deleteCategories = async (uuid: string): Promise<void> => {
  await api.delete(`/categories/${uuid}`)
}