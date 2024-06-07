const express = require("express");
const { postSubscription, getSubscription, getPayment, subscriptionPlans } = require("../controllers/subscriptionController");
const router = express.Router();


router.post("/subscription", postSubscription);
router.get("/subscription/:userName", getSubscription);
router.get("/payment", getPayment);
router.post("/plans",subscriptionPlans)

module.exports = router;
