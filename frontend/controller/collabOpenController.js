import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {API_ENDPOINT} from "@env"


const createCollabPost = async (collabPostData, showAlert,navigation) => {
  const token = await AsyncStorage.getItem('token');
  try {
    const response = await axios.post(
      `${API_ENDPOINT}/collab-open/collab-post`,
      collabPostData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status === 201) {
      navigation.navigate('BrandProfile');
      showAlert('Success', 'Collaboration post created successfully');
    } else {
      showAlert('Error', response.data.message);
    }
  } catch (error) {
    console.log(error);
    showAlert('Error', 'Something went wrong');
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
        const collabPosts = response.data.collabOpenings.map((collab) => ({
          brandName: collab.brand.brandName,
          category: collab.brand.category,
          campaignType: collab.campaignType,
          earningCapacity: collab.earningCapacity,
          campaignTimelines: collab.campaignTimelines,
          minEligibilityCriteria: collab.minEligibilityCriteria,
          postInfo: collab.postInfo,
          productReviewInstructions: collab.productReviewInstructions,
          campaignSteps: collab.campaignSteps,
          compensationType: collab.compensationType,
          numberOfInfluencers: collab.numberOfInfluencers,
          brandDescription: collab.brandDescription,
          createdAt: new Date(collab.createdAt).toLocaleDateString(),
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
  
export {createCollabPost, getAllCollabPosts}