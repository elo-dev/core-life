import { useState } from 'react'
import {
  Container,
  Title,
  Card,
  Text,
  Button,
  Group,
  Modal,
  TextInput,
  Checkbox,
  List,
  Center,
} from '@mantine/core'

interface Task {
  id: number
  title: string
  completed: boolean
}

const TasksPage = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [modalOpen, setModalOpen] = useState(false)
  const [newTaskTitle, setNewTaskTitle] = useState('')
  const [editTaskId, setEditTaskId] = useState<number | null>(null)

  const handleAddTask = () => {
    const newTask = { id: Date.now(), title: newTaskTitle, completed: false }
    setTasks([...tasks, newTask])
    setNewTaskTitle('')
    setModalOpen(false)
  }

  const handleToggleTask = (taskId: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const handleDeleteTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId))
  }

  const handleEditTask = (taskId: number) => {
    const task = tasks.find((task) => task.id === taskId)
    if (task) {
      setNewTaskTitle(task.title)
      setEditTaskId(taskId)
      setModalOpen(true)
    }
  }

  const handleSaveEditedTask = () => {
    setTasks(
      tasks.map((task) =>
        task.id === editTaskId ? { ...task, title: newTaskTitle } : task
      )
    )
    setEditTaskId(null)
    setNewTaskTitle('')
    setModalOpen(false)
  }

  return (
    <Container>
      <Center>
        <Title order={1} mb="xl">
          Управление задачами
        </Title>
      </Center>

      {/* Список задач */}
      <Card shadow="sm" padding="lg">
        <Title order={3} mb="md">
          Ваши задачи
        </Title>
        <List spacing="sm">
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <List.Item key={task.id}>
                <Group>
                  <Checkbox
                    label={task.title}
                    checked={task.completed}
                    onChange={() => handleToggleTask(task.id)}
                  />
                  <Group>
                    <Button
                      variant="subtle"
                      color="blue"
                      onClick={() => handleEditTask(task.id)}
                    >
                      Редактировать
                    </Button>
                    <Button
                      variant="subtle"
                      color="red"
                      onClick={() => handleDeleteTask(task.id)}
                    >
                      Удалить
                    </Button>
                  </Group>
                </Group>
              </List.Item>
            ))
          ) : (
            <Text>У вас пока нет задач.</Text>
          )}
        </List>
        <Group mt="md">
          <Button variant="light" onClick={() => setModalOpen(true)}>
            Добавить задачу
          </Button>
        </Group>
      </Card>

      {/* Модальное окно для добавления и редактирования задач */}
      <Modal
        opened={modalOpen}
        onClose={() => {
          setModalOpen(false)
          setEditTaskId(null)
          setNewTaskTitle('')
        }}
        title={editTaskId ? 'Редактировать задачу' : 'Новая задача'}
      >
        <TextInput
          label="Название задачи"
          placeholder="Введите название задачи"
          value={newTaskTitle}
          onChange={(event) => setNewTaskTitle(event.currentTarget.value)}
        />
        <Group mt="md">
          <Button onClick={editTaskId ? handleSaveEditedTask : handleAddTask}>
            {editTaskId ? 'Сохранить' : 'Добавить'}
          </Button>
        </Group>
      </Modal>
    </Container>
  )
}

export default TasksPage
