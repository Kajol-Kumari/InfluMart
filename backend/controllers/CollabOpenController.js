const CollabOpening = require("../model/CollabOpening");

const postCollabOpen = async (req, res) => {
    try {
      const {
        brandId,
        campaignType,
        earningCapacity,
        campaignTimelines,
        minEligibilityCriteria,
        postInfo,
        productReviewInstructions,
        campaignSteps,
        compensationType,
        numberOfInfluencers,
        brandDescription
      } = req.body;
  
      const collabOpening = new CollabOpening({
        brand: brandId, 
        campaignType,
        earningCapacity,
        campaignTimelines,
        minEligibilityCriteria,
        postInfo,
        productReviewInstructions,
        campaignSteps,
        compensationType,
        numberOfInfluencers,
        brandDescription
      });
  
      await collabOpening.save();
  
      res.status(201).json({ message: 'Collaboration opening created successfully', collabOpening });
    } catch (error) {
      res.status(500).json({ message: 'Failed to create collaboration opening', error });
    }
  }

const getAllCollabOpen =  async (req, res) => {
    try {
      // Fetch all collaboration openings and populate brandName and category fields
      const collabOpenings = await CollabOpening.find({})
        .populate({
          path: 'brand',
          model: 'Brand',
          select: 'brandName category'
        });
  
      res.status(200).json({ collabOpenings });
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch collaboration openings', error });
    }
  }

module.exports = { postCollabOpen, getAllCollabOpen };