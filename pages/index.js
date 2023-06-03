import React from "react";
import Head from "next/head";
import Navbar from "@/components/navbar/navbar";
import ProductList from "@/components/productList/product-list";
import { Helpers } from "@/helpers";
import { ProductService } from "@/services";
import Filters from "@/components/filters/filters";

export default function Home({ data }) {
  const [orderBy, setOrderBy] = React.useState("");
  const [filter, setFilter] = React.useState({
    title: "",
    minPrice: "",
    maxPrice: "",
    minRating: "",
    maxRating: "",
  });

  let products = data.products;

  products = Helpers.filterHandler(products, filter);

  //order start

  if (orderBy === "title") {
    products = Helpers.orderByTitleHandler(products);
  }
  if (orderBy === "price") {
    products = Helpers.orderByPriceHandler(products);
  }
  if (orderBy === "rating") {
    products = Helpers.orderByRatingHandler(products);
  }

  //order end

  return (
    <>
      <Head>
        <title>AFEA Products</title>
        <meta name="description" content="Find a lot of awesome products" />
      </Head>
      <Navbar orderBy={setOrderBy} />
      <Filters setFilter={setFilter} />
      <ProductList items={products} />
    </>
  );
}

export async function getStaticProps() {
  const data = await ProductService.getProducts();

  return {
    props: { data },
    revalidate: 60 * 30,
  };
}
