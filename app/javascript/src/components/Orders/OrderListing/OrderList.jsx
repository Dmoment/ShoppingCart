import React, { useState, useEffect } from "react";
import OrderApi from "../../../apis/order";
import PageLoader from "../../PageLoader";
import Container from "../../Container";
import { isNil, isEmpty, either } from "ramda";
import Table from "./OrderTable/index";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const response = await OrderApi.list();
      console.log(response.data.orders);
      setOrders(response.data.orders);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) {
    return (
      <div className="w-screen h-screen">
        <PageLoader />
      </div>
    );
  }

  if (either(isNil, isEmpty)(orders)) {
    return (
      <Container>
        <h1 className="text-xl leading-5 text-center">
          We have no orders for now 😔
        </h1>
      </Container>
    );
  }

  return (
    <Container>
      <Table data={orders} />
    </Container>
  );
};

export default OrderList;
