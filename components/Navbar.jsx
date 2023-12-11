import React from 'react';
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';

export default function Navbar() {
  return (
    <>
    <div className='flex justify-around mt-10 lg:mx-32 items-center'>
          <div className='flex items-center gap-2'>
          <Link href="/" className='text-xl mt-1.5'>stickerheaven</Link>
        <h1 className='animate-bounce text-red-400'>&lt;3</h1>
          </div>

          <div className='lg:flex gap-10 hidden'>
          <Link href="/trading" className='text-bg cursor-pointer text-lg mt-1.5'>trading</Link>
          <Link href="/stickers" className='text-bg cursor-pointer text-lg mt-1.5'>stickers</Link>
          <Link href="/cases" className='text-bg cursor-pointer text-lg mt-1.5'>cases</Link>
          <Link href="/login" className='bg-red-400 p-2 rounded-xl px-5 text-white border-1 border-white hover:bg-red-500 transition-colors duration-300 shadow cursor-pointer' >Sign In</Link>

          </div>

        <div className='lg:hidden block'>
          <AiOutlineMenu className='w-12 h-12' />
        </div> 

      </div>
    </>
  )
}
