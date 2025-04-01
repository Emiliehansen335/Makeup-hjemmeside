
import { useLocalStorage } from "@uidotdev/usehooks";

import { useEffect, useState } from "react";
import ProductCard from "../productCard/Makeup";
import useFetchProducts from "../hooks/useFetchProducts";


const MyFavorites = () => {
  const [favorites] = useLocalStorage("Favorites", []);
  const {products} = useFetchProducts()
  const [error, setError] = useState(null);

  const favoriteProducts = products.filter((product) =>
    favorites.includes(product.id)
  );

  console.log(favoriteProducts);

  return (
    <>
      {favoriteProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
  
};



export default MyFavorites;