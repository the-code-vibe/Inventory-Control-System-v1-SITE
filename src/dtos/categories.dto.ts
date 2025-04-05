export interface Categories {
    uuid: string
    title: string
    created_at: string
    updated_at: string
}
  
export interface CreateCategoriesPayload {
    title: string
}
  
export interface UpdateCategoriesPayload extends Partial<CreateCategoriesPayload> {}
  