import axios from "axios";

const create = payload => axios.post("/cart_items", payload);

const cartItemsApi = {
  create,
};

export default cartItemsApi;
