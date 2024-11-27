import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../components/pageHeader/PageHeader";
import styles from "./makeupDetails.module.css"



const ProductDetails = () => {
    const { id } = useParams();

  const [product, setProduct] = useState(null);

  const fetchProductById = async () => {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json();
    console.log(id)
    setProduct(data)
  };  

  useEffect(() => {
    fetchProductById(id);
  }, [id]);

  return (
    <article>
      {product && (
        <>
          <PageHeader headerImg={product.images} title={product.title} />
          <div className={styles.ingredients}>
            <div className={styles.ingredient}>
              <img src={product.images} />
            </div>
            <div className={styles.instructions}>
                       <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
          </div>
        </>
      )}
      <p></p>
    </article>
  );
};

export default ProductDetails;
