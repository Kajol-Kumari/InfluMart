const Influencer = require("../../model/influencers");

const influencerAuthenticationMiddleware = async (req, res, next) => {
  if (req.path === "/influencers/signup") {
    // Skip authentication check for the signup route
    return next();
  }
  // check if the influencer is authenticated
  // For simplicity, we assume the influencer is authenticated
  if (req.cookies.jwt) {
    try {
      // verify the token
      const decoded = await promisify(jwt.verify)(
        req.cookies.jwt,
        process.env.JWT_SECRET_KEY
      );

      // check if the influencer still exists in db
      const currentInfluencer = await Influencer.findById(decoded.id);
      if (!currentInfluencer) {
        // Influencer doesn't exist, so consider it an unauthenticated request
        return next();
      }

      // THERE IS A LOGGED IN INFLUENCER
      res.locals.influencer = currentInfluencer;
      return next();
    } catch (err) {
      return res.status(401).json({ message: "Authentication failed" });
    }
  }
  // No JWT present, continue processing the request as unauthenticated
  next();
};

module.exports = influencerAuthenticationMiddleware;
