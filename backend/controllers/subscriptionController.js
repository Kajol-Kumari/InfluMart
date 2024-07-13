const { UPI_URL } = require("../config/configs");
const Subscription = require("../model/Subscription");


const calculateCharges = (followers) => {
  const maxFollowers = parseInt(followers);

  const quarterCharge = (((0.8 * maxFollowers) * 0.50) / 12) * 3 + (0.20 * (((0.8 * maxFollowers) * 0.50) / 12) * 3);
  const halfYearCharge = (((0.8 * maxFollowers) * 0.50) / 12) * 6 + (0.10 * (((0.8 * maxFollowers) * 0.50) / 12) * 6);
  const yearCharge = (0.8 * maxFollowers) * 0.50;

  return {
      quarterly: quarterCharge.toFixed(2),
      halfYearly: halfYearCharge.toFixed(2),
      annually: yearCharge.toFixed(2),
  };
};

const postSubscription = async (req, res) => {
  try {
    const {
      userName,
      plan,
      startDate,
      endDate,
      isFree,
      amount,
      paymentMode,
      transactionDate,
    } = req.body;
    const newSubscription = new Subscription({
      userName,
      plan,
      startDate,
      endDate,
      isFree,
      amount: isFree ? null : amount, // Set amount to null if it's a free subscription
      paymentMode: isFree ? null : paymentMode, // Set paymentMode to null if it's a free subscription
      transactionDate: isFree ? null : transactionDate, // Set transactionDate to null if it's a free subscription
    });
    await newSubscription.save();
    console.log("Subscription created successfully");
    res.status(201).json({ message: "Subscription created successfully" });
  } catch (error) {
    console.log(error)
    res
      .status(400)
      .json({ message: "Error creating subscription", error: error });
  }
};

const getPayment = async (req, res) => {
  try {
    console.log(UPI_URL);
    if (UPI_URL) {
      res.status(200).json({ message: "Pay via UPI", upiURL: UPI_URL });
    } else {
      res.status(400).json({ message: "UPI URL not found" });
    }
  } catch (error) {
    res.status(400).json({ message: "Unable to find UPI URL" });
  }
};

const getSubscription = async (req, res) => {
  try {
    const subscriptions = await Subscription.find({
      userName: req.params.userName,
    });
    res.status(200).json(subscriptions);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error fetching subscriptions", error: error.message });
  }
};

// TODO: Implement the subscriptionPlans controller function dynamically fetch data without user entry
// 1. we need to get the platform and their account handle to get the followers count all possible platforms.
// eg: [{ platform: 'instagram', username: 'mrbeast' }, { platform: 'youtube', username: 'mrbeast' }, ...]
// 2. call the influencerAnalytics function to get the followers count for each platform. provide the parameters correctly as shown in comments in that file.
// 3. Now store the max followers count in followers variable. 
// 4. Now test the api working with the postman and check the response of getting subscription plans.
const subscriptionPlans = (req, res) => {
  const { platform, followers } = req.body;

  if (!platform || !followers) {
      return res.status(400).json({ error: 'Platform and followers are required' });
  }

  const charges = calculateCharges(followers);

  return res.json({
      charges
  });
};



module.exports = { postSubscription, getSubscription, getPayment, subscriptionPlans };
