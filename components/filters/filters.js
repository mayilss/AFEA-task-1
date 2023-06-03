import React from "react";
import styles from "./filters.module.css";

function Filters({ setFilter }) {
  const titleFilterHandler = (e) => {
    setFilter((prev) => ({ ...prev, title: e.target.value }));
  };

  const minPriceFilterHandler = (e) => {
    setFilter((prev) => ({ ...prev, minPrice: e.target.value }));
  };

  const maxPriceFilterHandler = (e) => {
    setFilter((prev) => ({ ...prev, maxPrice: e.target.value }));
  };

  const minRatingFilterHandler = (e) => {
    setFilter((prev) => ({ ...prev, minRating: e.target.value }));
  };

  const maxRatingFilterHandler = (e) => {
    setFilter((prev) => ({ ...prev, maxRating: e.target.value }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.field}>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={titleFilterHandler}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="minPrice">Price: </label>
        <input
          type="text"
          id="minPrice"
          name="minPrice"
          placeholder="Min Price"
          onChange={minPriceFilterHandler}
        />{" "}
        -{" "}
        <input
          type="text"
          id="maxPrice"
          name="maxPrice"
          placeholder="Max Price"
          onChange={maxPriceFilterHandler}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="minRating">Rating: </label>
        <input
          type="text"
          id="minRating"
          name="minRating"
          placeholder="Min Rating"
          onChange={minRatingFilterHandler}
        />{" "}
        -{" "}
        <input
          type="text"
          id="maxRating"
          name="maxRating"
          placeholder="Max Rating"
          onChange={maxRatingFilterHandler}
        />
      </div>
    </div>
  );
}

export default Filters;
