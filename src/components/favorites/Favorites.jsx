import { useEffect, useState } from "react";
import ProductCard from "../productCard/Makeup";
import useFetchProducts from "../hooks/useFetchProducts";

const Favorites = () => {
  const { products } = useFetchProducts();
  console.log(products);
  
  return (
    <>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      {/* <div>
        <ProductsList />
      </div> */}
    </>
  );
};

export default Favorites;
