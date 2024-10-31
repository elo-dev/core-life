import { useState } from 'react'
import {
  Container,
  Title,
  TextInput,
  Button,
  Stack,
  Box,
  Text,
  Center,
} from '@mantine/core'

interface Message {
  id: number
  text: string
  sender: string
}

const ChatPage = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState('')

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return

    const message: Message = {
      id: Date.now(),
      text: newMessage,
      sender: 'Вы',
    }

    setMessages([...messages, message])
    setNewMessage('')
  }

  return (
    <Container>
      <Center>
        <Title order={1} mb="xl">
          Чат
        </Title>
      </Center>

      {/* Список сообщений */}
      <Stack gap="sm" mb="md">
        {messages.map((msg) => (
          <Box
            key={msg.id}
            p="md"
            bg={msg.sender === 'Вы' ? 'blue.0' : 'gray.0'}
          >
            <Text w={500}>{msg.sender}:</Text>
            <Text>{msg.text}</Text>
          </Box>
        ))}
      </Stack>

      {/* Поле ввода для нового сообщения */}
      <TextInput
        placeholder="Введите ваше сообщение"
        value={newMessage}
        onChange={(event) => setNewMessage(event.currentTarget.value)}
      />
      <Button mt="md" onClick={handleSendMessage}>
        Отправить
      </Button>
    </Container>
  )
}

export default ChatPage
