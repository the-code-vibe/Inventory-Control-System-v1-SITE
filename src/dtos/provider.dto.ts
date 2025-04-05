export interface Provider {
    uuid: string
    name: string
    cnpj: string
    contact: string
    created_at: string
    updated_at: string
}
  
export interface CreateProviderPayload {
    name: string    
    cnpj: string
    contact: string
}
  
export interface UpdateProviderPayload extends Partial<CreateProviderPayload> {}