// PaymentForm.js
import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const PaymentForm = ({ amount = 50 }) => {
  const stripe = useStripe();
  const elements = useElements();

  // State to track errors and processing state
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);

  // Handle form submission to create and confirm a PaymentIntent
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't loaded yet.
      return;
    }

    setProcessing(true);

    // Convert amount (in dollars) to cents
    const amountInCents = Number(amount) * 100;

    // Call your backend to create a PaymentIntent.
    // Ensure the URL matches your backend endpoint.
    const response = await fetch("http://localhost:4242/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // Amount here is in cents
      body: JSON.stringify({ amount: amountInCents }),
    });

    // Get the clientSecret from the response
    const { clientSecret } = await response.json();

    // Confirm the payment using the client secret from your server
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (result.error) {
      // Show error to your customer (e.g., insufficient funds)
      setError(result.error.message);
    } else {
      // Payment succeeded!
      if (result.paymentIntent && result.paymentIntent.status === "succeeded") {
        alert("Payment succeeded!");
      }
    }

    setProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "0 auto" }}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        type="submit"
        disabled={!stripe || processing}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        {processing ? "Processing…" : `Pay $${amount}`}
      </button>
      {error && <div style={{ color: "red", marginTop: "10px" }}>{error}</div>}
    </form>
  );
};

export default PaymentForm;


