import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import OrderApi from "../../apis/order";
import OrderForm from "./OrderForm";
import Container from "../Container";

const Order = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const history = useHistory();

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const response = await OrderApi.create({
        order: {
          name: name,
          email: email,
          address: address,
        },
      });
      showOrder(response.data.order_id);
    } catch (error) {
      console.log(error);
    }
  };

  const showOrder = order_id => {
    history.push(`/orders/${order_id}/show`);
  };

  return (
    <Container>
      <OrderForm
        type="update"
        name={name}
        email={email}
        address={address}
        setName={setName}
        setEmail={setEmail}
        setAddress={setAddress}
        loading={false}
        handleSubmit={handleSubmit}
      />
    </Container>
  );
};

export default Order;
