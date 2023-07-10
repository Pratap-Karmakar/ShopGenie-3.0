import Card from "@/app/components/Card";
import Link from "next/link";
import React from "react";

// fetch function
const getProducts = async () => {
  const products = await fetch(
    `https://www.screentechnicals.com/api/ecommerce/products`,
    { next: { revalidate: 10 } }
  );
  return products.json();
};

const page = async ({ params }) => {
  const { search } = params;
  const products = await getProducts();

  return (
    <div className="w-full flex justify-center items-center flex-wrap">
      {products.map((item) => {
        if (
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.category.toLowerCase().includes(search.toLowerCase())
        ) {
          return (
            <Link href={`/products/${item.id}`} key={item.id}>
              <Card
                image={item.image}
                price={item.price}
                name={item.name}
              />
            </Link>
          );
        }
      })}
    </div>
  );
};

export default page;
