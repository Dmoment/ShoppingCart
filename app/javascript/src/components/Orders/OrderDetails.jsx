import React from "react";

const OrderDetails = ({ data }) => {
  const date = new Date(data.created_at);
  return (
    <div className="rounded-lg shadow-xl bg-white">
      <div className="p-5">
        <header className="font-semibold text-lg pb-5">Order Details</header>
        <p className="text-gray-800 px-4 py-4">Name: {data.name}</p>
        <footer>
          <p className="text-gray-800 px-4 py-4">Email: {data.email}</p>
          <p className="text-gray-800 px-4 py-4">Address: {data.address}</p>
          <p className="text-gray-800 px-4 py-4">
            Order created at: {date.toISOString().split("T")[0]}
          </p>
          <p className="text-gray-800 px-4 py-4">
            Total Price: {data.total_price}$
          </p>
        </footer>
      </div>
    </div>
  );
};

export default OrderDetails;
