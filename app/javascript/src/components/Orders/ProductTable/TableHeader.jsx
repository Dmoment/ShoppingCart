import React from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th className="w-1"></th>
        <th
          className="px-6 py-3 text-xs font-bold leading-4 tracking-wider
        text-left text-bb-gray-600 text-opacity-50 uppercase bg-gray-50"
        >
          Purchased Products
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
