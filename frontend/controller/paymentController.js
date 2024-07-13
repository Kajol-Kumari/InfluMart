import { API_ENDPOINT } from "@env";
import { Platform } from "react-native";
import RazorpayCheckout from 'react-native-razorpay';
import { RAZORPAY_KEY_ID } from "@env";
import { subscribe } from "./subscriptionController";
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

const handlePaymentMobile = async (order, payload, subscription, navigation, showAlert) => {
  const options = {
    description: "Connects influencer with brands",
    image: "https://imgur.com/g63XWcL.jpg", // App logo
    currency: "INR",
    key: RAZORPAY_KEY_ID,
    amount: order.amount, // Amount in paise
    name: "Influmart",
    order_id: order.id,
    prefill: {
      email: payload?.email,
      name: order.receipt,
    },
    theme: { color: "#1A80E5" },
  };

  RazorpayCheckout.open(options)
    .then(async (data) => {
      // handle success
      const paymentData = {
        razorpay_order_id: data.razorpay_order_id,
        razorpay_payment_id: data.razorpay_payment_id,
        razorpay_signature: data.razorpay_signature,
      };

      try {
        await verifyPayment(paymentData);
        const _subs = {
          ...subscription,
          paymentMode: JSON.stringify({
            razorpay_order_id: data.razorpay_order_id,
            razorpay_payment_id: data.razorpay_payment_id,
          }),
        };
        await subscribe(_subs, payload, navigation);
        showAlert(
          "Payment Successful",
          "Your payment has been processed successfully."
        );
      } catch (error) {
        showAlert("Payment Failed", "Your payment could not be verified.");
        console.error(error);
      }
    })
    .catch((error) => {
      // handle failure
      console.log(error);
      showAlert("Payment Failed", error);
    });
};

const loadRazorpayScript = async () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const handlePaymentWeb = async (
  order,
  payload,
  subscription,
  navigation,
  showAlert
) => {
  const options = {
    key: RAZORPAY_KEY_ID,
    amount: order.amount, // Amount in paise
    currency: "INR",
    name: "Influmart",
    description: "Connects influencer with brands",
    image: "https://imgur.com/g63XWcL.jpg",  // App logo
    order_id: order.id,
    prefill: {
      email: payload.email,
      name: order.receipt,
    },
    theme: { color: "#1A80E5" },
    handler: async function (response) {
      const paymentData = {
        razorpay_order_id: response.razorpay_order_id,
        razorpay_payment_id: response.razorpay_payment_id,
        razorpay_signature: response.razorpay_signature,
      };
      try {
        await verifyPayment(paymentData);
        const _subs = {
          ...subscription,
          paymentMode: JSON.stringify({
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
          }),
        };
        await subscribe(_subs, payload, navigation);
        showAlert(
          "Payment Successful",
          "Your payment has been processed successfully."
        );
      } catch (error) {
        console.log(error);
        showAlert("Payment Failed", "Your payment could not be verified.");
        throw error;
      }
    },
  };

  const success = await loadRazorpayScript();
  if (!success) {
    showAlert(
      "Payment Failed",
      "Failed to load payment gateway. Please try again."
    );
    return;
  }

  const rzp = new window.Razorpay(options);
  rzp.on("payment.failed", function (response) {
    console.log("Payment failed", response);
    showAlert("Payment Failed", response.error.description);
  });
  rzp.open();
};
