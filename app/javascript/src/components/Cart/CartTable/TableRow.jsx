import React from "react";
import PropTypes from "prop-types";

const TableRow = ({
  data,
  removeCartItem,
  incrementQuantity,
  decrementQuantity,
}) => {
  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {data.map(rowData => (
        <tr key={rowData.id}>
          <td
            className="w-64 px-6 py-2 text-sm font-medium
            leading-8 text-bb-purple capitalize truncate"
          >
            <img src={rowData["selected_product"].image_url} alt=""></img>
          </td>
          <td
            className="block w-64 px-6 py-2 text-sm font-medium
            leading-8 text-bb-purple capitalize truncate"
          >
            <div className="text-lg text-black font-sans font-semibold inline-flex">
              Product:
            </div>
            <div className="px-6 text-lg font-sans font-semibold inline-flex">
              {rowData["selected_product"].name}
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
              {rowData["selected_product"].price}$
            </div>
          </td>
          <td
            className="block w-64 px-6 py-2 text-sm font-medium
            leading-8 text-bb-purple capitalize truncate"
          >
            <div className="text-lg text-black font-sans font-semibold inline-flex">
              Quantity:
            </div>
            <div className=" font-sans font-semibold ">{rowData.quantity}</div>
          </td>
          <td
            className="block w-64 px-6 py-2 text-sm font-medium
            leading-8 text-bb-purple capitalize truncate"
          >
            <div className="custom-number-input h-10 w-32">
              <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                <button
                  data-action="decrement"
                  className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                  onClick={() => decrementQuantity(rowData.id)}
                >
                  <span className="m-auto text-2xl font-thin">−</span>
                </button>
                <input
                  type="number"
                  className="focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                  name="custom-input-number"
                  value={rowData.quantity}
                  onChange={() => rowData.quantity}
                ></input>
                <button
                  className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                  onClick={() => incrementQuantity(rowData.id)}
                >
                  <span className="m-auto text-2xl font-thin">+</span>
                </button>
              </div>
            </div>
          </td>
          <td
            className="block w-64 px-6 py-2 text-sm font-medium
            leading-8 text-bb-purple capitalize truncate"
          >
            <button
              type="button"
              className="relative flex justify-center w-full px-4 py-2 text-sm bg-bb-purple text-white font-medium leading-5 transition duration-150 ease-in-out  border border-transparent rounded-md group hover:bg-opacity-90 focus:outline-none"
              onClick={() => removeCartItem(rowData.id)}
            >
              Remove from cart
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

TableRow.propTypes = {
  data: PropTypes.array.isRequired,
  removeCartItem: PropTypes.func,
  incrementQuantity: PropTypes.func,
  decrementQuantity: PropTypes.func,
};

export default TableRow;
