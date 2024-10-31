import { useState } from 'react'
import {
  Container,
  Title,
  Text,
  Card,
  Grid,
  Button,
  Group,
  Modal,
  TextInput,
  Center,
} from '@mantine/core'

const HealthPage = () => {
  const [type, setType] = useState('')
  const [weight, setWeight] = useState(70)
  const [pulse, setPulse] = useState(75)
  const [sleep, setSleep] = useState(7)
  const [activity, setActivity] = useState(5000)
  const [modalOpen, setModalOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const handleAddData = (type: string) => {
    setModalOpen(true)
    setType(type)
  }

  const handleSaveData = () => {
    if (type === 'weight') setWeight(Number(inputValue))
    else if (type === 'pulse') setPulse(Number(inputValue))
    else if (type === 'sleep') setSleep(Number(inputValue))
    else if (type === 'activity') setActivity(Number(inputValue))
    setModalOpen(false)
    setInputValue('')
  }

  return (
    <Container>
      <Center>
        <Title order={1} mb="xl">
          Отслеживание здоровья
        </Title>
      </Center>

      <Grid>
        {/* Карточка веса */}
        <Grid.Col span={3}>
          <Card shadow="sm" padding="lg">
            <Title order={3}>Вес</Title>
            <Text size="xl" w={700}>
              {weight} кг
            </Text>
            <Group mt="md">
              <Button variant="light" onClick={() => handleAddData('weight')}>
                Обновить вес
              </Button>
            </Group>
          </Card>
        </Grid.Col>

        {/* Карточка пульса */}
        <Grid.Col span={3}>
          <Card shadow="sm" padding="lg">
            <Title order={3}>Пульс</Title>
            <Text size="xl" w={700}>
              {pulse} уд/мин
            </Text>
            <Group mt="md">
              <Button variant="light" onClick={() => handleAddData('pulse')}>
                Обновить пульс
              </Button>
            </Group>
          </Card>
        </Grid.Col>

        {/* Карточка сна */}
        <Grid.Col span={3}>
          <Card shadow="sm" padding="lg">
            <Title order={3}>Сон</Title>
            <Text size="xl" w={700}>
              {sleep} часов
            </Text>
            <Group mt="md">
              <Button variant="light" onClick={() => handleAddData('sleep')}>
                Обновить сон
              </Button>
            </Group>
          </Card>
        </Grid.Col>

        {/* Карточка активности */}
        <Grid.Col span={3}>
          <Card shadow="sm" padding="lg">
            <Title order={3}>Активность</Title>
            <Text size="xl" w={700}>
              {activity} шагов
            </Text>
            <Group mt="md">
              <Button variant="light" onClick={() => handleAddData('activity')}>
                Обновить активность
              </Button>
            </Group>
          </Card>
        </Grid.Col>
      </Grid>

      {/* Модальное окно для обновления данных */}
      <Modal
        opened={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Обновить данные"
      >
        <TextInput
          label="Введите новое значение"
          placeholder="Например, 75"
          value={inputValue}
          onChange={(event) => setInputValue(event.currentTarget.value)}
        />
        <Group mt="md">
          <Button onClick={handleSaveData}>Сохранить</Button>
        </Group>
      </Modal>
    </Container>
  )
}

export default HealthPage
