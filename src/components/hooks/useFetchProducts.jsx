import { useEffect, useState } from "react";

const useFetchProducts = () => {
      const [products, setProducts] = useState([]);
      const [error, setError] = useState(null);

      const fetchProducts = async () => {
        try {
          const response = await fetch("https://dummyjson.com/products/category/beauty");
          const data = await response.json();
         
          setProducts(data.products);
        } catch (error) {
          setError(error.message);
          console.error(error);
        }
      };

      console.log(products)

    let ratings = products.filter((r) => r.rating > 2);
    console.log(ratings)
      let nailpolish = products.filter((d) => d.tags.includes("nail polish"));
      let lipstick = products.filter((d) => d.tags.includes("lipstick"));

      useEffect(() => {
        fetchProducts();
      }, []);

      return {products, ratings, nailpolish, lipstick}
}

export default useFetchProducts;