const collaborationAuthorizationMiddleware = (req, res, next) => {
    // Check if the user (brand or influencer) is authorized to perform the request
    const { role } = res.locals.user;
  
    if (!role) {
      return res
        .status(403)
        .json({ message: "Access denied: User is not authorized" });
    }
  
    // check if the requested resource belongs to the user
    if (
      req.params.brandId &&
      req.params.brandId !== res.locals.user._id.toString()
    ) {
      return res.status(403).json({
        message: "Access denied: You cannot access collaborations for other brands",
      });
    }
  
    // User is authorized to access or modify the resource
    next();
  };
  
  module.exports = collaborationAuthorizationMiddleware;