import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Image from 'next/image';
export default async function Index() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore);
  const { data: limited } = await supabase.from("limited").select("*");

  return (
    <>
      <Navbar />

      <div className="flex lg:flex-row flex-col lg:mt-[8%] mt-[30%] gap-2 lg:mx-[20%] ">

      <div className='flex gap-32 items-center'>
        <div className='flex flex-col items-center lg:items-start lg:justify-center gap-5'>
        <h1 className='text-4xl text-red-400'>Sticker Heaven </h1>
        <p className='text-lg lg:max-w-lg '>Your Sticker Paradise! Explore and collect a variety of stickers, from timeless classics to exclusive limited editions. Start your sticker journey today!</p>
        </div>

        <Image alt='logo' src='/logo.png' width={400} height={400} />

      </div>

      </div>
        
        <h2 className='text-3xl text-red-400 flex justify-center lg:mt-[15%] mt-[70%] '>Limited Stickers</h2>
      

      <div className='flex justify-center mt-[5%] mb-[10%]'>

        <div className='flex justify-around items-center flex-wrap max-w-5xl gap-7'>
          { 
            limited && limited.map((current) => {
              return (
                <Card key="{current}" title={current.title} description={current.description} img={current.img} price={current.price} />
              )
            })
          }
        </div>
      </div>
    </>
    

  )
}
