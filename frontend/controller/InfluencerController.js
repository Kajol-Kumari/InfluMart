import axios from "axios";
import { API_ENDPOINT } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

const GetInfluencerProfile = async (influencerId, setProfile, showAlert) => {
  const token = await AsyncStorage.getItem('token');
  try {
    const response = await axios.get(
      `${API_ENDPOINT}/influencers/profile/${influencerId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.data?.influencer
    if (response.status === 200) {
      let newData = {...data, profileUrl: data.profileUrl.includes("uploads")
          ? `${API_ENDPOINT}/${data.profileUrl.replace(/\\/g, '/').replace('uploads/', '')}`
          : null,category: (() => {
            try {
              const categoryArray = JSON.parse(data.category || "[]");
              return Array.isArray(categoryArray) ? categoryArray.join(", ") : "";
            } catch (error) {
              console.error("Failed to parse category JSON:", error.message);
              return "";
            }
          })(),
        price: data?.price && JSON.parse(data.price),
        }
      setProfile(newData);
    } else {
      showAlert("Profile Error", response.data.message);
    }
  } catch (error) {
    console.log(error);
    showAlert("Profile Error", "Something went wrong");
  }
};

export {GetInfluencerProfile}