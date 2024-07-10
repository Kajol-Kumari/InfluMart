const express = require("express");
const cors = require("cors");
require("dotenv").config();
var cookies = require("cookie-parser");
const { app, io, server } = require("./socket/socket");

// Making uploads folder public
app.use(express.static("uploads"));

// CORS
app.use(cors());

// Body Parser
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookies());

require("./middleware/db")();

// Import the influencer routes
const influencerRoutes = require("./routes/influencerRoutes");
const brandRoutes = require("./routes/brandRoutes");
const subscriptionRouter = require("./routes/subscriptionRouter");
const otpRouter = require("./routes/otpRoutes");
const collaborationRoutes = require("./routes/collaborationRoutes");
const connectRouter = require("./routes/connectionRoutes");
const { getSocialData } = require("./controllers/influencerController");
const passwordRoutes = require("./routes/passwordRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const authRoutes = require("./routes/authRoutes");
const Message = require("./model/Message");
const collabOpenRoutes = require("./routes/collabOpenRoutes");

app.use((req, res, next) => {
  req.io = io;
  next();
});
// Verification routes
app.use("/api", authRoutes);

// Mount the payment controller routes
app.use("/api/payment", paymentRoutes);

// Mount the password controller routes
app.use("/api/password", passwordRoutes);

// Mount the influencer routes on a specific path
app.use("/influencers", influencerRoutes);

// Get an influencer's social data by ID
app.use("/social/:id", getSocialData);

app.use("/subscriptions", subscriptionRouter);

app.use("/otp", otpRouter);

app.use("/collab-open", collabOpenRoutes);

// Mount the brand routes on a specific path
app.use("/brands", brandRoutes);

app.use("/api", collaborationRoutes);

// Mount the connect routes on a specific path
app.use("/connection", connectRouter);

// Home route
app.get("/", (_req, res) => {
  res
    .status(200)
    .json({ message: "Hello There!! You are at the backend server!" });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(
  PORT,
  console.log(
    `Server running in ${process.env.ENV || "development"} mode on port ${PORT}`
  )
);

// handle the error safely
process.on("uncaughtException", (err) => {
  console.log(err);
});

module.exports = app;
