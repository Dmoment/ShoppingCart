import axios from "axios";

const create = payload => axios.post("/cart_items", payload);

const destroy = cart_item_id => axios.delete(`/cart_items/${cart_item_id}`);

const incrementQuantity = cart_item_id =>
  axios.put(`/cart_items/${cart_item_id}/increment_quantity`);

const decrementQuantity = cart_item_id =>
  axios.put(`/cart_items/${cart_item_id}/decrement_quantity`);

const cartItemsApi = {
  create,
  destroy,
  incrementQuantity,
  decrementQuantity,
};

export default cartItemsApi;
