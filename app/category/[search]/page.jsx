import Card from "@/app/components/Card";
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
            <Card
              image={item.image}
              price={item.price}
              name={item.name}
              key={item.id}
            />
          );
        }
      })}
    </div>
  );
};

export default page;
