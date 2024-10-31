import { useState } from 'react'
import {
  Container,
  Title,
  Card,
  Grid,
  Button,
  Group,
  Modal,
  TextInput,
  Text,
  Center,
} from '@mantine/core'

interface Transaction {
  type: string
  amount: number
  date: string
}

const FinancePage = () => {
  const [income, setIncome] = useState(80000)
  const [expenses, setExpenses] = useState(20000)
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [modalOpen, setModalOpen] = useState(false)
  const [transactionType, setTransactionType] = useState('income')
  const [amount, setAmount] = useState('')

  const handleAddTransaction = () => {
    const newTransaction = {
      type: transactionType,
      amount: parseFloat(amount),
      date: new Date().toLocaleDateString(),
    }

    setTransactions([...transactions, newTransaction])
    if (transactionType === 'income') setIncome(income + parseFloat(amount))
    else setExpenses(expenses + parseFloat(amount))
    setModalOpen(false)
    setAmount('')
  }

  return (
    <Container>
      <Center>
        <Title order={1} mb="xl">
          Финансовый трекер
        </Title>
      </Center>

      <Grid>
        {/* Карточка доходов */}
        <Grid.Col span={6}>
          <Card shadow="sm" padding="lg">
            <Title order={3}>Доходы</Title>
            <Text size="xl" w={700}>
              {income} ₽
            </Text>
            <Group mt="md">
              <Button
                variant="light"
                onClick={() => {
                  setModalOpen(true)
                  setTransactionType('income')
                }}
              >
                Добавить доход
              </Button>
            </Group>
          </Card>
        </Grid.Col>

        {/* Карточка расходов */}
        <Grid.Col span={6}>
          <Card shadow="sm" padding="lg">
            <Title order={3}>Расходы</Title>
            <Text size="xl" w={700}>
              {expenses} ₽
            </Text>
            <Group mt="md">
              <Button
                variant="light"
                onClick={() => {
                  setModalOpen(true)
                  setTransactionType('expense')
                }}
              >
                Добавить расход
              </Button>
            </Group>
          </Card>
        </Grid.Col>
      </Grid>

      {/* История транзакций */}
      <Title order={2} mt="xl">
        История транзакций
      </Title>
      {transactions.length > 0 ? (
        <ul>
          {transactions.map((transaction, index) => (
            <li key={index}>
              <Text>
                {transaction.date} -{' '}
                {transaction.type === 'income' ? 'Доход' : 'Расход'}:{' '}
                {transaction.amount} ₽
              </Text>
            </li>
          ))}
        </ul>
      ) : (
        <Text>Транзакций пока нет</Text>
      )}

      {/* Модальное окно для добавления транзакции */}
      <Modal
        opened={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Добавить транзакцию"
      >
        <TextInput
          label="Сумма"
          placeholder="Например, 5000"
          value={amount}
          onChange={(event) => setAmount(event.currentTarget.value)}
        />
        <Group mt="md">
          <Button onClick={handleAddTransaction}>Сохранить</Button>
        </Group>
      </Modal>
    </Container>
  )
}

export default FinancePage
