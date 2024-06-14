import { API_ENDPOINT } from "@env";
import { Alert } from "react-native";

const SendOtp = async (payload, navigation) => {
  const { email, username } = payload;
  try {
    // Send OTP
    const response = await fetch(`${API_ENDPOINT}/otp/sendOTP`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, name: username }),
    });
    const data = await response.json();
    if (response.status == 200) {
      navigation.navigate("OtpVerification", { payload });
    } else {
      Alert.alert("Error", data.message);
    }
  } catch (error) {
    Alert.alert("Error", "Something went wrong. Please try again.");
  }
};

const verifyOTP = async (otp, payload, navigation) => {
  try {
    const response = await fetch(`${API_ENDPOINT}/otp/verifyOTP`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        otp,
      }),
    });
    const data = await response.json();
    if (response.status === 200) {
      navigation.navigate("BrandAccountReviewNotification", { payload });
    } else {
      Alert.alert("Error", data.message);
    }
  } catch (error) {
    Alert.alert("Error", "Something went wrong. Please try again.");
  }
};

const BrandSignUp = async (payload, navigation) => {
  try {
    const response = await fetch(`${API_ENDPOINT}/brands/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    if (response.status === 201) {
      navigation.navigate("AccountCreatedSuccessfullyNoti");
    } else {
      Alert.alert("ERROR", data.message);
    }
  } catch (error) {
    Alert.alert("ERROR", "Something went wrong");
  }
};

export { SendOtp, verifyOTP, BrandSignUp };
