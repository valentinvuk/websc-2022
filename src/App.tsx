import './App.css'
import { Vote } from './components/vote';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    callFetch();
  },[]);

  const callFetch = async () => {
    const response = await fetch('https://cloudflare-serverless.princiya.workers.dev/');
    const data = await response.json();
    setData(data.text);
  }

  return (
    <>
      <header>
        <h1>Frontend to Serverless!</h1>
      </header>
      <main>
        <p>{`DEMO: ${data}`}</p>
        <Vote />
      </main>
    </>
  )
}

export default App
