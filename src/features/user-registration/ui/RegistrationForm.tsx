import { useDispatch, useSelector } from 'react-redux'
import {
  setUsername,
  setEmail,
  setPassword,
  registerUser,
} from '../model/userRegistrationSlice'
import { RootState } from '@app/store'
import { Button, TextInput, PasswordInput, Group, Alert } from '@mantine/core'

const RegistrationForm = () => {
  const dispatch = useDispatch()
  const { username, email, password, error } = useSelector(
    (state: RootState) => state.userRegistration
  )

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    dispatch(registerUser())
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        label="Имя пользователя"
        value={username}
        onChange={(e) => dispatch(setUsername(e.currentTarget.value))}
        required
      />
      <TextInput
        label="Email"
        type="email"
        value={email}
        onChange={(e) => dispatch(setEmail(e.currentTarget.value))}
        required
      />
      <PasswordInput
        label="Пароль"
        value={password}
        onChange={(e) => dispatch(setPassword(e.currentTarget.value))}
        required
      />

      {error && <Alert color="red">{error}</Alert>}

      <Group mt="md">
        <Button type="submit">Зарегистрироваться</Button>
      </Group>
    </form>
  )
}

export default RegistrationForm
