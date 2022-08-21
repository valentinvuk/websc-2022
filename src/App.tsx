import { useState } from 'react'
import './App.css'
import { Form } from './components/form';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1>Frontend to Serverless!</h1>
      </header>
      <main>
        <Form />
      </main>
    </>
  )
}

export default App
