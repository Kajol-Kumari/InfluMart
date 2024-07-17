import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {API_ENDPOINT} from "@env"

const createCollabPost = async (collabPostData, showAlert,navigation) => {
  
  const data = new FormData();
  data.append("campaignType", collabPostData?.campaignType);
  data.append("earningCapacity[min]", collabPostData?.earningCapacity?.min);
  data.append("earningCapacity[max]", collabPostData?.earningCapacity?.max);
  data.append("campaignTimelines", collabPostData?.campaignTimelines);
  data.append("minEligibilityCriteria", collabPostData?.minEligibilityCriteria);
  data.append("postInfo", collabPostData?.postInfo);
  data.append("productReviewInstructions", collabPostData?.productReviewInstructions);
  data.append("campaignSteps", collabPostData?.campaignSteps);
  data.append("brandName", collabPostData?.brandName);
  data.append("numberOfInfluencers", collabPostData?.numberOfInfluencers);
  data.append("brandDescription", collabPostData?.brandDescription);
  data.append("brandId", collabPostData?.brandId);
  data.append("compensationType", collabPostData?.compensationType);


  if (collabPostData.image && collabPostData.image.uri) {
    // For web, handle base64 string as a Blob
    if (Platform.OS === "web") {
      const blob = await (await fetch(collabPostData.image.uri)).blob();
      data.append("image", blob, collabPostData.image.name);
    } else {
      // For mobile platforms
      data.append("image", {
        uri: collabPostData.image.uri,
        name: collabPostData.image.name,
        type: collabPostData.image.type,
      });
    }
  }
  const token = await AsyncStorage.getItem('token');
  try {
    const response = await axios.post(`${API_ENDPOINT}/collab-open/collab-post`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 201) {
      navigation.navigate('BrandProfile');
      showAlert('Success', 'Collaboration post created successfully');
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    console.log(error);
    throw error
  }
};

const getAllCollabPosts = async (setCollabPosts, showAlert) => {
    const token = await AsyncStorage.getItem('token');
    try {
      const response = await axios.get(
        `${API_ENDPOINT}/collab-open/get-collab-open`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        const collabPosts = response.data?.collabOpenings?.map((collab) => ({
          brandName: collab.brand.brandName,
          brandId: collab.brand._id,
          category: collab.brand.category,
          campaignType: JSON.parse(collab.campaignType).join(", "),
          earningCapacity: `${collab.earningCapacity?.min} to ${collab.earningCapacity?.max}`,
          campaignTimelines: collab.campaignTimelines,
          minEligibilityCriteria: collab.minEligibilityCriteria,
          postInfo: JSON.parse(collab.postInfo).join(", "),
          productReviewInstructions: collab.productReviewInstructions,
          campaignSteps: collab.campaignSteps,
          compensationType: collab.compensationType,
          numberOfInfluencers: collab.numberOfInfluencers,
          brandDescription: collab.brandDescription,
          createdAt: new Date(collab.createdAt).toLocaleDateString(),
          imageSource: collab?.photoUrl?.includes("uploads")
            ? `${API_ENDPOINT}/${collab?.photoUrl?.replace(/\\/g, '/').replace('uploads/', '')}`
            : null,
        }));
        setCollabPosts(collabPosts);
      } else {
        showAlert('Error', response.data.message);
      }
    } catch (error) {
      console.log(error);
      showAlert('Error', 'Something went wrong');
    }
  };
// Send Collaboration Request
const sendCollabOpenRequest = async (influencerId, brandId, showAlert,navigation) => {
  const token = await AsyncStorage.getItem('token');
  try {
    const response = await axios.post(
      `${API_ENDPOINT}/collab-open/send-collab-open-request`,
      { influencerId, brandId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status === 200) {
      showAlert('Success', 'Request sent successfully');
      navigation.navigate('CollabPost');
    } else {
      showAlert('Error', response.data.message);
    }
  } catch (error) {
    console.log(error);
    showAlert('Collab Open Request Error', error.response.data.message);
  }
};

// Fetch All Collaboration Requests for a User
const getAllCollabOpenRequests = async (userId, setRequests, showAlert) => {
  const token = await AsyncStorage.getItem('token');
  try {
    const response = await axios.get(
      `${API_ENDPOINT}/collab-open/collab-open-requests/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status === 200) {
      const data = response.data.user;
        const formatData = data.map((item) => ({
            imageSource: item?.sender?.profileUrl
              ? {
                  uri: `${API_ENDPOINT}/${item?.sender?.profileUrl?.replace(
                    /\\/g,
                    "/"
                  ).replace("uploads/", "")}`,
                }
              : require("../assets/blank-profile.png"),
            postTitle: item?.sender?.influencerName,
            postDate: new Date(item?.requestedAt)?.toLocaleDateString(),
            productName: JSON.parse(item?.sender?.category)?.slice(0, 2)?.join(", "),
            requestId: item?._id,
          }));
      setRequests(formatData);
    } else {
      showAlert('Error', response.data.message);
    }
  } catch (error) {
    console.log("all request",error);
    showAlert('Error', 'Something went wrong');
  }
};

// Accept a Collaboration Request
const acceptCollabOpen = async (requestId, showAlert, navigation) => {
  const token = await AsyncStorage.getItem('token');
  try {
    const response = await axios.post(
      `${API_ENDPOINT}/collab-open/accept-collab-open-request`,
      { requestId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status === 200) {
      showAlert('Success', 'Request accepted and message sent');
      navigation.navigate('BrandProfile'); 
    } else {
      showAlert('Error', response.data.message);
    }
  } catch (error) {
    console.log(error);
    showAlert('Error', 'Something went wrong');
  }
};

// Reject a Collaboration Request
const rejectCollabOpen = async (requestId, showAlert) => {
  const token = await AsyncStorage.getItem('token');
  try {
    const response = await axios.post(
      `${API_ENDPOINT}/collab-open/reject-collab-open-request`,
      { requestId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status === 200) {
      showAlert('Success', 'Request rejected successfully');
      navigation.navigate('BrandProfile');
    } else {
      showAlert('Error', response.data.message);
    }
  } catch (error) {
    console.log(error);
    showAlert('Error', 'Something went wrong');
  }
};

export {createCollabPost, getAllCollabPosts, sendCollabOpenRequest, getAllCollabOpenRequests, acceptCollabOpen, rejectCollabOpen};