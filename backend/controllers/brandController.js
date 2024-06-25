const { JWT_SECRET_KEY, JWT_EXPIRES_IN } = require("../config/dbConfig");
const { DOESNT_EXIST } = require("../constant/constants");
const Brand = require("../model/brandDbRequestModel");
const bcrypt = require("bcrypt"); // For password hashing
const jwt = require('jsonwebtoken');


// Signup a brand
exports.signup = async (req, res) => {
  const { name, email, password, category } = req.body;
  
  const hashedPassword = await bcrypt.hash(password, 10);
  const brand = new Brand({
    name,
    email,
    password: hashedPassword,
    category,
    profileUrl: req.file?.path,
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
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const brand = await Brand.findOne({ email });

    if (!brand) {
      return res.status(404).json({ message: "Brand not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, brand.password);

    if (isPasswordValid) {
      // Generate JWT token
      const token = jwt.sign({ brandId: brand._id }, JWT_SECRET_KEY, { expiresIn: JWT_EXPIRES_IN });

      // Return token and brandId in response
      res.status(200).json({ message: "Login successful", token, brandId: brand._id });
    } else {
      res.status(401).json({ message: "Authentication failed" });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get brand's profile
exports.getProfile = async (req, res) => {
  const brandId = req.params.brandId;

  try {
    const brand = await Brand.findById(brandId);

    if (!brand) {
      return res.status(404).json({ message: 'Brand not found' });
    }

    res.status(200).json({
      message: 'Brand profile fetched successfully',
      brand: {
        name: brand.name,
        email: brand.email,
        category: brand.category,
        profileUrl: brand.profileUrl,
      },
    });
  } catch (error) {
    console.error('Error fetching brand profile:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update brand's profile (requires authentication)
exports.updateProfile = (req, res) => {
  const brand = req.brand;

  // Update brand's profile fields as needed
  // For simplicity, we assume you have an updatedBrand object

  Object.assign(brand, updatedBrand);

  res.status(200).json({ message: "Profile updated successfully", brand });
};
