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

const GetAllInfluencerProfile = async (setProfile) => {
  try {
    const response = await axios.get(`${API_ENDPOINT}/influencers/profiles`);
    const data = await response.data?.influencers;

    if (response.status === 200) {
      const newData = data.map((influencer) => ({
        ...influencer,
        profileUrl: influencer.profileUrl && influencer.profileUrl.includes("uploads")
          ? `${API_ENDPOINT}/${influencer.profileUrl.replace(/\\/g, '/').replace('uploads/', '')}`
          : null,
        category: (() => {
          try {
            const categoryArray = JSON.parse(influencer.category || "[]");
            return Array.isArray(categoryArray) ? categoryArray.join(", ") : "";
          } catch (error) {
            console.error("Failed to parse category JSON:", error.message);
            return "";
          }
        })(),
      }));
      setProfile(newData);
    }
  } catch (error) {
    console.error("Profile fetching error:", error.message);
  }
};

const DeleteInfluencerProfile = async (influencerId, navigation, showAlert) => {
  const token = await AsyncStorage.getItem("token");
  try {
    const response = await axios.delete(
      `${API_ENDPOINT}/influencers/profile/${influencerId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status === 200) {
      showAlert("Profile Deleted", "Successfully deleted your profile");
      await AsyncStorage.removeItem("token");
      await AsyncStorage.removeItem("influencerId");
      navigation.navigate("LoginPage");
    }
  } catch (error) {
    console.log(error);
    showAlert("Profile Error", "Something went wrong");
  }
};

const FilterInfluencerProfile = async (filters,navigation) => {
  try {
    const response = await fetch(`${API_ENDPOINT}/influencers/search-influencers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(filters)
    });
    const data = await response.json();
    if (response.status === 200){
      const newData = data.map((influencer) => ({
        ...influencer,
        profileUrl: influencer.profileUrl && influencer.profileUrl.includes("uploads")
          ? `${API_ENDPOINT}/${influencer.profileUrl.replace(/\\/g, '/').replace('uploads/', '')}`
          : null,
        category: (() => {
          try {
            const categoryArray = JSON.parse(influencer.category || "[]");
            return Array.isArray(categoryArray) ? categoryArray.join(", ") : "";
          } catch (error) {
            console.error("Failed to parse category JSON:", error.message);
            return "";
          }
        })(),
      }));
      navigation.navigate("InfluencersList",{newData})
    }
  } catch (error) {
    console.error('Error fetching influencers:', error);
  }
}

export {
  GetInfluencerProfile,
  GetAllInfluencerProfile,
  DeleteInfluencerProfile,
  FilterInfluencerProfile,
};
