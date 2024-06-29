const express = require("express");
const Request = require("../model/Request");
const Message = require("../model/Message");
const InfluencerSignupRequest = require("../model/influencerSignupRequestModel");
const Brand = require("../model/brandDbRequestModel");

// Send a connection request
const sendRequest = async (req, res) => {
  const { senderId, receiverId } = req.body;
  const request = new Request({ sender: senderId, receiver: receiverId });
  await request.save();
  const test = await InfluencerSignupRequest.findByIdAndUpdate(receiverId, {
    $push: { notifications: request._id },
  });
  console.log(request)
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
      options: { select: "name category profileUrl"}
    },
  });
  res.status(200).json({user: user?.notifications});
};

// Accept a connection request
const accept = async (req, res) => {
  const { requestId } = req.body;
  const request = await Request.findById(requestId).populate("sender receiver");
  const helloMessage = new Message({
    sender: request.receiver._id,
    receiver: request.sender._id,
    content: "Hello!",
  });
  await helloMessage.save();
  await InfluencerSignupRequest.findByIdAndUpdate(request.receiver._id, {
    $push: { messages: helloMessage._id },
  });
  await Brand.findByIdAndUpdate(request.sender._id, {
    $push: { messages: helloMessage._id },
  });
  await Request.findByIdAndDelete(requestId);
  res.status(200).json({ message: "Request accepted and hello message sent" });
};

// Reject a connection request

const reject = async (req, res) => {
  const { requestId } = req.body;
  await Request.findByIdAndDelete(requestId);
  res.status(200).json({ message: "Request rejected" });
};

module.exports = { sendRequest, allRequests, accept, reject };
