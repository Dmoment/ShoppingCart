import axios from "axios";

const list = () => axios.get("/products");
const current_cart_products = () => axios.get("products/current_cart_products");

const productsApi = {
  list,
  current_cart_products,
};

export default productsApi;
