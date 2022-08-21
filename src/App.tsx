import { useState } from 'react'
import './App.css'
import { Vote } from './components/vote';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1>Frontend to Serverless!</h1>
      </header>
      <main>
        <Vote />
      </main>
    </>
  )
}

export default App
