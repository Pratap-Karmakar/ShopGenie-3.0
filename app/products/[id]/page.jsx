import Image from 'next/image';
import React from 'react'


// fetch function
const getProduct = async (id) => {
    const products = await fetch(
      `https://www.screentechnicals.com/api/ecommerce/products/${id}`,
      { next: { revalidate: 10 } }
    );
    return products.json();
  };

const Page = async ({params}) => {
    const {id}=params

    const data = await getProduct(id)
  return (
    <div>
          <div className="w-full flex flex-col lg:flex-row">
      <div className="lg:w-[50%] w-full">
        <Image
          src={data?.[0]?.image}
          alt=""
          width={300}
          height={300}
          priority={true}
        />
      </div>
      <div className=" lg:w-[95%] lg:ml-10 w-full pt-10 lg:pt-0">
        <h2 className="text-xl tracking-widest uppercase font-semibold text-[#59284B]">
          {data?.[0]?.brand}
        </h2>
        <h2 className="text-2xl font-bold">{data?.[0]?.name}</h2>
        <h2 className="text-xl font-semibold pb-5">Rs. {data?.[0]?.price}</h2>
        <h2 className="text-sm tracking-wide text-gray-800">
          {data?.[0]?.description}
        </h2>
        {/* <Buttons data={data}/> */}
        <button className='p-2 mt-2 rounded-md bg-red-500'>Add To Cart</button>
      </div>
    </div>
    </div>
  )
}

export default Page