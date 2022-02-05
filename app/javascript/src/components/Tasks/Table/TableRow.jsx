import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "../../Button";
import cartItemsApi from "../../../apis/cart_items";
import classnames from "classnames";

const TableRow = ({ data }) => {
  const [isProductAdded, setIsProductAdded] = useState(false);
  let button;
  const addToCart = async product_id => {
    try {
      await cartItemsApi.create({ product_id: product_id });
      setIsProductAdded(true);
      console.log("Cart item created");
    } catch (error) {
      setIsProductAdded(true);
      console.log(error);
    }
  };

  // const addToCartButton = (product_id) => {
  //   return (
  //     <button
  //       type="button"
  //       className="relative flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out  border border-transparent rounded-md group hover:bg-opacity-90 focus:outline-none bg-bb-purple"
  //       onClick={async () => await addToCart(product_id)}
  //     >
  //       Add to cart
  //     </button>
  //   );
  // };

  // const removeFromCartButton = (product_id) => {
  //   return (
  //     <button
  //       type="button"
  //       className="relative flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out  border border-transparent rounded-md group hover:bg-opacity-90 focus:outline-none bg-bb-purple"
  //     >
  //       Remove from cart
  //     </button>
  //   );
  // };

  // if (isProductAdded) {
  //   button = addToCartButton();
  // } else {
  //   button = removeFromCartButton();
  // }

  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {data.map(rowData => (
        <tr key={rowData.id}>
          <td
            className="w-64 px-6 py-2 text-sm font-medium
            leading-8 text-bb-purple capitalize truncate"
          >
            <img src={rowData.image_url} alt=""></img>
          </td>
          <td
            className="block w-64 px-6 py-2 text-sm font-medium
            leading-8 text-bb-purple capitalize truncate"
          >
            <div className="text-lg text-black font-sans font-semibold inline-flex">
              Product:
            </div>
            <div className="px-6 text-lg font-sans font-semibold inline-flex">
              {rowData.name}
            </div>
          </td>
          <td
            className="block w-64 px-6 py-2 text-sm font-medium
            leading-8 text-bb-purple capitalize truncate"
          >
            <div className="text-lg text-black font-sans font-semibold inline-flex">
              Price:
            </div>
            <div className="px-6 text-lg font-sans font-semibold inline-flex">
              {rowData.price}$
            </div>
          </td>
          <td
            className="block w-64 px-6 py-2 text-sm font-medium
            leading-8 text-bb-purple capitalize truncate"
          >
            <div className="text-lg text-black font-sans font-semibold inline-flex">
              Description:
            </div>
            <div className=" font-sans font-semibold ">
              {rowData.description}
            </div>
          </td>
          <td
            className="block w-64 px-6 py-2 text-sm font-medium
            leading-8 text-bb-purple capitalize truncate"
          >
            <button
              type="button"
              className={classnames(
                "relative flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 transition duration-150 ease-in-out  border border-transparent rounded-md group hover:bg-opacity-90 focus:outline-none",
                {
                  "bg-bb-purple text-white": !rowData.is_product_added_to_cart,
                  "bg-bb-gray-500 text-black": rowData.is_product_added_to_cart,
                }
              )}
              onClick={async () => await addToCart(rowData.id)}
              disabled={rowData.is_product_added_to_cart}
            >
              {rowData.is_product_added_to_cart
                ? "Product is already in the cart"
                : "Add to cart"}
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

TableRow.propTypes = {
  data: PropTypes.array.isRequired,
};

export default TableRow;
