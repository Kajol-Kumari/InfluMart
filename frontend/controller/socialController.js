import { API_ENDPOINT } from "@env";
import axios from "axios";

const getSocialData = async (userId,showAlert) => {
  try {
    const url = `${API_ENDPOINT}/social/${userId}`
    const response = await axios.get(url);
    if (response.status == 200) {
        return response.data;
    } else {
      const data = await response.json();
      showAlert("Error", data.message);
    }
  } catch (error) {
    console.log("error",error);
    showAlert("Error", "Something went wrong. Please try again.");
  }
};


export { getSocialData};
