import React, { useState, useEffect } from "react";
import { isNil, isEmpty, either } from "ramda";
import productsApi from "../../apis/products";
import PageLoader from "../PageLoader";
import Container from "../Container";
import Table from "../Tasks/Table/index";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    fetchProducts();
  }, []);

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

  return (
    <Container>
      <Table data={products} />
    </Container>
  );
};

export default Products;
