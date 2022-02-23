import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import OrderApi from "../../apis/order";
import OrderForm from "./OrderForm";
import Container from "../Container";
import productsApi from "../../apis/products";
import PageLoader from "../PageLoader";

const Order = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await OrderApi.create({
        order: {
          name: name,
          email: email,
          address: address,
          products: products,
        },
      });
      history.push("/orderlist");
    } catch (error) {
      console.log(error);
      history.push("/");
    }
  };

  const fetchCart = async () => {
    try {
      const response = await productsApi.current_cart_products();
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
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
