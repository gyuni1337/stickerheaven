'use client'

import React from 'react';
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';

export default function Navbar() {

  const [visible, makeVisible] = useState(false);
  
  function showMenu() {
    makeVisible(!visible);

  }

  return (
    <>
    <div className='flex flex-col justify-around mt-10 lg:mx-32'>
      <div className='flex flex-row justify-around w-full items-center'>

          <div className='flex flex-row items-center gap-2'>
          <Link href="/" className='text-xl mt-1.5'>stickerheaven</Link>
        <h1 className='animate-bounce text-red-400'>&lt;3</h1>
          </div>

          <div className='lg:flex gap-10 hidden'>
          <Link href="/market" className='text-bg cursor-pointer text-lg mt-1.5'>market</Link>
          <Link href="/stickers" className='text-bg cursor-pointer text-lg mt-1.5'>stickers</Link>
          <Link href="/cases" className='text-bg cursor-pointer text-lg mt-1.5'>cases</Link>
          <Link href="/login" className='bg-red-400 p-2 rounded-xl px-5 text-white border-1 border-white hover:bg-red-500 transition-colors duration-300 shadow cursor-pointer' >Sign In</Link>

          </div>


        <div className='lg:hidden block'>
          <AiOutlineMenu className='w-12 h-12' onClick={showMenu} />
          </div>  

      </div>
          <div className={`${visible ? "flex" : "hidden"} flex-col w-full px-14 border-t border-red-400 gap-5 mt-5`}>
            <Link href="/market" className='text-bg cursor-pointer mt-5 text-lg'>market</Link>
            <Link href="/stickers" className='text-bg cursor-pointer text-lg mt-1.5'>stickers</Link>
            <Link href="/cases" className='text-bg cursor-pointer text-lg mt-1.5'>cases</Link>
            <Link href="/login" className='bg-red-400 p-2 rounded-xl px-5 max-w-lg text-white border-1 border-white hover:bg-red-500 transition-colors duration-300 shadow cursor-pointer' >Sign In</Link>

    </div>

      </div>
    </>
  )
}
