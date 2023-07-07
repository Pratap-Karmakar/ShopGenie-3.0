import Image from "next/image";
import React from "react";

const Card = ({ name, image, price, key }) => {
  return (
    <div className="m-3 cursor-pointer hover:scale-90 transition-transform ml-6">
      <div className="w-[200px] h-[200px] bg-white overflow-hidden shadow-md border rounded-xl py-2 flex items-center justify-center">
        <Image
          src={image}
          height={100}
          width={100}
          alt=""
          priority={true}
          className=" object-contain h-40 w-40 md:h-52 md:w-52 md:p-2"
        />
      </div>
      <div className="-ml-11 md:-ml-14">
        <h2 className="text-lg font-bold">{name.slice(0, 20)}...</h2>
        <p className="text-md font-semibold">&#8377;{price}</p>
      </div>
    </div>
  );
};

export default Card;
