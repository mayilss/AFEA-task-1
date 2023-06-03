const orderByTitleHandler = (products) => {
  const ordered = products.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });

  return ordered;
};

const orderByPriceHandler = (products) => {
  const ordered = products.sort((a, b) => a.price - b.price);

  return ordered;
};

const orderByRatingHandler = (products) => {
  const ordered = products.sort((a, b) => b.rating - a.rating);

  return ordered;
};

const filterHandler = (products, filter) => {
  const filteredProducts = products.filter((product) => {
    if (!filter.maxPrice && !filter.maxRating) {
      return (
        product.title.startsWith(filter.title) &&
        Number(product.price) > Number(filter.minPrice) &&
        Number(product.rating) > Number(filter.minRating)
      );
    }
    if (filter.maxPrice && filter.maxRating) {
      return (
        product.title.startsWith(filter.title) &&
        Number(product.price) > Number(filter.minPrice) &&
        Number(product.rating) > Number(filter.minRating) &&
        Number(product.price) < Number(filter.maxPrice) &&
        Number(product.rating) < Number(filter.maxRating)
      );
    }
    if (filter.maxPrice && !filter.maxRating) {
      return (
        product.title.startsWith(filter.title) &&
        Number(product.price) > Number(filter.minPrice) &&
        Number(product.rating) > Number(filter.minRating) &&
        Number(product.price) < Number(filter.maxPrice)
      );
    }
    if (!filter.maxPrice && filter.maxRating) {
      return (
        product.title.startsWith(filter.title) &&
        Number(product.price) > Number(filter.minPrice) &&
        Number(product.rating) > Number(filter.minRating) &&
        Number(product.rating) < Number(filter.maxRating)
      );
    }
  });

  return filteredProducts;
};

export const Helpers = {
  orderByTitleHandler,
  orderByPriceHandler,
  orderByRatingHandler,
  filterHandler,
};
