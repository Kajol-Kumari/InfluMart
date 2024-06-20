import { API_ENDPOINT } from "@env";
import axios from "axios";
import { Alert } from "react-native";

const getSocialData = async (userId) => {
  try {
    const url = `${API_ENDPOINT}/social/${userId}`
    const response = await axios.get(url);
    if (response.status == 200) {
        return response.data;
    } else {
      const data = await response.json();
      Alert.alert("Error", data.message);
    }
  } catch (error) {
    console.log("error",error);
    Alert.alert("Error", "Something went wrong. Please try again.");
  }
};


export { getSocialData};
