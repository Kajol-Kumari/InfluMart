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

module.exports = { postCollabOpen };