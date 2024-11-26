import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

interface InitialState {
  email: null | string
  token: null | string
  userID: null | string
}

const initialState: InitialState = {
  email: null,
  token: null,
  userID: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<InitialState>) {
      state.email = action.payload.email
      state.token = action.payload.token
      state.userID = action.payload.userID
    },
    removeUser(state) {
      state.email = null
      state.token = null
      state.userID = null
    },
  },
})

export const selectUserId = (state: RootState) => state.user.userID
export const selectUserEmail = (state: RootState) => state.user.email

export const { setUser, removeUser } = userSlice.actions

export default userSlice.reducer
