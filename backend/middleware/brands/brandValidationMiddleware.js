const brandValidationMiddleware = (req, res, next) => {
  // check all required fields are present along with validations
  const { name, email, password, category, location, website, description } =
    req.body;
  if (
    !name ||
    !email ||
    !password ||
    !category ||
    !location ||
    !website ||
    !description
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // password validation
  if (password.length < 6) {
    return res
      .status(400)
      .json({ message: "Password should be at least 6 characters long" });
  }

  // email validation
  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  // data type validation, website should be a URL
  const websiteRegex = /^(ftp|http|https):\/\/[^ "]+$/;
  if (!websiteRegex.test(website)) {
    return res.status(400).json({ message: "Invalid website URL" });
  }

  // check if the brand already exists
  const existingBrand = brandsDB.find((b) => b.email === email);
  if (existingBrand) {
    return res.status(400).json({ message: "Brand already exists" });
  }
  // all checks passed, continue processing the request
  next();
};

module.exports = brandValidationMiddleware;
