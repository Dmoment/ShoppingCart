import axios from "axios";

const show = id => axios.get(`/carts/${id}`);

const destroy = id => axios.delete(`/carts/${id}`);

const cartApi = {
  show,
  destroy,
};

export default cartApi;
