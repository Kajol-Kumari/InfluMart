import { API_ENDPOINT } from "@env";
import axios from "axios";

const SendOtp = async (payload, navigation,showAlert) => {
  const { email, name } = payload;
  try {
    // Send OTP
    const response = await axios.post(`${API_ENDPOINT}/otp/sendOTP`, {
      email,
      name,
    });
    if (response.status == 200) {
      showAlert("OTP Sent", "OTP has been sent to your email address.");
      navigation.navigate("OtpVerification", { payload });
    } else {
      const data = await response.data;
      showAlert("OTP Sending Error", data.message);
    }
  } catch (error) {
    showAlert("OTP Sending Error", "Something went wrong. Please try again.");
  }
};

const verifyOTP = async (otp, payload, navigation,showAlert) => {
  try {
    const response = await axios.post(`${API_ENDPOINT}/otp/verifyOTP`, {
      email: payload.email,
      otp,
    });
    if (response.status === 200) {
      showAlert("OTP Verified", "OTP has been verified successfully.");
      navigation.navigate("BrandAccountReviewNotification", { payload });
    } else {
      const data = await response.data;
      showAlert("OTP Verify Error", data.message);
    }
  } catch (error) {
    showAlert("OTP Verify Error", "Something went wrong. Please try again.");
  }
};

const BrandSignUp = async (payload, navigation,showAlert) => {
  try {
    const response = await axios.post(`${API_ENDPOINT}/brands/signup`,payload);
    
    if (response.status === 201) {
      navigation.navigate("AccountCreatedSuccessfullyNoti");
    } else {
      const data = await response.json();
      showAlert("Brand SignUp Error", data.message);
    }
  } catch (error) {
    showAlert("Brand SignUp Error", "Something went wrong");
  }
};


const InfluencerSignUp = async (payload, navigation,showAlert) => {
  try {
    const response = await axios.post(`${API_ENDPOINT}/influencers/signup`, payload);
    const data = await response.data
    if (response.status === 201) {
      navigation.navigate("UserProfile")
    } else {
      showAlert("Influencer SignUp Error", data.message);
    }
  } catch (error) {
    console.log(error)
    showAlert("Influencer SignUp Error", "Something went wrong");
  }
}

const InfluencerVerify = async (payload,navigation,showAlert) => {
  try {
    const response = await axios.post(`${API_ENDPOINT}/influencers/verifyUser`, {userName:payload.userName,email:payload.email});
    const data = await response.data
    if (response.status === 200) {
      showAlert("Influencer SignUp Error", data.message)
    }else if(response.status===201){
      navigation.navigate("PlanChooseInterface",{payload})
    }
  } catch (error) {
    showAlert("Influencer SignUp Error", "Something went wrong");
    console.log(error)
  }
}

export { SendOtp, verifyOTP, BrandSignUp, InfluencerSignUp,InfluencerVerify };