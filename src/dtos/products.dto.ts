export interface Product {
    uuid: string
    title: string
    description: string
    price: number
    quantity: number
    id_category: string
    provider_id_provideruuid: string
    unit_type: string
    created_at: string
    updated_at: string
}

export interface CreateProductPayload {
    title: string
    description: string
    price: number
    quantity: number
    id_category: string
    id_provider: string
    unit_type: string
}
  
export interface UpdateProductPayload extends Partial<CreateProductPayload> {}