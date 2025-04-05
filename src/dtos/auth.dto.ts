export interface LoginPayload {
    email: string
    password: string
}

export interface LoginResponse {
    success: boolean
    message: string
    data: {
        token: string
        user: {
        uuid: string
        name: string
        email: string
        avatar: string
        phone: string
        status: number
        is_admin: boolean
        }
    }
}