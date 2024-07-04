import axios from "axios";
import { API_ENDPOINT } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Forgot Password
const forgotPasswordControl = async (email, type, showAlert) => {
  try {
    const response = await axios.post(`${API_ENDPOINT}/api/password/forgot-password`, {
      email,
      type,
    });
    if (response.status === 200) {
      showAlert("Reset Email Sent", "A password reset email has been sent to your email address.");
    } else {
      showAlert("Forgot Password Error", response.data.message);
    }
  } catch (error) {
    console.error("Forgot Password Error:", error.message);
    showAlert("Forgot Password Error", "Something went wrong. Please try again.");
  }
};

const resetPasswordControl = async (token, newPassword, showAlert, navigation) => {
    try {
      const response = await axios.post(`${API_ENDPOINT}/api/password/reset-password`, { token, newPassword });
      if (response.status === 200) {
        showAlert('Password Reset', 'Password reset successfully');
        navigation.navigate('BrandorInfluencer');
      } else {
        showAlert('Password Reset Error', response.data.message);
      }
    } catch (error) {
      console.log('Error resetting password:', error);
      showAlert('Password Reset Error', 'Something went wrong');
    }
  };


export { forgotPasswordControl, resetPasswordControl } ;