import { useState } from 'react'
import './App.css'
import Dictaphone from './Comp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Dictaphone />
        </div>
    </>
  )
}

export default App
