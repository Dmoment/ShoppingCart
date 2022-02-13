import axios from "axios";

const create = payload => axios.post("/orders", payload);

const show = order_id => axios.get(`/orders/${order_id}`);

const OrderApi = {
  create,
  show,
};

export default OrderApi;
