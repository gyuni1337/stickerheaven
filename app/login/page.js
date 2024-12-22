'use client'

import '../globals.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Index() {
  const router = useRouter();
  
  let [email, setEmail ] = useState('');
  let [password, setPassword ] = useState('');
  let [error, setError ] = useState('');
  
  

  const handleLogin = async () => {
        router.push('/main');        
  }

   return (
    <>
    <div className='text-xl flex mx-auto w-[400px] mt-10 flex-col'>
      <h2 className='text-center mb-5'>LOGIN</h2>
      <div className='flex flex-col'>
        <label htmlFor='username'>Email</label>
        <input onChange={(e) => setEmail(e.target.value)} className='border-2 border-green-300' type='text' id='username' />
      </div>
      <div className='flex flex-col'>
        <label htmlFor='username'>Password</label>
        <input onChange={(e) => setPassword(e.target.value)} className='border-2 border-green-300' type='text' id='username' />
      </div>
      <button onClick={handleLogin} className='bg-green-300 mt-10'>Login</button>
      {error}
    </div>
    </>
  )
}

