import { configureStore } from '@reduxjs/toolkit'
import userRegistration from '@features/user-registration/model/userRegistrationSlice'

export const store = configureStore({
  reducer: {
    userRegistration,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
