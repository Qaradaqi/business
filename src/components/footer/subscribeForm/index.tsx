'use client'

import { ChangeEvent, useState } from 'react';
import styles from './index.module.css'

const SubscribeForm = () => {
  const [email, setEmail] = useState<string>('');
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(email);
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={`${styles.formInner} flex align-center justify-between gap-5`}>
        <input 
        className={styles.email}
        type='email' 
        name='email' 
        placeholder='آدرس ایمیل'  
        value={email}
        required
        onChange={(e)=>setEmail(e.target.value)}/>
        <input
        className={styles.submit} 
        type='submit' 
        value={'عضویت'} />
      </div>
    </form>
  );
};

export default SubscribeForm;