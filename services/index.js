import axios from "axios";

const productsAPI = axios.create({
  baseURL: "https://dummyjson.com/products?limit=10",
  headers: {
    "Content-Type": "application/json",
  },
});

const getProducts = async () => {
  const response = await productsAPI.get();

  return response.data;
};

export const ProductService = { getProducts };
