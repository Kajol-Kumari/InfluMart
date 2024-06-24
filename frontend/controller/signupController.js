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
  const data = new FormData();
  data.append("name", payload.name);
  data.append("email", payload.email);
  data.append("password", payload.password);
  data.append("category", JSON.stringify(payload.category));
  data.append("location", payload.location);
  data.append("website", payload.website);
  data.append("description", payload.description);
  data.append("image", payload.image);
  try {
    const response = await axios.post(`${API_ENDPOINT}/brands/signup`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    if (response.status === 201) {
      navigation.navigate("AccountCreatedSuccessfullyNoti");
    } else {
      const _data = await response.data;
      showAlert("Brand SignUp Error", _data.message);
    }
  } catch (error) {
    showAlert("Brand SignUp Error", "Something went wrong");
  }
};


const InfluencerSignUp = async (payload, navigation,showAlert) => {
  const data = new FormData();
  data.append("userName", payload.userName);
  data.append("email", payload.email);
  data.append("password", payload.password);
  data.append("industryAssociation", payload.industryAssociation);
  data.append("location", payload.location);
  data.append("over18", payload.over18);
  data.append("agreedToTerms", payload.agreedToTerms);
  data.append("social", JSON.stringify(payload.social));
  data.append("follower", JSON.stringify(payload.follower));
  data.append("price", JSON.stringify(payload.price));
  data.append("image", payload.profileUrl);
  data.append("firstName", payload.userName);
  data.append("nickName", payload.userName);
  data.append("instaProfile", payload.social?.insta);
  data.append("facebookProfile", payload.social?.fb);
  data.append("linkedInProfile", payload.social?.linkedIn);
  data.append("twitterProfile", payload.social?.tr);
  data.append("youtubeChannel", payload.social?.yt);
  try {
    const response = await axios.post(`${API_ENDPOINT}/influencers/signup`, data,{
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    const _data = await response.data
    if (response.status === 201) {
      navigation.navigate("UserProfile")
    } else {
      showAlert("Influencer SignUp Error", _data.message);
    }
  } catch (error) {
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
  }
}

export { SendOtp, verifyOTP, BrandSignUp, InfluencerSignUp,InfluencerVerify };