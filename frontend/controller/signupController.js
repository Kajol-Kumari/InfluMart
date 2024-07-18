import { API_ENDPOINT } from "@env";
import axios from "axios";
import { Platform } from "react-native";

const SendOtp = async (payload, navigation, showAlert) => {
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

const verifyOTP = async (otp, payload, navigation, showAlert) => {
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

const BrandSignUp = async (payload, navigation, showAlert) => {
  const data = new FormData();
  data.append("name", payload.name);
  data.append("email", payload.email);
  data.append("password", payload.password);
  data.append("brandName", payload.brandName);
  data.append("category", JSON.stringify(payload.category));
  data.append("location", payload.location || "");
  data.append("website", payload.website || "");
  data.append("description", payload.description || "");

  if (payload.image && payload.image.uri) {
    // For web, handle base64 string as a Blob
    if (Platform.OS === "web") {
      const blob = await (await fetch(payload.image.uri)).blob();
      data.append("image", blob, payload.image.name);
    } else {
      // For mobile platforms
      data.append("image", {
        uri: payload.image.uri,
        name: payload.image.name,
        type: payload.image.type,
      });
    }
  }

  try {
    const response = await axios.post(`${API_ENDPOINT}/brands/signup`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (response.status === 201) {
      navigation.navigate("AccountCreatedSuccessfullyNoti");
    } else {
      const _data = response.data;
      showAlert("Brand SignUp Error", _data.message);
    }
  } catch (error) {
    console.error("SignUp Error:", error);
    showAlert("Brand SignUp Error", "Something went wrong");
  }
};

const InfluencerSignUp = async (payload, navigation, showAlert) => {
  const data = new FormData();
  data.append("userName", payload?.userName);
  data.append("email", payload?.email);
  data.append("password", payload?.password);
  data.append("industryAssociation", payload?.industryAssociation);
  data.append("location", payload?.location);
  data.append("over18", payload?.over18);
  data.append("agreedToTerms", payload?.agreedToTerms);
  data.append("social", JSON.stringify(payload?.social));
  data.append("follower", JSON.stringify(payload?.follower));
  data.append("price", JSON.stringify(payload?.price));
  data.append("firstName", payload?.userName);
  data.append("nickName", payload?.userName);
  data.append("instaProfile", payload?.instaProfile);
  data.append("facebookProfile", payload?.social?.fb);
  data.append("linkedInProfile", payload?.social?.linkedIn);
  data.append("twitterProfile", payload?.social?.tr);
  data.append("youtubeChannel", payload?.social?.yt);
  data.append("influencerName", payload?.name);
  data.append("category",JSON.stringify(payload?.selected));
  data.append("phoneNo[country]",payload?.country);
  data.append("phoneNo[number]", payload?.number?.toString());
  data.append("gender",payload?.gender)
  data.append("paymentId",payload?.paymentId)
  data.append("subscriptionId",payload?.subscriptionId)
  data.append("amount",payload?.amount)
  if (payload.profileUrl && payload.profileUrl.uri) {
    // For web, handle base64 string as a Blob
    if (Platform.OS === "web") {
      const blob = await (await fetch(payload.profileUrl.uri)).blob();
      data.append("image", blob, payload.profileUrl.name);
    } else {
      // For mobile platforms
      data.append("image", {
        uri: payload.profileUrl.uri,
        name: payload.profileUrl.name,
        type: payload.profileUrl.type,
      });
    }
  }
  try {
    const response = await axios.post(
      `${API_ENDPOINT}/influencers/signup`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    const _data = await response.data;
    if (response.status === 201) {
      navigation.navigate("InfluencerAccountSuccess");
    }
  } catch (error) {
    console.log(error);
    showAlert("Influencer SignUp Error", error?.response?.data?.message||"Something went wrong");
    navigation.navigate("InfluencerRegistrationForm")
  }
};

const InfluencerVerify = async (payload, navigation, showAlert) => {
  try {
    const response = await axios.post(
      `${API_ENDPOINT}/influencers/verifyUser`,
      { userName: payload.userName, email: payload.email }
    );
    const data = await response.data;
    if (response.status === 200) {
      showAlert("Influencer SignUp Error", data.message);
    } else if (response.status === 201) {
      console.log(data);
      navigation.navigate("PlanChooseInterface", { payload });
    }
  } catch (error) {
    console.log(error);
    showAlert("Influencer SignUp Error", "Something went wrong");
  }
};

export { SendOtp, verifyOTP, BrandSignUp, InfluencerSignUp, InfluencerVerify };
