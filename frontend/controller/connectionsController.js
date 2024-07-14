import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_ENDPOINT } from '@env';
import {timeStampFormatter} from '../helpers/GraphData'

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
    } 
  } catch (error) {
    console.log(error);
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
      return response.data;
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

const closeChat = async (userId, chatUserId, showAlert) => {
  const token = await AsyncStorage.getItem('token');
  try {
    const response = await axios.post(
      `${API_ENDPOINT}/connection/closeChat`,
      { userId, chatUserId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status === 200) {
      showAlert("Success", "Chat closed");
    } else {
      showAlert("Error", response.data.message);
    }
  } catch (error) {
    console.log(error);
    showAlert("Error", "Something went wrong");
  }
};

const sendMessage = async (senderId, receiverId, content, showAlert) => {
  const token = await AsyncStorage.getItem('token');
  try {
    const response = await axios.post(
      `${API_ENDPOINT}/connection/send-message`,
      { senderId, receiverId, content },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status === 200) {
      return response.data;
      //showAlert("Success", "Message sent");
    } else {
      //showAlert("Error", response.data.message);
    }
  } catch (error) {
    console.log(error);
    //showAlert("Error", "Something went wrong");
  }
};

const getMessages = async (conversationId,userId,userType, setMessages, showAlert) => {
  const token = await AsyncStorage.getItem('token');

  try {
    const response = await axios.post(
      `${API_ENDPOINT}/connection/messages/${conversationId}`,
      {userId, userType},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
      
    );
    if (response.status === 200) {
      const formattedMessages = response.data.messages.map(message => ({
        _id: message._id,
        content: message.content,
        createdAt: message.createdAt,
        sender:{
          name: userId===message.sender._id? "You": message.sender?.brandName || message.sender?.influencerName,
          profileUrl: message.sender?.profileUrl ? `${API_ENDPOINT}/${message.sender?.profileUrl?.replace(/\\/g, "/")?.replace("uploads/", "")}` : null
        },
        timeAgo: timeStampFormatter(message.createdAt)
      }));
      setMessages(formattedMessages);
    } else {
      //showAlert("Error", response.data.message);
    }
  } catch (error) {
    console.log(error);
    //showAlert("Error", "Something went wrong");
  }
};

const getAllConversations = async (userId, userType, setConversations, showAlert) => {
  const token = await AsyncStorage.getItem('token');
  try {
    const response = await axios.post(
      `${API_ENDPOINT}/connection/get-conversation`,
      { userId, userType },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status === 200) {
      const conversations = response.data.conversations.map(conversation => {
        // Find the participant that is not the current user
        const participant = conversation.participants.find(p => p._id !== userId);
        const lastMessage = conversation.messages.length > 0 ? conversation.messages[0] : null;
        return {
          name: userType === 'influencer' ? participant?.brandName : participant?.influencerName,
          profileUrl: participant?.profileUrl ? `${API_ENDPOINT}/${participant?.profileUrl?.replace(/\\/g, "/")?.replace("uploads/", "")}` : require("../assets/blank-profile.png"),
          lastMessage: lastMessage ? lastMessage.content : '',
          lastUpdate: lastMessage ? new Date(lastMessage?.createdAt).toLocaleString() : new Date(conversation?.updatedAt).toLocaleString(),
          conversationId: conversation?._id,
          receiverId: participant?._id
        };
      });
      setConversations(conversations||[]);
    } else {
      showAlert("Error", response.data.message);
    }
  } catch (error) {
    console.log(error);
    showAlert("Error", "Something went wrong");
  }
};



export { sendRequest, getAllRequests, acceptRequest, rejectRequest, closeChat, sendMessage, getAllConversations, getMessages};
