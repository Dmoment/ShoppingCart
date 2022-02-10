import React from "react";
import PropTypes from "prop-types";
import CartIcon from "../../../Products/CartIcon";

const TableRow = ({ data }) => {
  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {data.map(rowData => (
        <tr key={rowData.id}>
          <td
            className=" w-64 px-6 py-2 text-sm font-medium
            leading-8 text-bb-purple capitalize truncate"
          >
            <div className="text-lg text-black font-sans font-semibold inline-flex">
              Name:
            </div>
            <div className="px-6 text-lg font-sans font-semibold inline-flex">
              {rowData.name}
            </div>
          </td>
          <td
            className="w-64 px-6 py-2 text-sm font-medium
            leading-8 text-bb-purple capitalize truncate"
          >
            <div className="text-lg text-black font-sans font-semibold inline-flex">
              Email:
            </div>
            <div className="px-2 text-lg font-sans font-semibold inline-flex">
              {rowData.email}
            </div>
          </td>
          <td
            className="w-64 px-6 py-2 text-sm font-medium
            leading-8 text-bb-purple capitalize truncate"
          >
            <div className="text-lg text-black font-sans font-semibold inline-flex">
              <CartIcon
                iconClass={"ri-eye-line ri-x"}
                name="View"
                path={`/orders/${rowData.id}/show`}
              />
            </div>
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
