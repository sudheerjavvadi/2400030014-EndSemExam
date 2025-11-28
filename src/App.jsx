import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AttendanceApp from './components/AttendanceApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <AttendanceApp />
    </>
  )
}

export default App
