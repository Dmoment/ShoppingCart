import axios from "axios";

const list = () => axios.get("/products");

const productsApi = {
  list,
};

export default productsApi;
