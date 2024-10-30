import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'
import UserRegistrationPage from '@pages/user-registration/UserRegistrationPage'
import '@mantine/core/styles.css';

function App() {
  return (
    <MantineProvider withGlobalClasses>
      <Router>
        <Routes>
          <Route path="/register" element={<UserRegistrationPage />} />
        </Routes>
      </Router>
    </MantineProvider>
  )
}

export default App
