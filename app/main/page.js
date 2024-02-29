"use client"
// import { createClient } from '@/utils/supabase/server';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Image from 'next/image';
import { authed } from '../api/auth';
import { use, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
import { loadStickers, sendLimited} from "../api/events";
export default function Page() {
  const router = useRouter()

    let [limited, setLimited] = useState([]);

useEffect(() => {

    const checkAuth = async () => {
        try {
            // let authenticated = await authed(); // Assuming `authed` is your authentication function
            let authenticated = true;
            if (!authenticated) {
                router.push('/');
                console.log('not authorized');
            }
        } catch (error) {
            console.error('Error checking authentication:', error);
        }
    };

    checkAuth();

    let fetchLimited = async () => {
        let stickers = await sendLimited();
        setLimited(stickers);
    }

    fetchLimited();



}, []);

  return (
    <>
      <Navbar />

      <div className="flex lg:flex-row flex-col items-center lg:mt-[8%] mt-[30%] lg:gap-16 lg:mx-[20%] ">

      <div className='flex gap-32 items-center'>
        <div className='flex flex-col items-center justify-center lg:items-start lg:justify-center gap-5'>
        <h1 className='text-4xl text-red-400'>Sticker Heaven </h1>
        <p className='text-lg lg:max-w-lg '>Your Sticker Paradise! Explore and collect a variety of stickers, from timeless classics to exclusive limited editions. Start your sticker journey today!</p>
        </div>
      </div>

        <Image alt='logo' src='/logo.png' width={400} height={400} />
      
      </div>
        
        <h2 className='text-3xl text-red-400 flex justify-center lg:mt-[15%] mt-[70%] '>Limited Stickers</h2>

      <div className='flex justify-center mt-[5%] mb-[10%]'>

        <div className='flex justify-around items-center flex-wrap max-w-5xl gap-7'>
          {
            limited && limited.map((current) => {
              return (
                <Card key={current.id} title={current.title} description={current.description} img={current.img} price={current.price} />
              )
            })
          }

        </div>
      </div>
    </>
    

  )
}
