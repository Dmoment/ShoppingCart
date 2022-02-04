import React from "react";
import PropTypes from "prop-types";
import Button from "../../Button";

const TableRow = ({ data }) => {
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
            <Button buttonText="Add to cart" />
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
