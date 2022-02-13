import React from "react";
import Input from "../Input";
import Button from "../Button";
import InputArea from "../InputArea";

const OrderForm = ({
  type,
  setName,
  name,
  email,
  setEmail,
  address,
  setAddress,
  handleSubmit,
  loading,
}) => {
  return (
    <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
      <Input
        label="Name"
        placeholder="Name (Max 50 Characters Allowed)"
        value={name}
        onChange={e => setName(e.target.value.slice(0, 50))}
      />
      <Input
        label="Email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <InputArea
        label="Address"
        placeholder="Address"
        value={address}
        onChange={e => setAddress(e.target.value)}
      />
      <Button
        type="submit"
        buttonText={(type = "Place Order")}
        loading={loading}
      />
    </form>
  );
};

export default OrderForm;
