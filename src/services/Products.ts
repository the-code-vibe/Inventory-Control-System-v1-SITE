import api from "./api"
import {
  Product,
  CreateProductPayload,
  UpdateProductPayload
} from "@/dtos/products.dto"

export const getAllProducts = async (): Promise<Product[]> => {
  const response = await api.get<Product[]>("/products")
  return response.data
}

export const getProductById = async (uuid: string): Promise<Product> => {
  const response = await api.get<Product>(`/products/${uuid}`)
  return response.data
}

export const createProduct = async (payload: CreateProductPayload): Promise<Product> => {
  const response = await api.post<Product>("/products", payload)
  return response.data
}

export const updateProduct = async (
  uuid: string,
  payload: UpdateProductPayload
): Promise<Product> => {
  const response = await api.put<Product>(`/products/${uuid}`, payload)
  return response.data
}

export const deleteProduct = async (uuid: string): Promise<void> => {
  await api.delete(`/products/${uuid}`)
}