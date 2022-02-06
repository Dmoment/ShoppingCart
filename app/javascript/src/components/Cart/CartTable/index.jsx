import React from "react";

import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import TableFooter from "./TableFooter";

const Table = ({
  data,
  cartTotal,
  emptyCart,
  removeCartItem,
  incrementQuantity,
  decrementQuantity,
}) => {
  return (
    <div className="flex flex-col mt-10 ">
      <div className="my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden border-b border-gray-200 shadow md:custom-box-shadow">
            <table className="min-w-full divide-y divide-gray-200">
              <TableHeader cartTotal={cartTotal} emptyCart={emptyCart} />
              <TableRow
                data={data}
                removeCartItem={removeCartItem}
                incrementQuantity={incrementQuantity}
                decrementQuantity={decrementQuantity}
              />
              <TableFooter cartTotal={cartTotal} />
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
