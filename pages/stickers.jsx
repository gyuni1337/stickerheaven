import React, { useEffect, useState } from 'react';
import '/app/globals.css';
import Navbar from '@/components/Navbar';
import { createClient } from '@supabase/supabase-js'
import Card from '@/components/Card';

const supabaseUrl = 'https://ocmuyepjcnzhlwxsrxeb.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)


export default function Stickers() {

  const [stickers, setStickers] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
     async function getLimited() {
      let { data: stickers, error } = await supabase
        .from('stickers')
        .select('*')
      setStickers(stickers);

      } 

      getLimited();

  }, []);



  return (
    <>
        <Navbar/>
    
        <div className="lg:mx-96 lg:mt-32 mt-28 mx-12">
          <div className='flex'>
            <h1 className="text-2xl text-red-400">Available Stickers</h1>
          <input type="text" id="searchBar" className=" border text-sm rounded-lg" placeholder="John" required></input>
          </div>
            <div className='flex flex-wrap gap-10'>
              { stickers && stickers.map(sticker => (


              <Card title={sticker.title} key={sticker.id} description={sticker.description} img={sticker.img} price={sticker.price}/>
                
                ))};

            </div>
        </div>
    </>
  )  
}