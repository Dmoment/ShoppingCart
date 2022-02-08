import React from "react";

const TableFooter = ({ cartTotal }) => {
  return (
    <tfoot>
      <tr>
        <td className="w-1"></td>
        <td
          className="px-6 py-3 text-xs font-bold leading-4 tracking-wider
        text-left text-bb-gray-800 text-opacity-50 uppercase bg-gray-50"
        >
          Total Price: {`${cartTotal} $`}
        </td>
        <td
          className="px-6 py-3 text-xs font-bold leading-4 tracking-wider
        text-left text-bb-gray-800 text-opacity-50 uppercase bg-gray-50"
        >
          <button
            type="button"
            className="relative flex justify-center w-full px-4 py-2 text-sm bg-bb-purple text-white font-medium leading-5 transition duration-150 ease-in-out  border border-transparent rounded-md group hover:bg-opacity-90 focus:outline-none"
          >
            Place Order
          </button>
        </td>
      </tr>
    </tfoot>
  );
};

export default TableFooter;
