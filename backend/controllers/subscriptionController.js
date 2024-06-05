const { UPI_URL } = require("../config/dbConfig");
const Subscription = require("../model/Subscription");

const postSubscription = async (req, res) => {
    try {
      const { userName, plan, startDate, endDate } = req.body;
      const newSubscription = new Subscription({
        userName,
        plan,
        startDate,
        endDate
      });
      await newSubscription.save();
      res.status(201).json({message:'Subscription created successfully'});
    } catch (error) {
      res.status(400).json({message:'Error creating subscription', error: error.message});
    }
};

const getPayment = async (req, res) => {
    try {
    console.log(UPI_URL);
    if(UPI_URL){
      res.status(200).json({message:'Pay via UPI',upiURL:UPI_URL});
    }else{
        res.status(400).json({message:'UPI URL not found'});
    }
    } catch (error) {
      res.status(400).json({message:'Unable to find UPI URL'});
    }
  }

const getSubscription = async (req, res) => {
    try {
      const subscriptions = await Subscription.find({ userName: req.params.userName });
      res.status(200).json(subscriptions);
    } catch (error) {
      res.status(400).json({message:'Error fetching subscriptions' ,error:error.message});
    }
  }

module.exports = { postSubscription, getSubscription, getPayment };