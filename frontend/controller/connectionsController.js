import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_ENDPOINT } from '@env';

const sendRequest = async (senderId, receiverId, showAlert) => {
  const token = await AsyncStorage.getItem('token');
  try {
    const response = await axios.post(
      `${API_ENDPOINT}/connection/send-request`,
      { senderId, receiverId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status === 200) {
      showAlert("Success", "Request sent");
    } else {
      showAlert("Error", response.data.message);
    }
  } catch (error) {
    console.log(error);
    showAlert("Error", "Something went wrong");
  }
};

const getAllRequests = async (userId, setRequests, showAlert) => {
  const token = await AsyncStorage.getItem('token');
  try {
    const response = await axios.get(
      `${API_ENDPOINT}/connection/requests/${userId}`,
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
            postTitle: item?.sender?.name,
            postDate: new Date(item?.requestedAt)?.toLocaleDateString(),
            productName: JSON.parse(item?.sender?.category)?.slice(0, 2)?.join(", "),
            requestId: item?._id,
          }));
      setRequests(formatData);
    } else {
      showAlert("Error", response.data.message);
    }
  } catch (error) {
    console.log(error);
    showAlert("Error", "Something went wrong");
  }
};

const acceptRequest = async (requestId, showAlert) => {
  const token = await AsyncStorage.getItem('token');
  try {
    const response = await axios.post(
      `${API_ENDPOINT}/connection/accept-request`,
      { requestId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status === 200) {
      showAlert("Success", "Request accepted and hello message sent");
    } else {
      showAlert("Error", response.data.message);
    }
  } catch (error) {
    console.log(error);
    showAlert("Error", "Something went wrong");
  }
};

const rejectRequest = async (requestId, showAlert) => {
  const token = await AsyncStorage.getItem('token');
  try {
    const response = await axios.post(
      `${API_ENDPOINT}/connection/reject-request`,
      { requestId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status === 200) {
      showAlert("Success", "Request rejected");
    } else {
      showAlert("Error", response.data.message);
    }
  } catch (error) {
    console.log(error);
    showAlert("Error", "Something went wrong");
  }
};

export { sendRequest, getAllRequests, acceptRequest, rejectRequest };
