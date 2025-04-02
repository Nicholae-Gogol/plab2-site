// server.js
const express = require('express');
const app = express();
const cors = require('cors');
const stripe = require('stripe')('sk_test_51R9DDXQ4wdaa0J5pnyUforbF5tcsvGnDnQ6iNztFif1ZvltQpBhgrbMqK6dH1mbeU359pcGWTQQqG4dwaJ3roO8t0011L7Ao8r');

// Use CORS to allow requests from your frontend
app.use(cors());
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Create Payment Intent endpoint
app.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body; // amount should be provided in cents

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount, // For example, 5000 means $50.00
      currency: 'usd', // You can change the currency if needed
    });

    // Send the client secret to the frontend
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).json({ error: error.message });
  }
});

// Define a port
const PORT = process.env.PORT || 4242;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
