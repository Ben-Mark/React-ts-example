// ** Redux Imports
import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";


export type UserState = {
  user: UserType
}

export type UserType = {
  email: string
}


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      email: "false",
    },
  } as UserState,
  reducers: {
    setUser: (state: UserState, action: PayloadAction<UserType>) => {
      state.user = action.payload
    }
  }
})

export const {
  setUser,
} = userSlice.actions

export default userSlice.reducer
