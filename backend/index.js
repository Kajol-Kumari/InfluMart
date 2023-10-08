const express = require("express");
const cors = require("cors");
const http = require("http");
require("./middleware/db");
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

// Import the influencer routes
const influencerRoutes = require("./routes/influencerRoutes");
const brandRoutes = require("./routes/brandRoutes");
const brandAuthorizationMiddleware = require("./middleware/brands/brandAuthorizationMiddleware");
const brandAuthenticationMiddleware = require("./middleware/brands/brandAuthenticationMiddleware");
const brandValidationMiddleware = require("./middleware/brands/brandValidationMiddleware");
const brandLoggingMiddleware = require("./middleware/brands/brandLoggingMiddleware");
const influencerValidationMiddleware = require("./middleware/influencers/influencerValidationMiddleware");
const influencerAuthorizationMiddleware = require("./middleware/influencers/influencerAuthorizationMiddleware");
const influencerAuthenticationMiddleware = require("./middleware/influencers/influencerAuthenticationMiddleware");

const influencerLoggingMiddleware = require("./middleware/influencers/influencerLoggingMiddleware");

// Middleware for Brands
app.use("/brands", brandAuthenticationMiddleware); // Authentication for brands
app.use("/brands", brandAuthorizationMiddleware); // Authorization for brands
app.use("/brands", brandValidationMiddleware); // Validation for brand-specific data
app.use("/brands", brandLoggingMiddleware); // Logging for brand-specific activities

// Middleware for Influencers
app.use("/influencers", influencerAuthenticationMiddleware); // Authentication for influencers
app.use("/influencers", influencerAuthorizationMiddleware); // Authorization for influencers
app.use("/influencers", influencerValidationMiddleware); // Validation for influencer-specific data
app.use("/influencers", influencerLoggingMiddleware); // Logging for influencer-specific activities

// Mount the influencer routes on a specific path
app.use("/influencers", influencerRoutes);

// Mount the brand routes on a specific path
app.use("/brands", brandRoutes);

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
