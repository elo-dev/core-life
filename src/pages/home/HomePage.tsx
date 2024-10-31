import { useNavigate } from 'react-router-dom'
import {
  Container,
  Grid,
  Card,
  Title,
  Text,
  Button,
  Group,
  Center,
  MantineStyleProp,
} from '@mantine/core'

const cardStyle: MantineStyleProp = {
  display: 'flex',
  flexDirection: 'column',
  rowGap: 15,
}

const HomePage = () => {
  const navigate = useNavigate()

  return (
    <Container>
      <Center>
        <Title order={1} mb="xl">
          Core Life
        </Title>
      </Center>

      <Grid>
        {/* Карточка здоровья */}
        <Grid.Col span={4}>
          <Card
            shadow="sm"
            padding="lg"
            mih="100%"
            styles={{ root: cardStyle }}
          >
            <Title order={3}>Здоровье</Title>
            <Text>Последние данные: вес - 70 кг, пульс - 75 уд/мин</Text>
            <Group mt="auto">
              <Button variant="light" onClick={() => navigate('/health')}>
                Добавить данные
              </Button>
            </Group>
          </Card>
        </Grid.Col>

        {/* Карточка финансов */}
        <Grid.Col span={4}>
          <Card
            shadow="sm"
            padding="lg"
            mih="100%"
            styles={{ root: cardStyle }}
          >
            <Title order={3}>Финансы</Title>
            <Text>Баланс: 30 000 ₽, расходы: 15 000 ₽</Text>
            <Group mt="auto">
              <Button variant="light" onClick={() => navigate('/finance')}>
                Добавить транзакцию
              </Button>
            </Group>
          </Card>
        </Grid.Col>

        {/* Карточка задач */}
        <Grid.Col span={4}>
          <Card
            shadow="sm"
            padding="lg"
            mih="100%"
            styles={{ root: cardStyle }}
          >
            <Title order={3}>Задачи</Title>
            <Text>Сегодня: 3 задачи</Text>
            <Group mt="auto">
              <Button variant="light" onClick={() => navigate('/tasks')}>
                Добавить задачу
              </Button>
            </Group>
          </Card>
        </Grid.Col>

        {/* Карточка чата */}
        <Grid.Col span={6}>
          <Card
            shadow="sm"
            padding="lg"
            mih="100%"
            styles={{ root: cardStyle }}
          >
            <Title order={3}>Чат</Title>
            <Text>Новые сообщения</Text>
            <Group mt="auto">
              <Button variant="light" onClick={() => navigate('/chat')}>
                Перейти в чат
              </Button>
            </Group>
          </Card>
        </Grid.Col>

        {/* Карточка профиля пользователя */}
        <Grid.Col span={6}>
          <Card
            shadow="sm"
            padding="lg"
            mih="100%"
            styles={{ root: cardStyle }}
          >
            <Title order={3}>Профиль</Title>
            <Text>Статус: авторизован</Text>
            <Group mt="auto">
              <Button variant="light" onClick={() => navigate('/profile')}>
                Перейти в профиль
              </Button>
            </Group>
          </Card>
        </Grid.Col>
      </Grid>
    </Container>
  )
}

export default HomePage
