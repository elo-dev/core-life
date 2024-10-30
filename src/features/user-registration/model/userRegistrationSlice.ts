import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserRegistrationState {
  username: string
  email: string
  password: string
  error: string | null
}

const initialState: UserRegistrationState = {
  username: '',
  email: '',
  password: '',
  error: null,
}

const userRegistrationSlice = createSlice({
  name: 'userRegistration',
  initialState,
  reducers: {
    setUsername(state, action: PayloadAction<string>) {
      state.username = action.payload
    },
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload
    },
    registerUser(state) {
      console.log('Регистрация пользователя', state)
      state.username = ''
      state.email = ''
      state.password = ''
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload
    },
  },
})

export const { setUsername, setEmail, setPassword, registerUser, setError } =
  userRegistrationSlice.actions

export default userRegistrationSlice.reducer
