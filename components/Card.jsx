"use client"

import React, { Component, PropTypes } from "react";
import Image from "next/image";

export default function Card({ title, description, img, price }) {
  // for test 4
  let x = "token";


  return (
    <>
      <div className="max-w-xs rounded overflow-hidden shadow-lg hover:translate-y-1 transition-all">
        <img className="w-full" src={img} alt="Sunset in the mountains"></img>
        <div className="px-6 py-4">
          <div className="font-bold text-red-400 text-2xl mb-2">{title}</div>
          <p className="text-black text-base">{description}</p>
        </div>

        <div className="mx-6 my-4 flex items-center gap-3">
        <button className="bg-red-400  hover:bg-red-300 text-white transition-colors duration-250 font-semibold py-2 px-5 border border-gray-200 rounded shadow">
          Purchase
        </button>
          <h4 className="">{price} {x = (price > 1) ? "tokens" : "token" } </h4>
 
        </div>



      </div>
    </>
  );
}
