"use client"

import React, { Component, PropTypes } from "react";
import Image from "next/image";

export default function Card({ title, description, img, price }) {
  let x = "token";


  return (
    <>
      <div className="max-w-[20rem] max-h-[35rem] rounded overflow-hidden shadow-lg hover:translate-y-1 border-2 border-red-400 transition-all">
        <img className="w-full max-h-[20rem]" src={img} alt="beautiful sticker"></img>
        <div className="px-6 py-1">
          <div className="font-bold text-red-400 text-2xl mb-2 mt-3">{title}</div>
          <p className="text-black text-base">{description}</p>
        </div>

        <div className="mx-6 pb-5 pt-2 flex items-center gap-3">
        <button className="bg-red-400 hover:bg-red-300 text-white transition-colors duration-250 font-semibold py-2 px-5 border border-gray-200 rounded shadow">
          Purchase
        </button>
          <h4 className="">{price} {x = (price > 1) ? "tokens" : "token" } </h4>
 
        </div>



      </div>
    </>
  );
}
