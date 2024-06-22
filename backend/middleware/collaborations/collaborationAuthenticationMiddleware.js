const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const Brand = require("../../model/brandDbRequestModel");
const InfluencerSignupRequest = require("../../model/influencerSignupRequestModel");

const collaborationAuthenticationMiddleware = async (req, res, next) => {
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

    // Check if the user (brand or influencer) still exists in the database
    const currentBrand = await Brand.findById(decoded.userId);
    const currentInfluencer = await InfluencerSignupRequest.findById(
      decoded.userId
    );

    if (!currentBrand && !currentInfluencer) {
      // User doesn't exist, so consider it an unauthenticated request
      return res.status(401).json({ message: "Authentication failed" });
    }

    // THERE IS A LOGGED IN USER (BRAND OR INFLUENCER)
    res.locals.user = currentBrand || currentInfluencer;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Authentication failed" });
  }
};

module.exports = collaborationAuthenticationMiddleware;