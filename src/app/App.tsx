import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'

import UserRegistrationPage from '@pages/user-registration/UserRegistrationPage'
import LoginPage from '@pages/user-login/UserLoginPage'
import NotFoundPage from '@pages/not-found/NotFoundPage'
import HomePage from '@pages/home/HomePage'
import HealthPage from '@pages/health/HealthPage'
import FinancePage from '@pages/finance/FinancePage'
import TasksPage from '@pages/tasks/TasksPage'
import ProfilePage from '@pages/profile/ProfilePage'

import PrivateRoute from '@shared/routes/PrivateRoute'

import '@mantine/core/styles.css'
import ChatPage from '@pages/chat/ChatPage'

function App() {
  return (
    <MantineProvider withGlobalClasses>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<UserRegistrationPage />} />

          {/* Защищенные маршруты */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />

          <Route
            path="/health"
            element={
              <PrivateRoute>
                <HealthPage />
              </PrivateRoute>
            }
          />

          <Route
            path="/finance"
            element={
              <PrivateRoute>
                <FinancePage />
              </PrivateRoute>
            }
          />

          <Route
            path="/tasks"
            element={
              <PrivateRoute>
                <TasksPage />
              </PrivateRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />

          <Route
            path="/chat"
            element={
              <PrivateRoute>
                <ChatPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </MantineProvider>
  )
}

export default App
