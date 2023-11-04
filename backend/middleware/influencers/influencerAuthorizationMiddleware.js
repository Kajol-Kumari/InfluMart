const influencerAuthorizationMiddleware = (req, res, next) => {
  // Check if the influencer is authorized to perform the request
  // For simplicity, we assume the influencer is authorized
  if (req.path === "/influencers/signup") {
    // Skip authentication check for the signup route
    return next();
  }
  const { role, id } = res.locals.influencer;
  if (role !== "influencer") {
    return res
      .status(403)
      .json({ message: "Access denied: Influencer is not authorized" });
  }
  // check if the requested resource belongs to the influencer
  if (req.params.id && req.params.id !== id) {
    return res
      .status(403)
      .json({ message: "Access denied: You cannot modify other influencers" });
  }
  // Influencer is authorized to access or modify the resource
  next();
};

module.exports = influencerAuthorizationMiddleware;
