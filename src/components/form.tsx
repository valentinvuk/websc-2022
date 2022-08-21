import React, { useState } from 'react';
import styles from './form.module.css';

export function Form() {
  const [count, setCount] = useState('');
  
  return (
    <>
      <form className={styles.form}>
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