const Collaboration = require('../model/collaborationModel');

{/* Creating a new collaboration */}

exports.createCollaboration = async (req, res) => {
  const { brandId, influencerId, startDate, endDate, growthValue, postFrequency, engagementRate, minimumFollowers, minimumLikes, minimumPostFrequency } = req.body;

  try {
    const collaboration = new Collaboration({
      brandId,
      influencerId,
      startDate,
      endDate,
      growthValue,
      postFrequency,
      engagementRate,
      minimumFollowers,
      minimumLikes,
      minimumPostFrequency,
    });

    const savedCollaboration = await collaboration.save();
    res.status(201).json({ message: 'Collaboration created successfully', collaboration: savedCollaboration });
  } catch (err) {
    console.error('Error creating collaboration:', err);
    res.status(500).json({ message: 'Failed to create collaboration' });
  }
};

{/*Get all collaborations for a brand*/}

exports.getBrandCollaborations = async (req, res) => {
  const brandId = req.params.brandId;

  try {
    const collaborations = await Collaboration.find({ brandId });
    res.status(200).json({ collaborations });
  } catch (err) {
    console.error('Error getting brand collaborations:', err);
    res.status(500).json({ message: 'Failed to retrieve brand collaborations' });
  }
};

{/*Get the minimum requirements for a brand based on previous collaborations*/}

exports.getBrandMinimumRequirements = async (req, res) => {
  const brandId = req.params.brandId;

  try {
    const collaborations = await Collaboration.find({ brandId });

    let minimumFollowers = Infinity;
    let minimumLikes = Infinity;
    let minimumPostFrequency = Infinity;

    collaborations.forEach((collaboration) => {
      minimumFollowers = Math.min(minimumFollowers, collaboration.minimumFollowers);
      minimumLikes = Math.min(minimumLikes, collaboration.minimumLikes);
      minimumPostFrequency = Math.min(minimumPostFrequency, collaboration.minimumPostFrequency);
    });

    res.status(200).json({
      minimumFollowers,
      minimumLikes,
      minimumPostFrequency,
    });
  } catch (err) {
    console.error('Error getting brand minimum requirements:', err);
    res.status(500).json({ message: 'Failed to retrieve brand minimum requirements' });
  }
};

{/* Get brand collaboration analytics */}
exports.getBrandCollaborationAnalytics = async (req, res) => {
    const brandId = req.params.brandId;
  
    try {
      const collaborations = await Collaboration.find({ brandId });
  
      if (collaborations.length === 0) {
        return res.status(404).json({ message: 'No collaborations found for the brand' });
      }
  
      let totalCollaborations = collaborations.length;
      let totalGrowthValue = 0;
      let totalPostFrequency = 0;
      let totalEngagementRate = 0;
  
      collaborations.forEach((collaboration) => {
        totalGrowthValue += collaboration.growthValue;
        totalPostFrequency += collaboration.postFrequency;
        totalEngagementRate += collaboration.engagementRate;
      });
  
      const averageGrowthValue = totalGrowthValue / totalCollaborations;
      const averagePostFrequency = totalPostFrequency / totalCollaborations;
      const averageEngagementRate = totalEngagementRate / totalCollaborations;
  
      res.status(200).json({
        totalCollaborations,
        averageGrowthValue,
        averagePostFrequency,
        averageEngagementRate,
      });
    } catch (err) {
      console.error('Error getting brand collaboration analytics:', err);
      res.status(500).json({ message: 'Failed to retrieve brand collaboration analytics' });
    }
  };