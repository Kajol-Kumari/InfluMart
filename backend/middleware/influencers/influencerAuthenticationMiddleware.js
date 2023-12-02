const Influencer = require("../../model/influencers");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const InfluencerSignupRequest = require("../../model/influencerSignupRequestModel");

const influencerAuthenticationMiddleware = async (req, res, next) => {
  // Skip authentication check for the signup and login routes
  if (req.path === "/signup" || req.path === "/login") {
    return next();
  }

  // Check if the influencer is authenticated
  try {
    // Verify the token from the Authorization header
    const token = req.headers.authorization;

    if (!token) {
      // No token present, continue processing the request as unauthenticated
      return res.status(401).json({ message: "Authentication failed" });
    }

    // Extract the JWT from the "Bearer" prefix if it exists
    const tokenParts = token.split(" ");
    if (tokenParts.length !== 2 || tokenParts[0] !== "Bearer") {
      return res.status(401).json({ message: "Invalid token format" });
    }

    const jwtToken = tokenParts[1];

    const decoded = await promisify(jwt.verify)(
      jwtToken,
      process.env.JWT_SECRET_KEY
    );

    // Check if the influencer still exists in the database
    const currentInfluencer = await InfluencerSignupRequest.findById(
      decoded.userId
    );

    if (!currentInfluencer) {
      // Influencer doesn't exist, so consider it an unauthenticated request
      return res.status(401).json({ message: "Authentication failed" });
    }

    // Check if the request path matches the pattern for influencer profiles
    if (req.path.match(/^\/profile\/[0-9a-fA-F]{24}$/)) {
      // Get the influencer's ID from the path
      const influencerId = req.path.split("/").pop();

      if (decoded.userId !== influencerId) {
        return res.status(401).json({ message: "You aren't permitted to perform this action." });
      }
    }

    // THERE IS A LOGGED IN INFLUENCER
    res.locals.influencer = currentInfluencer;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Authentication failed" });
  }
};

module.exports = influencerAuthenticationMiddleware;
