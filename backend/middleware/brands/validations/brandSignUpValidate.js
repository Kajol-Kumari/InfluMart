const Brand = require("../../../model/brandDbRequestModel");

const brandSignUpValidate = async (req, res, next) => {
  // check all required fields are present along with validations
  const { name, email, password, category, location, website, description } =
    req.body;
  if (
    !name ||
    !email ||
    !password ||
    !category
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

// use this in update the website field
//   const websiteRegex = /^(ftp|http|https):\/\/[^ "]+$/;
//   if (!websiteRegex.test(website)) {
//     return res.status(400).json({ message: "Invalid website URL" });
//   }

  // check if the brand already exists
  const existingBrand = await Brand.findOne({email: email});
  if (existingBrand) {
    return res.status(400).json({ message: "Brand already exists" });
  }
  const nameTaken = await Brand.findOne({name:name})
  if(nameTaken){
    return res.status(400).json({message: "Brand name already taken"});
  }
  // all checks passed, continue processing the request
  next();
};

module.exports = brandSignUpValidate;
