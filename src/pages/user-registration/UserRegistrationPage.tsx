import { Container } from '@mantine/core'
import RegistrationForm from '@features/user-registration/ui/RegistrationForm'

const UserRegistrationPage = () => {
  return (
    <Container>
      <h1>Регистрация</h1>
      <RegistrationForm />
    </Container>
  )
}

export default UserRegistrationPage
