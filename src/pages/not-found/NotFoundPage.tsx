import { useNavigate } from 'react-router-dom'
import { Center, Container, Title, Text, Button, Group } from '@mantine/core'

const NotFoundPage = () => {
  const navigate = useNavigate()

  const goHome = () => {
    navigate('/')
  }

  return (
    <Container style={{ textAlign: 'center', paddingTop: 50 }}>
      <Title order={1} style={{ fontSize: 50, fontWeight: 900 }}>
        404
      </Title>
      <Text c="dimmed" size="lg" mt="md">
        Страница не найдена. Возможно, вы ошиблись адресом.
      </Text>
      <Center>
        <Group mt="lg">
          <Button onClick={goHome} variant="outline" size="md">
            Вернуться на главную
          </Button>
        </Group>
      </Center>
    </Container>
  )
}

export default NotFoundPage
