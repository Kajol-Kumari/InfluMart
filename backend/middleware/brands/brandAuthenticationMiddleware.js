const Brand = require("../../model/brands");

// check if the brand is loggedIn or not
const brandAuthenticationMiddleware = async (req, res, next) => {
  if (req.cookies.jwt) {
    try {
      // 1) verify the token
      const decoded = await promisify(jwt.verify)(
        req.cookies.jwt,
        process.env.JWT_SECRET_KEY
      );

      // 2) check if the brand still exists
      const currentBrand = await Brand.findById(decoded.id);
      if (!currentBrand) {
        // Brand doesn't exist, so consider it an unauthenticated request
        return next();
      }

      // THERE IS A LOGGED IN BRAND
      res.locals.brand = currentBrand;
      return next();
    } catch (err) {
      return res.status(401).json({ message: "Authentication failed" });
    }
  }
  return res.status(401).json({ message: "Unauthenticated. Please login"})
};

module.exports = brandAuthenticationMiddleware;
