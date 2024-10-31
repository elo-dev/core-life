import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  TextInput,
  PasswordInput,
  Button,
  Container,
  Group,
} from '@mantine/core'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault()
    localStorage.setItem('token', 'any-token')
    navigate('/')
  }

  return (
    <Container>
      <h1>Вход</h1>
      <form onSubmit={handleLogin}>
        <TextInput
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          required
        />
        <PasswordInput
          label="Пароль"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
          required
        />
        <Group mt="md">
          <Button type="submit">Войти</Button>
        </Group>
      </form>
    </Container>
  )
}

export default LoginPage
