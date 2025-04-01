

import { FcLike, FcDislike } from "react-icons/fc";
import styles from "./makeupCard.module.css";
import { Link } from "react-router-dom";
import { useLocalStorage } from "@uidotdev/usehooks";

const ProductCard = ({ product }) => {
  // Check if product is defined
  if (!product) {
    return null; // or some fallback UI
  }

  const [favorites, setFavorites] = useLocalStorage("Favorites", []);
  const isFavorite = favorites.includes(product.id);

  const handleLike = () => {
    setFavorites((prevFavorites) =>
      isFavorite
        ? prevFavorites.filter((fav) => fav !== product.id)
        : [...prevFavorites, product.id]
    );
  };

  return (
    <div className={styles.container}>
      <figure className={styles.productCard}>
        <Link to={`/products/${product.id}`}>
          <img src={product?.thumbnail} alt={product?.name} />
        </Link>
        <h3>{product?.title}</h3>
        {isFavorite ? (
          <FcDislike size={30} onClick={handleLike} />
        ) : (
          <FcLike size={30} onClick={handleLike} />
        )}
      </figure>
    </div>
  );
};

export default ProductCard;
