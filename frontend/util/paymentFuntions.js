import RazorpayCheckout from "react-native-razorpay";
import { RAZORPAY_KEY_ID } from "@env";

const handlePaymentMobile = async (order) => {
  const options = {
    description: "Connects influencer with brands",
    image: "https://i.imgur.com/3g7nmJC.png",
    currency: "INR",
    key: RAZORPAY_KEY_ID,
    amount: "5000", // Amount in paise
    name: "Influmart",
    order_id: order.id,
    prefill: {
      email: "void@razorpay.com",
      contact: "9191919191",
      name: "Razorpay Software",
    },
    theme: { color: "#1A80E5" },
  };

  RazorpayCheckout.open(options)
    .then((data) => {
      // handle success
      console.log(`Success: ${data.razorpay_payment_id}`);
    })
    .catch((error) => {
      // handle failure
      console.log(`Error: ${error.code} | ${error.description}`);
      console.error(error);
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

const handlePaymentWeb = async (order,showAlert) => {
  const options = {
    key: RAZORPAY_KEY_ID,
    amount: "5000", // Amount in paise
    currency: "INR",
    name: "Influmart",
    description: "Connects influencer with brands",
    image: "https://i.imgur.com/3g7nmJC.png",
    order_id: order.id,
    prefill: {
      email: "void@razorpay.com",
      name: "Razorpay Software",
    },
    theme: { color: "#1A80E5" },
    handler: function (response) {
      console.log(`Success: ${response.razorpay_payment_id}`);
    },
    modal: {
      ondismiss: function () {
        showAlert("Payment Cancelled","You cancelled to Procced Payment");
      },
    },
  };

  const success = await loadRazorpayScript();
  if (!success) {
    console.error("Razorpay SDK failed to load");
    return;
  }

  const rzp = new window.Razorpay(options);
  rzp.open();
};

export { handlePaymentMobile, handlePaymentWeb };
