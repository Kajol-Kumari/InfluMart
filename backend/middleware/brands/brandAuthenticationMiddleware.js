
const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const { JWT_SECRET_KEY } = require("../../config/configs");
const Brand = require("../../model/brandDbRequestModel");

const brandAuthenticationMiddleware = async (req, res, next) => {
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
    
    if (!brand) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    // Attach brand information to request object
    req.brand = brand;
    next();
  } catch (error) {
    console.error('Authentication error:', error);
    return res.status(401).json({ message: 'Unauthorized' });
  }
};

module.exports = brandAuthenticationMiddleware;
