const Brand = require("../model/brandDbRequestModel");

// Sample storage for brands (replace with a database)
const brandsDB = [];

// Signup a brand
exports.signup = (req, res) => {
  const { name, email, password, category } =
    req.body;

  const brand = new Brand({
    name,
    email,
    password,
    category,
  });
  brand
    .save()
    .then(() => {
      res.status(201).json({ message: "Brand signed up successfully" });
    })
    .catch((err) => {
      res.status(500).json({ message: "An error occurred", error: err });
    });
};

// Login as a brand (basic example, should be replaced with authentication logic)
exports.login = (req, res) => {
  const { email, password } = req.body;

  // Perform authentication (e.g., check against a database)
  // For simplicity, we assume the brand exists in the brandsDB
  const brand = brandsDB.find(
    (b) => b.email === email && b.password === password
  );

  if (!brand) {
    return res.status(401).json({ message: "Authentication failed" });
  }

  res.status(200).json({ message: "Login successful", brand });
};

// Get brand's profile (requires authentication)
exports.getProfile = (req, res) => {
  // Retrieve the authenticated brand's profile
  // Replace this with your authentication logic
  const brand = req.brand;
  

  res.status(200).json({ brand });
};

// Update brand's profile (requires authentication)
exports.updateProfile = (req, res) => {
  const brand = req.brand;

  // Update brand's profile fields as needed
  // For simplicity, we assume you have an updatedBrand object

  Object.assign(brand, updatedBrand);

  res.status(200).json({ message: "Profile updated successfully", brand });
};
