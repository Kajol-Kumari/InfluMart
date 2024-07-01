import { API_ENDPOINT } from '@env';
import { handlePaymentMobile, handlePaymentWeb } from "../util/paymentFuntions";
import { Platform } from "react-native";
import RazorpayCheckout from "expo-razorpay";

export const createOrder = async ({ amount, currency, receipt }) => {
  try {
    const response = await fetch(
      `${API_ENDPOINT}/api/payment/create-order`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount, currency, receipt }),
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};

export const handlePayment = async (showAlert) => {

  if (Platform.OS !== 'web' && !RazorpayCheckout) {
    console.error("RazorpayCheckout is not initialized");
    return;
  }

  // Call backend to create order
  const order = await createOrder({
    amount: 5, // Amount in INR
    currency: "INR",
    receipt: "receipt#1",
  });

  if (!order || !order.id) {
    showAlert("Error", "Failed to create order")
    console.error("Failed to create order");
    return;
  }

  if (Platform.OS === 'web') {
    await handlePaymentWeb(order,showAlert);
  } else {
    await handlePaymentMobile(order);
  }
};


export const verifyPayment = async ({ paymentData }) => {
  try {
    const response = await fetch(
      `${API_ENDPOINT}/api/payment/verify-payment`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentData),
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error verifying payment:", error);
    throw error;
  }
};
