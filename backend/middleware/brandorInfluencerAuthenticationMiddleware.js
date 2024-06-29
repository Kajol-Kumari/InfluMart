
const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const { JWT_SECRET_KEY } = require("../config/dbConfig");
const Brand = require("../model/brandDbRequestModel");
const InfluencerSignupRequest = require("../model/influencerSignupRequestModel");

const brandorInfluencerAuthenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  // Extract token from header
  const token = authHeader.split(' ')[1];

  try {
    // Verify token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET_KEY);

    // Check if brand exists
    const brand = await Brand.findById(decoded.brandId);

    const influencer = await InfluencerSignupRequest.findById(decoded.userId)
    
    if (!brand && !influencer) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    req.user = brand || influencer;
    next();
  } catch (error) {
    console.error('Authentication error:', error);
    return res.status(401).json({ message: 'Unauthorized' });
  }
};

module.exports = brandorInfluencerAuthenticationMiddleware;
