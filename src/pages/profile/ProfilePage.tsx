import { useState } from 'react'
import {
  Container,
  Title,
  Card,
  Text,
  Button,
  Group,
  Avatar,
  Modal,
  TextInput,
  Center,
} from '@mantine/core'

interface UserProfile {
  name: string
  email: string
  avatarUrl: string
}

const ProfilePage = () => {
  const [user, setUser] = useState<UserProfile>({
    name: 'Иван Иванов',
    email: 'ivan@example.com',
    avatarUrl: 'https://i.pravatar.cc/150?img=2',
  })

  const [modalOpen, setModalOpen] = useState(false)
  const [editName, setEditName] = useState(user.name)
  const [editEmail, setEditEmail] = useState(user.email)

  const handleSaveChanges = () => {
    setUser({ ...user, name: editName, email: editEmail })
    setModalOpen(false)
  }

  return (
    <Container>
      <Center>
        <Title order={1} mb="xl">
          Профиль пользователя
        </Title>
      </Center>

      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Group>
          <Avatar src={user.avatarUrl} alt="Аватар" size={120} radius="xl" />
        </Group>

        <Title order={3} mt="md">
          {user.name}
        </Title>
        <Text c="dimmed">{user.email}</Text>

        <Group mt="md">
          <Button variant="light" onClick={() => setModalOpen(true)}>
            Редактировать профиль
          </Button>
        </Group>
      </Card>

      {/* Модальное окно для редактирования профиля */}
      <Modal
        opened={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Редактировать профиль"
      >
        <TextInput
          label="Имя"
          placeholder="Введите ваше имя"
          value={editName}
          onChange={(event) => setEditName(event.currentTarget.value)}
        />
        <TextInput
          label="Email"
          placeholder="Введите ваш email"
          value={editEmail}
          onChange={(event) => setEditEmail(event.currentTarget.value)}
          mt="md"
        />
        <Group mt="md">
          <Button onClick={handleSaveChanges}>Сохранить изменения</Button>
        </Group>
      </Modal>
    </Container>
  )
}

export default ProfilePage
