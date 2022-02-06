import React, { useState, useEffect } from "react";
import { isNil, isEmpty, either } from "ramda";
import { useParams, useHistory } from "react-router-dom";
import cartApi from "../../apis/cart";
import cartItemsApi from "../../apis/cart_items";
import PageLoader from "../PageLoader";
import Container from "../Container";
import Table from "./CartTable/index";

const Cart = () => {
  const { cart_id } = useParams();
  const history = useHistory();
  const [cartTotal, setCartTotal] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCart = async () => {
    try {
      const response = await cartApi.show(cart_id);
      setLoading(false);
      setCartTotal(response.data.cart_total);
      setCartItems(response.data.cart_items);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const removeCartItem = async cart_item_id => {
    try {
      await cartItemsApi.destroy(cart_item_id);
      await fetchCart();
    } catch (error) {
      console.log(error);
    }
  };

  const incrementQuantity = async cart_item_id => {
    try {
      await cartItemsApi.incrementQuantity(cart_item_id);
      await fetchCart();
    } catch (error) {
      console.log(error);
    }
  };

  const decrementQuantity = async cart_item_id => {
    try {
      await cartItemsApi.decrementQuantity(cart_item_id);
      await fetchCart();
    } catch (error) {
      console.log(error);
    }
  };

  const emptyCart = async cart_id => {
    try {
      await cartApi.destroy(cart_id);
      await fetchCart();
    } catch (error) {
      console.log(error);
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

  if (either(isNil, isEmpty)(cartItems)) {
    return (
      <Container>
        <h1 className="text-xl leading-5 text-center">Cart is empty 😔</h1>
        <button
          type="button"
          className="justify-center w-full px-4 py-4 m-6 text-lg bg-green-500 text-white font-lg leading-5 transition duration-150 ease-in-out  border border-transparent rounded-md group hover:bg-opacity-90 focus:outline-none"
          onClick={() => history.push("/items")}
        >
          Continue Shopping
        </button>
      </Container>
    );
  }

  return (
    <Container>
      <button
        type="button"
        className="justify-center w-full px-4 py-4 m-6 text-lg bg-green-500 text-white font-lg leading-5 transition duration-150 ease-in-out  border border-transparent rounded-md group hover:bg-opacity-90 focus:outline-none"
        onClick={() => history.push("/items")}
      >
        Continue Shopping
      </button>
      <Table
        data={cartItems}
        cartTotal={cartTotal}
        emptyCart={emptyCart}
        removeCartItem={removeCartItem}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
      />
    </Container>
  );
};

export default Cart;
