import React from "react";
import { useParams } from "react-router-dom";

const TableHeader = ({ cartTotal, emptyCart }) => {
  const cart_id = useParams();
  return (
    <thead>
      <tr>
        <th
          className="px-6 py-3 text-xs font-bold leading-4 tracking-wider
        text-left text-bb-gray-600 text-opacity-50 uppercase bg-gray-50"
        >
          Products in cart
        </th>
        <th
          className="px-6 py-3 text-xs font-bold leading-4 tracking-wider
        text-left text-bb-gray-600 text-opacity-50 uppercase bg-gray-50"
        >
          Total Price: {`${cartTotal} $`}
        </th>
        <th
          className="px-6 py-3 text-xs font-bold leading-4 tracking-wider
        text-left text-bb-gray-600 text-opacity-50 uppercase bg-gray-50"
        >
          <button
            type="button"
            className="relative flex justify-center w-full px-4 py-2 text-sm bg-bb-purple text-white font-medium leading-5 transition duration-150 ease-in-out  border border-transparent rounded-md group hover:bg-opacity-90 focus:outline-none"
            onClick={() => emptyCart(cart_id)}
          >
            Empty cart
          </button>
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
