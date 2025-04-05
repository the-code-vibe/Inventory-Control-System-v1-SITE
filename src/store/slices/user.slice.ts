import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface User {
  uuid: string
  name: string
  email: string
  avatar: string
  phone: string
  status: number
  is_admin: boolean
}

const initialState: User = {
  uuid: "",
  name: "",
  email: "",
  avatar: "",
  phone: "",
  status: 0,
  is_admin: false
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      return action.payload
    },
    clearUser() {
      return initialState
    }
  }
})

export const { setUser, clearUser } = userSlice.actions
export default userSlice.reducer