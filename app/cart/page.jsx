// "use client";

// import { auth, db } from "@/firebase";
// import { collection, orderBy, query } from "firebase/firestore";
// import Image from "next/image";
// import React from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollection } from "react-firebase-hooks/firestore";
// import CartCard from "../components/CartCard";
// import { ImSpinner2 } from "react-icons/im";
// import emptycart from "../../public/gifs/emptycart.gif";

// const Page = () => {
//   const [user, loading] = useAuthState(auth);
//   const cartsRef = collection(db, "cart");
//   const q = query(cartsRef, orderBy("createdAt"));
//   const [cartSnapshots, loading2] = useCollection(q);



//   //   to show the total price
//   let totalPrice = [];

//   cartSnapshots?.docs?.filter((data) => data?.data()?.uid === user?.uid).forEach((item)=>{
//     const price=item.data()?.price;
//     totalPrice.push(price)
//   })
//   let sum=0
//   for (let i = 0; i < totalPrice.length; i++) {
//     sum += totalPrice[i];
    
//   }



//   return (
//     <div className="w-full h-[80vh] border shadow-md rounded-xl p-5 bg-white">
//       <div className="flex w-full justify-between items-center">
//         <div className="flex items-center">
//           <h1 className="text-xl font-bold">Your Shopping Cart</h1>
//           <Image
//             src={"/gifs/cart.gif"}
//             alt=""
//             width={40}
//             height={40}
//             priority={true}
//             className="relative bottom-1"
//           />
//         </div>
//         <div>
//           <p className="text-gray-600 text-xl font-light tracking-wider">
//             {
//               cartSnapshots?.docs?.filter(
//                 (data) => data?.data()?.uid === user?.uid
//               ).length
//             }{" "}
//             items for Rs. {sum}
//           </p>
//         </div>
//       </div>
//       <div className="w-full h-[70vh] overflow-y-auto">
//         {!loading2 ? (
//           user ? (
//             cartSnapshots?.docs?.filter(
//               (data) => data?.data()?.uid === user?.uid
//             ).length ? (
//               cartSnapshots?.docs
//                 ?.filter((data) => data?.data()?.uid === user?.uid)
//                 .map((item) => {
//                   return (
//                     <CartCard
//                       key={item?.id}
//                       image={item?.data()?.image}
//                       name={item?.data()?.name}
//                       price={item?.data()?.price}
//                       description={item?.data()?.description}
//                       id={item?.id}
//                     />
//                   );
//                 })
//             ) : (
//               <div className="w-full h-[60vh] flex justify-center items-center">
//                 <Image
//                   src={emptycart}
//                   height={300}
//                   width={300}
//                   alt=""
//                   priority={true}
//                   className=" object-contain h-20 w-20 md:h-40 md:w-40 md:p-2"
//                 />
//               </div>
//             )
//           ) : (
//             <div className="w-full h-[60vh] flex justify-center items-center">
//               <Image
//                 src={emptycart}
//                 height={300}
//                 width={300}
//                 alt=""
//                 priority={true}
//                 className=" object-contain h-20 w-20 md:h-40 md:w-40 md:p-2"
//               />
//             </div>
//           )
//         ) : (
//           <div className="w-full h-[60vh] flex justify-center items-center">
//             <ImSpinner2 className="text-4xl text-[#ff9900] animate-spin inline" />
//           </div>
//         )}
//       </div>
//       <div>
//         <button className="w-full bg-gradient-to-b from-[#ffd900] to-[#ffb300] rounded-xl p-2 font-semibold hover:from-[#ffb300] hover:to-[#ffd900]">
//           Proceed To Pay
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Page;






"use client";

import { collection, orderBy, query } from "firebase/firestore";
import Image from "next/image";
import React from "react";
import {
  useCollection,
  useCollectionData,
} from "react-firebase-hooks/firestore";
import CartCard from "../components/CartCard";
import { ImSpinner2 } from "react-icons/im";
import { auth, db } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";



const Page = () => {
  const [user, loading] = useAuthState(auth);
  const cartsRef = collection(db, "cart");
  const q = query(cartsRef, orderBy("createdAt"));
  const [cartSnapshots, loading2] = useCollection(q);
  const [cartSnapshotsData] = useCollectionData(q);
  let total = [];
  const cart = cartSnapshotsData;

  cartSnapshots?.docs
    ?.filter((data) => data?.data()?.uid === user?.uid)
    ?.forEach((item) => {
      const price = item.data()?.price;
      total.push(price);
    });
  let sum = 0;
  for (let i = 0; i < total.length; i++) {
    sum += total[i];
  }



  return (
    <div className="w-full h-[80vh] border shadow-md rounded-xl p-5 bg-white">
      <div className="flex w-full justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-4xl font-bold">Your Shopping Cart</h1>
          <Image
            src={"/gifs/cart.gif"}
            alt=""
            width={80}
            height={80}
            priority={true}
            className="relative bottom-1"
          />
        </div>
        <div>
          <p className="text-gray-500 text-xl font-light tracking-wider">
            {
              cartSnapshots?.docs?.filter(
                (data) => data?.data()?.uid === user?.uid
              )?.length
            }{" "}
            items for &#8377;{sum}
          </p>
        </div>
      </div>
      <div className="w-full h-[63vh] overflow-y-auto">
        {!loading2 ? (
          user ? (
            cartSnapshots?.docs?.filter(
              (data) => data?.data()?.uid === user?.uid
            )?.length ? (
              cartSnapshots?.docs
                ?.filter((data) => data?.data()?.uid === user?.uid)
                ?.map((item) => {
                  return (
                    <CartCard
                      key={item?.id}
                      image={item?.data()?.image}
                      name={item?.data()?.name}
                      price={item?.data()?.price}
                      description={item?.data()?.description}
                      id={item?.id}
                    />
                  );
                })
            ) : (
              <div className="w-full h-[63vh] flex justify-center items-center">
                <Image
                  src={"/gifs/emptycart.gif"}
                  alt=""
                  width={500}
                  height={500}
                  priority={true}
                />
              </div>
            )
          ) : (
            <div className="w-full h-[63vh] flex justify-center items-center">
              <Image
                src={"/gifs/emptycart.gif"}
                alt=""
                width={500}
                height={500}
                priority={true}
              />
            </div>
          )
        ) : (
          <div className="w-full h-[63vh] flex justify-center items-center">
            <ImSpinner2 className="text-6xl text-[#ff9900] animate-spin inline" />
          </div>
        )}
      </div>
      <div>
        <button className="w-full bg-gradient-to-b from-[#ffd900] to-[#ffb300] rounded-xl p-2 font-semibold hover:from-[#ffb300] hover:to-[#ffd900]">
           Proceed To Pay
         </button>
       </div>
    </div>
  );
};

export default Page;