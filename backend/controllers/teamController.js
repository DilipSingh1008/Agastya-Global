const Team = require("../models/Team");

// Get All Active Team Members
exports.getTeamMembers = async (req, res) => {
  try {
    const members = await Team.find({ isDeleted: false }).sort({
      createdAt: -1,
    });
    console.log(members);
    res.status(200).json({ success: true, data: members });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Add Team Member
exports.createTeamMember = async (req, res) => {
  try {
    const member = await Team.create(req.body);
    res.status(201).json({ success: true, data: member });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update Team Member
exports.updateTeamMember = async (req, res) => {
  try {
    const member = await Team.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ success: true, data: member });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Soft Delete Team Member
exports.deleteTeamMember = async (req, res) => {
  try {
    const member = await Team.findByIdAndUpdate(
      req.params.id,
      { isDeleted: true },
      { new: true },
    );
    res.status(200).json({
      success: true,
      message: "Team member soft-deleted",
      data: member,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
