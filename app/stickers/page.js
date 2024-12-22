'use client'

import React, { useEffect, useState } from 'react';
import '/app/globals.css';
import Navbar from '../components/Navbar';
import { createClient } from '@supabase/supabase-js'
import Card from '../components/Card';
import db from '../utils/db.js';



export default function Page() {

  const [stickers, setStickers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    
    db.get('/v1/stickers').then((response ) => {
      setStickers(response.data);
    }).catch((error) => {
        console.error(error);
    });

  }, []);



  return (
    <>
        <Navbar/>
    
        <div className="lg:mx-36 lg:mt-32 mt-28 mx-12">
          <div className='flex flex-col lg:flex-row gap-5 mb-10 items-center'> <h1 className="text-3xl text-red-400">Available Stickers</h1>
          <input type="text" id="searchBar" onChange={e => setSearch(e.target.value)} className=" text-black  py-2 w-[18rem] lg:w-[25rem] pl-5 border-2 border-red-400 text-lg rounded-lg" placeholder="Search for a specific sticker" required></input>
          <div className="flex">
          <input type="button" className="p-3 px-5 bg-red-400 text-white text-xl cursor-pointer rounded-lg " value="Filter"></input>
          <div>

          </div>
          </div>
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
