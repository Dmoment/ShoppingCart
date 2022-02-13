import React, { useState, useEffect } from "react";
import OrderApi from "../../apis/order";
import PageLoader from "../PageLoader";
import { useParams } from "react-router-dom";
import Table from "./ProductTable";
import Container from "../Container";
import OrderDetails from "./OrderDetails";

const ShowOrder = () => {
  const [orders, setOrders] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { order_id } = useParams();

  const fetchOrder = async () => {
    try {
      const response = await OrderApi.show(order_id);
      console.log(response.data.products);
      setOrders(response.data.order);
      setProducts(response.data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  if (loading) {
    return (
      <div className="w-screen h-screen">
        <PageLoader />
      </div>
    );
  }

  return (
    <Container>
      <OrderDetails data={orders} />
      <Table data={products} />
    </Container>
  );
};

export default ShowOrder;
