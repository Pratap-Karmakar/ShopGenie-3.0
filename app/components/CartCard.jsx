// 'use client'

import Image from "next/image";
import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "@/firebase";


const CartCard = ({ key, image, name, description, price, id }) => {

  const deleteItem=async()=>{
    await deleteDoc(doc(db, "cart", id));
  }
  return (
    <div className="w-full p-5 border shadow-sm mb-5 rounded-xl flex space-x-5 items-center overflow-hidden relative">
      <button className="absolute right-5 top-3 text-red-500 text-2xl" onClick={deleteItem}><AiFillDelete/></button>
      <div>
        <Image
          src={image}
          height={100}
          width={100}
          alt=""
          priority={true}
          className=" object-contain h-20 w-20 md:h-40 md:w-40 md:p-2"
        />
      </div>
      <div className="space-y-2">
        <h1 className="text-xl font-bold">{name.slice(0,50)}...</h1>
        <h1 className="text-gray-500 text-sm">{description.slice(0,150)}...</h1>
        <h1 className="font-semibold">Rs. {price}</h1>
      </div>
    </div>
  );
};

export default CartCard;

