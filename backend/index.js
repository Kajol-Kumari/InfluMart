const express = require("express");
const cors = require("cors");
const http = require("http");
require("dotenv").config();
var cookies = require("cookie-parser");

const app = express();
const server = http.Server(app);

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
const collaborationRoutes = require('./routes/collaborationRoutes');
const brandAuthorizationMiddleware = require("./middleware/brands/brandAuthorizationMiddleware");
const brandAuthenticationMiddleware = require("./middleware/brands/brandAuthenticationMiddleware");
const brandValidationMiddleware = require("./middleware/brands/brandValidationMiddleware");
const brandLoggingMiddleware = require("./middleware/brands/brandLoggingMiddleware");
const influencerAuthorizationMiddleware = require("./middleware/influencers/influencerAuthorizationMiddleware");
const influencerAuthenticationMiddleware = require("./middleware/influencers/influencerAuthenticationMiddleware");

const influencerLoggingMiddleware = require("./middleware/influencers/influencerLoggingMiddleware");
const { getSocialData } = require("./controllers/influencerController");

// Mount the influencer routes on a specific path
app.use("/influencers", influencerRoutes);

// Get an influencer's social data by ID
app.use("/social/:id", getSocialData);

app.use("/subscriptions", subscriptionRouter);

app.use("/otp",otpRouter);

// Mount the brand routes on a specific path
app.use("/brands", brandRoutes);

app.use('/api', collaborationRoutes);

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
