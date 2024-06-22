import axios from "axios";
import { API_ENDPOINT } from "@env";

//It handle the Influencer login functionality
export const handleInfluencerLogin = async (username,password) => {
    if (username.trim() != "" && password.trim() != "") {
      try {
        const response = await fetch(`${API_ENDPOINT}/influencers/login`, {
          method: "post",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ username, password })
        });
        const data = await response.json()
        if (response.status == 200){
            return {success:true,message:data.message}
        }
        else
          return {success:false,message:data.message}
      }
      catch (error) {
        return {success:false,message:error.message}
      }
    }
    else
        return {success:false,message:"Please provide username and password"}
  }

//It handle the brand login functionality
export const handleBrandLogin = async (email, password) => {
  if (email.trim() != "" && password.trim() != "") {
    try {
      const response = await axios.post(
        `${API_ENDPOINT}/brands/login`,
        { email, password }
      );
      const data = await response.data;
      if (response.status == 200) {
        return { success: true, message: data.message };
      } else return { success: false, message: data.message };
    } catch (error) {
      return { success: false, message: error.message };
    }






  } else
    return { success: false, message: "Please provide email and password" };
};
