export interface Purchase {
    uuid: string
    id_products: string
    id_providers: string
    quantity: number
    price: number
    purcharse_date: number
    created_at: string
    updated_at: string
}
  
export interface CreatePurchasePayload {
    id_products: string
    id_providers: string
    quantity: number
    price: number
}
  
export interface UpdatePurchasePayload extends Partial<CreatePurchasePayload> {}
  