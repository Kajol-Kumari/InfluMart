import { API_ENDPOINT } from "@env";
import { handlePaymentMobile, handlePaymentWeb } from "../util/paymentFuntions";
import { Platform } from "react-native";
import RazorpayCheckout from "react-native-razorpay";

export const createOrder = async ({ amount, currency, receipt }) => {
  try {
    const response = await fetch(`${API_ENDPOINT}/api/payment/create-order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount, currency, receipt }),
    });

    const data = await response.json();
    if (response.status === 200) {
      return data;
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};

export const handlePayment = async (subscription, payload,navigation,showAlert) => {
  // Call backend to create order
  const order = await createOrder({
    amount: parseInt(subscription?.amount), // Amount in INR
    currency: "INR",
    receipt: subscription?.userName,
  });
  if (!order || !order.id) {
    showAlert("Error", "Failed to create order");
    console.error("Failed to create order");
    throw new Error({message:"Failed to create order"});
  }
  try {
    let res;
    if (Platform.OS === "web") {
      res = await handlePaymentWeb(order, payload,subscription,navigation,showAlert);
    } else {
      res = await handlePaymentMobile(order, payload,subscription,navigation,showAlert);
    }
    return res;
  } catch (error) {
    throw error;
  }
  
};

export const verifyPayment = async (paymentData) => {
  try {
    const response = await fetch(`${API_ENDPOINT}/api/payment/verify-payment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paymentData),
    });

    const data = await response.json();
    if (response.status === 200) {
      return data;
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    console.error("Error verifying payment:", error);
    throw error;
  }
};
