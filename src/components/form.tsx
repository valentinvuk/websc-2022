import React, { useState } from 'react';
import styles from './form.module.css';

export function Form() {
  const [count, setCount] = useState('');
  const [response, setResponse] = useState('');

  async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!count) {
      return;
    }

    const res = await fetch('/.netlify/functions/count', {
      method: 'POST',
      body: JSON.stringify({ count }),
    }).then((res) => res.json());

    setResponse(res);
    setCount('');
  }

  return (
    <>
      <pre>{JSON.stringify(response, null, 2)}</pre>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="name" className={styles.label}>
          Did you like this workshop?
        </label>
        <input
          name="count"
          id="count"
          className={styles.input}
          type="text"
          onChange={(e) => setCount(e.target.value)}
          value={count}
        />
        
        <button className={styles.button}>Submit</button>
      </form>
    </>
  );
}