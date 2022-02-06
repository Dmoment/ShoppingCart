import React, { useState, useEffect } from "react";
import { isNil, isEmpty, either } from "ramda";
import { useHistory } from "react-router-dom";
import productsApi from "../../apis/products";
import cartItemsApi from "../../apis/cart_items";
import PageLoader from "../PageLoader";
import Container from "../Container";
import Table from "../Tasks/Table/index";
import CartIcon from "./CartIcon";
import { setToLocalStorage, getFromLocalStorage } from "../../helpers/storage";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const cartId = getFromLocalStorage("cartId");
  const history = useHistory();
  let cartIcon;

  const fetchProducts = async () => {
    try {
      const response = await productsApi.list();
      console.log(response.data);
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const addToCart = async product_id => {
    try {
      const response = await cartItemsApi.create({ product_id: product_id });
      setToLocalStorage({ cart_id: response.data.cart_id });
      showCart(response.data.cart_id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const showCart = id => {
    history.push(`/carts/${id}/show`);
  };

  if (loading) {
    return (
      <div className="w-screen h-screen">
        <PageLoader />
      </div>
    );
  }

  if (either(isNil, isEmpty)(products)) {
    return (
      <Container>
        <h1 className="text-xl leading-5 text-center">
          We have no products for now 😔
        </h1>
      </Container>
    );
  }

  if (either(isNil, isEmpty)(cartId)) {
    cartIcon = "Your cart is empty. Please add products";
  } else {
    cartIcon = (
      <CartIcon
        iconClass={"ri-shopping-cart-line ri-2x"}
        name="Your Cart"
        path={`/carts/${cartId}/show`}
      />
    );
  }

  return (
    <Container>
      <div className="flex justify-end">{cartIcon}</div>
      <Table data={products} showCart={showCart} addToCart={addToCart} />
    </Container>
  );
};

export default Products;
