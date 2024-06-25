import { API_ENDPOINT } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const getBrandCollaborations = async (brandId, showAlert) => {
  const token = await AsyncStorage.getItem("token");
  try {
    const response = await axios.get(
      `${API_ENDPOINT}/api/collaborations/${brandId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.data;
    if (response.status == 200) {
      return data.collaborations;
    } else {
      showAlert("Brand Profile Error", data.message);
    }
  } catch (error) {
    showAlert(
      "Brand Profile Error",
      "Something went wrong. Please try again."
    );
  }
};

const getBrandMinimumRequirements = async (brandId, showAlert) => {
  const token = await AsyncStorage.getItem("token");
  try {
    const response = await axios.get(
      `${API_ENDPOINT}/api/minimum-requirements/${brandId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.data;
    if (response.status == 200) {
      return data;
    } else {
      showAlert("Brand Profile Error", data.message);
    }
  } catch (error) {
    showAlert(
      "Brand Profile Error",
      "Something went wrong. Please try again."
    );
  }
};

const BrandCollaboration = async (data, showAlert) => {
  const token = await AsyncStorage.getItem("token");
  try {
    const response = await axios.post(
      `${API_ENDPOINT}/api/collaborations`,
      data
    );
    if (response.status === 201) {
      return response.data;
    } else {
      const _data = await response.data;
      showAlert("Collaboration Error", _data.message);
    }
  } catch (error) {
    showAlert(
      "Collaboration Error",
      "Something went wrong. Please try again."
    );
  }
};

const getBrandCollaborationAnalytics = async (brandId, showAlert) => {
  const token = await AsyncStorage.getItem("token");
  try {
    const response = await axios.get(
      `${API_ENDPOINT}/api/analytics/${brandId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.data;
    if (response.status == 200) {
      return data;
    } else {
      showAlert("Brand Profile Error", data.message);
    }
  } catch (error) {
    console.log(error);
    showAlert("Brand Profile Error", "Something went wrong. Please try again.");
  }
};

export {
  getBrandCollaborationAnalytics,
  getBrandMinimumRequirements,
  getBrandCollaborations,
  BrandCollaboration,
};
