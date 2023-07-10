'use client'

import { auth, db } from "@/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const CartButtons = ({data}) => {

    const [user]=useAuthState(auth)

    const addToCart = async ()=>{
      if(user){
        const docRef=addDoc(collection(db,'cart'),{
          id:data[0].id,
          name:data[0].name,
          description:data[0].description,
          price:data[0].price,
          image:data[0].image,
          uid:user?.uid,
          createdAt:serverTimestamp()
        })
      }
      else{
        alert('Please Sign In!')
      }
    }
  return (
    <div className="flex items-center space-x-4 pt-6 pb-10">
      <button className="text-gray-800 bg-gradient-to-b font-serif from-[#ffd900] to-[#ffb300] px-4 py-1 text-xl rounded-md">
        By Now
      </button>
      <button
        className="text-gray-800 font-serif bg-gradient-to-b from-[#ffd900] to-[#ffb300] px-4 py-1 text-xl rounded-md"
        onClick={addToCart}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default CartButtons;
