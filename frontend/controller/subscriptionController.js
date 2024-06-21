import { API_ENDPOINT } from "@env";
import axios from "axios";
import { Alert } from "react-native";

const getSubscriptionPlans = async (payload) => {
  try {
    const response = await axios.post(
      `${API_ENDPOINT}/subscriptions/subscription-plans`,
      { platform:payload.platform, followers:payload.followers }
    );
    const data = await response.data;
    if (response.status == 200) {
      return data.charges;
    } else {
      Alert.alert("Error", data.message);
    }
  } catch (error) {
    Alert.alert("Error", "Something went wrong. Please try again.");
  }
};

const subscribe = async (subscribeData,payload, navigation) => {
  try {
    const response = await axios.post(`${API_ENDPOINT}/subscriptions/subscription`, subscribeData);
    if (response.status === 201) {
      navigation.navigate("InfluencerConfirmAccount", { payload });
    } else {
      const data = await response.data;
      Alert.alert("Error", data.message);
    }
  } catch (error) {
    Alert.alert("Error", "Something went wrong. Please try again.");
  }
};

const payment = async (payload, navigation) => {
  const { planId, paymentMethod } = payload;
  try {
    const response = await axios.post(`${API_ENDPOINT}/subscriptions/payment`, {
      planId,
      paymentMethod,
    });
    if (response.status === 200) {
      navigation.navigate("PaymentSuccess");
    } else {
      const data = await response.data;
      Alert.alert("Error", data.message);
    }
  } catch (error) {
    Alert.alert("Error", "Something went wrong. Please try again.");
  }
}

export { getSubscriptionPlans,subscribe };
