import { useState } from 'react'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

function App() {
  const [session] = useState(true)
  return (
    <>
      {!session && <Login />}
      {session && <Dashboard/>}
    </>
  )
}

export default App
