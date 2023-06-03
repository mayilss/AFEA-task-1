import ProductItem from "../productItem/product-item";
import styles from "./product-list.module.css";

function ProductList({ items }) {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <ProductItem
          key={item.id}
          id={item.id}
          title={item.title}
          thumbnail={item.thumbnail}
          price={item.price}
          rating={item.rating}
          brand={item.brand}
        />
      ))}
    </ul>
  );
}

export default ProductList;
