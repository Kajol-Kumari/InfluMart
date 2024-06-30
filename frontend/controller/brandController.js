import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { API_ENDPOINT } from "@env";

const getBrandProfile = async (brandId, showAlert) => {
  const token = await AsyncStorage.getItem("token");
  try {
    const response = await axios.get(
      `${API_ENDPOINT}/brands/profile/${brandId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.data;
    if (response.status == 200) {
      let brand = {
        ...data.brand,
        category: JSON.parse(data.brand.category).join(", "),
        profileUrl: data.brand.profileUrl.includes("uploads")
          ? `${API_ENDPOINT}/${data.brand.profileUrl.replace(/\\/g, '/').replace('uploads/', '')}`
          : null,
      };
      console.log("brand");
      return brand;
    } else {
      showAlert("Brand Profile Error", data.message);
    }
  } catch (error) {
    console.log(error);
    showAlert("Brand Profile Error", "Something went wrong. Please try again.");
  }
};

const getAllBrandProfiles = async (showAlert) => {
  const token = await AsyncStorage.getItem("token")
  try {
    const response = await axios.get(`${API_ENDPOINT}/brands/getAllBrands`, {
      headers: {
        Authorization: `Bearer ${token}`
      },
    })
    let data = await response.data.brands;
    
    data = data.map((brand) => {
      return {
        ...brand, profileUrl: brand.profileUrl.includes("uploads")
          ? `${API_ENDPOINT}/${brand.profileUrl.replace(/\\/g, '/').replace('uploads/', '')}`
          : null
      }
    })
    return data
  } catch (error) {
    console.log(error)
    showAlert("Brand Profiles Error", "Something went wrong")
  }
}

export { getBrandProfile, getAllBrandProfiles };
