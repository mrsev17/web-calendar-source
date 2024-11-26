import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../../app/store'

interface InitialState {
  message: string
  isVisible: boolean
}

const initialState: InitialState = {
  message: '',
  isVisible: true,
}

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    showNotification(state, action: PayloadAction<string>) {
      state.message = action.payload
      state.isVisible = true
    },
    hideNotification(state) {
      state.message = ''
      state.isVisible = false
    },
  },
})

export const selectMessage = (state: RootState) => state.notifications.message
export const selectVisibility = (state: RootState) => state.notifications.isVisible

export const { showNotification, hideNotification } = notificationSlice.actions
export default notificationSlice.reducer
