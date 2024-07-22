const express = require("express");
const Request = require("../model/Request");
const Message = require("../model/Message");
const InfluencerSignupRequest = require("../model/influencerSignupRequestModel");
const Brand = require("../model/brandDbRequestModel");
const Conversation = require("../model/conversation");
const { getReceiverSocketId } = require("../socket/socket");

// Send a connection request
const sendRequest = async (req, res) => {
  const { senderId, receiverId } = req.body;
  const isRequestExists=await Request.findOne({sender:senderId,receiver:receiverId});
  if(isRequestExists)
    return res.status(500).json({message:"Request already exists"})
  const request = new Request({ sender: senderId, receiver: receiverId });
  await request.save();
  await InfluencerSignupRequest.findByIdAndUpdate(receiverId, {
    $push: { notifications: request._id },
  })
  res.status(200).json({ message: "Request sent" });
};

// View all requests for a user
const allRequests = async (req, res) => {
  const { userId } = req.params;
  const user = await InfluencerSignupRequest.findById(userId).populate({
    path: "notifications",
    populate: {
      path: "sender",
      model: "Brand",
      options: { select: "name category profileUrl isSelectedImage" }
    },
  });
  res.status(200).json({ user: user?.notifications });
};

// Accept a connection request
const accept = async (req, res, next) => {
  const { requestId } = req.body;
  const request = await Request.findById(requestId).populate("sender receiver");

  // Send automatic message
  const autoMessage = new Message({
    sender: request.receiver._id,
    receiver: request.sender._id,
    content: "I am interested in collaborating with you",
  });

  // Find or create a conversation
  let conversation = await Conversation.findOne({
    participants: { $all: [request.sender._id, request.receiver._id] },
  });
  if (!conversation) {
    conversation = await Conversation.create({
      participants: [request.sender._id, request.receiver._id],
    });
  }
  conversation.messages.push(autoMessage._id);

  // Add conversation to both users
  await InfluencerSignupRequest.findByIdAndUpdate(request.receiver._id, {
    $push: { conversations: conversation._id }
  });
  await Brand.findByIdAndUpdate(request.sender._id, {
    $push: { conversations: conversation._id }
  });

  await Promise.all([
    autoMessage.save(),
    conversation.save(),
    Request.findByIdAndDelete(requestId),
  ]);

  res.status(200).json({ message: "Request accepted and message sent", senderId: request.sender._id, receiverId: request.receiver._id });
};

// Reject a connection request

const reject = async (req, res) => {
  const { requestId } = req.body;
  await Request.findByIdAndDelete(requestId);
  res.status(200).json({ message: "Request rejected" });
};

const closeChat = async (req, res) => {
  const { userId, chatUserId } = req.body;

  // Remove all messages between these users
  await Message.deleteMany({ sender: userId, receiver: chatUserId });
  await Message.deleteMany({ sender: chatUserId, receiver: userId });

  res.status(200).json({ message: "Chat closed" });
};

const sendMessage = async (req, res) => {
  const { senderId, receiverId, content } = req.body;
  try {
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }
    const message = new Message({ sender: senderId, receiver: receiverId, content });
    if (message) {
      conversation.messages.push(message._id);
    }

    await Promise.all([conversation.save(), message.save()]);
    const receiverSocketId = getReceiverSocketId(receiverId);
		if (receiverSocketId) {
			// io.to(<socket_id>).emit() used to send events to specific client
			io.to(receiverSocketId).emit("newMessage", message);
		}
    res.status(200).json({ message: "Message sent" });
  } catch (error) {
    res.status(500).json({ message: "Message not sent" });
    console.log(error);
  }
};

const getMessages = async (req, res) => {
  const { conversationId } = req.params;
  try {
    let conversation;
    let conversation1;
      conversation = await Conversation.findById(conversationId).populate({
        path: 'messages',
        options: { sort: { createdAt: 1 } }, // Sort messages by creation date
        populate: [
          {
            path: 'receiver',
            model: 'influencer',
            select: 'influencerName profileUrl isSelectedImage',
          },
          {
            path: 'sender',
            model: 'Brand',
            select: 'brandName profileUrl isSelectedImage',
          },
        ],
      });
      conversation1 = await Conversation.findById(conversationId).populate({
        path: 'messages',
        options: { sort: { createdAt: 1 } }, // Sort messages by creation date
        populate: [
          {
            path: 'sender',
            model: 'influencer',
            select: 'influencerName profileUrl isSelectedImage',
          },
          {
            path: 'receiver',
            model: 'Brand',
            select: 'brandName profileUrl isSelectedImage',
          },
        ],
      });
    conversation.messages.map((message,index) => {
      if(message.sender==null){
        conversation.messages[index].sender=conversation1.messages[index].sender
        conversation.messages[index].receiver=conversation1.messages[index].receiver
      }}
    );
    if (!conversation) {
      return res.status(404).json({ message: 'Conversation not found' });
    }

    res.status(200).json({ messages: conversation.messages });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch messages' });
    console.error(error);
  }
};




const getAllConversations = async (req, res) => {
  const { userId, userType } = req.body; // userType can be 'influencer' or 'brand'
  try {
    let user;
    if (userType === 'influencer') {
      user = await InfluencerSignupRequest.findById(userId).populate({
        path: 'conversations',
        populate: [
          {
            path: 'participants',
            match: { _id: { $ne: userId } }, // Exclude the current user
            model: 'Brand',
            select: 'brandName category profileUrl isSelectedImage'
          },
          {
            path: 'messages',
            options: { sort: { createdAt: -1 } } // Sort messages by creation date
          }
        ]
      });
    } else if (userType === 'brand') {
      user = await Brand.findById(userId).populate({
        path: 'conversations',
        populate: [
          {
            path: 'participants',
            match: { _id: { $ne: userId } }, // Exclude the current user
            model: 'influencer',
            select: 'influencerName profileUrl isSelectedImage'
          },
          {
            path: 'messages',
            options: { sort: { createdAt: -1 } } // Sort messages by creation date
          }
        ]
      });
    }

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ conversations: user.conversations });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch conversations' });
    console.log(error);
  }
};


module.exports = { sendRequest, allRequests, accept, reject, closeChat, sendMessage, getMessages, getAllConversations};
