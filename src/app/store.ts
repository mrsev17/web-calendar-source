import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import calendarUiReducer from '../features/Calendar/model/calendarSlice'
import notificationReducer from '../features/notification/model/notificationSlice'
import userSlice from '../features/auth/userSlice'

const rootReducer = combineReducers({
  calendar: calendarUiReducer,
  notifications: notificationReducer,
  user: userSlice,
})

const persistConfig = {
  key: 'calendar-app',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
