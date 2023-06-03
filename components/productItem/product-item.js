import Image from "next/image";
import styles from "./product-item.module.css";

function ProductItem({ title, thumbnail, price, rating, brand }) {
  return (
    <li className={styles.item}>
      <Image src={thumbnail} alt={title} width={500} height={320} />
      <div className={styles.content}>
        <div>
          <h2>{title}</h2>
          <div className={styles.price}>
            <span>Price: ${price}</span>
          </div>
          <div className={styles.rating}>
            <span>Rating: {rating}/5</span>
          </div>
          <div className={styles.brand}>
            <span>Brand: {brand}</span>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ProductItem;
