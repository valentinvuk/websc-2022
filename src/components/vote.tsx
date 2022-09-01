import React, { useState, useEffect } from 'react';
import styles from './form.module.css';

export function Vote() {
  const [count, setCount] = useState(0);
  const [response, setResponse] = useState('');

  useEffect(() => {
    fetch('/.netlify/functions/get-vote')
    .then(response => response.json())
    .then(data => setCount(data ? data[0].value : 0));
  },[count])

  async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();

    const res = await fetch('/.netlify/functions/vote', {
      method: 'POST',
      body: JSON.stringify({ count: count + 1 }),
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    }).then((res) => res.json());

    setResponse(res);
    setCount(count + 1);
  }

  return (
    <>
      <pre>{JSON.stringify(response, null, 2)}</pre>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="name" className={styles.label}>
          Please Vote.
        </label>
        <p>{`No. of likes ${count}`}</p>
        
        <button className={styles.button}>Submit</button>
      </form>
    </>
  );
}