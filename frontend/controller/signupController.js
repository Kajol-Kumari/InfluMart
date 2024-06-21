import { API_ENDPOINT } from "@env";
import axios from "axios";
import { Alert } from "react-native";

const SendOtp = async (payload, navigation) => {
  const { email, name } = payload;
  try {
    // Send OTP
    const response = await axios.post(`${API_ENDPOINT}/otp/sendOTP`, {
      email,
      name,
    });
    if (response.status == 200) {
      navigation.navigate("OtpVerification", { payload });
    } else {
      const data = await response.data;
      Alert.alert("Error", data.message);
    }
  } catch (error) {
    Alert.alert("Error", "Something went wrong. Please try again.");
  }
};

const verifyOTP = async (otp, payload, navigation) => {
  try {
    const response = await axios.post(`${API_ENDPOINT}/otp/verifyOTP`, {
      email: payload.email,
      otp,
    });
    if (response.status === 200) {
      navigation.navigate("BrandAccountReviewNotification", { payload });
    } else {
      const data = await response.data;
      Alert.alert("Error", data.message);
    }
  } catch (error) {
    Alert.alert("Error", "Something went wrong. Please try again.");
  }
};

const BrandSignUp = async (payload, navigation) => {
  try {
    const response = await axios.post(`${API_ENDPOINT}/brands/signup`,payload);
    
    if (response.status === 201) {
      navigation.navigate("AccountCreatedSuccessfullyNoti");
    } else {
      const data = await response.json();
      Alert.alert("ERROR", data.message);
    }
  } catch (error) {
    Alert.alert("ERROR", "Something went wrong");
  }
};


const InfluencerSignUp = async (payload, navigation) => {
  try {
    const response = await axios.post(`${API_ENDPOINT}/influencers/signup`, payload);
    const data = await response.data
    if (response.status === 201) {
      navigation.navigate("UserProfile")
    } else {
      Alert.alert("ERROR", data.message);
    }
  } catch (error) {
    console.log(error)
    Alert.alert("ERROR", "Something went wrong");
  }
}

const InfluencerVerify = async (payload,navigation) => {
  try {
    const response = await axios.post(`${API_ENDPOINT}/influencers/verifyUser`, {userName:payload.userName,email:payload.email});
    const data = await response.data
    if (response.status === 200) {
      Alert.alert("ERROR", data.message)
    }else if(response.status===201){
      navigation.navigate("PlanChooseInterface",{payload})
    }
  } catch (error) {
    Alert.alert("ERROR", "Something went wrong");
  }
}

export { SendOtp, verifyOTP, BrandSignUp, InfluencerSignUp,InfluencerVerify };