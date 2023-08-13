import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { Login } from './pages/Login'
import Reports from './pages/Reports'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<h1>Not Found</h1>} />
      <Route path="/reports" element={<Reports/>} />
    </Routes>
</>
  )
}

export default App
