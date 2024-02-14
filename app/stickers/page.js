'use client'

import React, { useEffect, useState } from 'react';
import '/app/globals.css';
import Navbar from '../components/Navbar';
import { createClient } from '@supabase/supabase-js'
import Card from '../components/Card';

// const supabaseUrl = 'https://ocmuyepjcnzhlwxsrxeb.supabase.co'
// const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
// const supabase = createClient(supabaseUrl, supabaseKey)


export default function Page() {

  const [stickers, setStickers] = useState(null);
  const [search, setSearch] = useState('');

//   useEffect(() => {
//      async function getAll() {
//       let { data: stickers, error } = await supabase
//         .from('stickers')
//         .select('*')
//       setStickers(stickers);

//       } 

//       getAll();

//   }, []);


  return (
    <>
        <Navbar/>
    
        <div className="lg:mx-96 lg:mt-32 mt-28 mx-12">
          <div className='flex flex-col lg:flex-row gap-5 mb-5 items-center'>
            <h1 className="text-3xl text-red-400">Available Stickers</h1>
          <input type="text" id="searchBar" onChange={e => setSearch(e.target.value)} className=" text-black  py-2 w-[18rem] lg:w-[25rem] pl-5 border-2 border-red-400 text-lg rounded-lg" placeholder="Search for a specific sticker" required></input>
          </div>
            <div className='flex flex-wrap gap-10'>
              { 
                  stickers && stickers.filter((val) => {
                    if (search == "") {
                      return val
                    } else if (val.title.toLowerCase().includes(search.toLowerCase())) {
                      return val
                    }
                  }).map(sticker => (
                    <Card title={sticker.title} key={sticker.id} description={sticker.description} img={sticker.img} price={sticker.price}/>
                  ))

                
              }


            </div>
        </div>
    </>
  )  
}