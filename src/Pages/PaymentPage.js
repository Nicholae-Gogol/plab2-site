import React from "react";
import PaymentForm from "../components/PaymentForm";
import { useLocation } from "react-router-dom";

const PaymentPage = () => {
  // Get query params from the URL
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const planName = queryParams.get("plan") || "Custom Plan";
  const price = queryParams.get("price") || 0;

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "2rem" }}>
      <h1>Checkout</h1>
      <p>
        You have selected: <strong>{planName}</strong>
      </p>
      <p>Price: ${price}</p>

      {/* Pass the price to PaymentForm as a prop */}
      <PaymentForm amount={price} />
    </div>
  );
};

export default PaymentPage;

