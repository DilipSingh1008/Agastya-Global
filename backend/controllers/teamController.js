const Team = require("../models/Team");

exports.getTeamMembers = async (req, res) => {
  try {
    let {
      page = 1,
      limit = 10,
      search = "",
      sortField = "createdAt",
      sortOrder = "desc",
      status,
    } = req.query;

    page = parseInt(page);
    limit = parseInt(limit);

    // 🔍 Search
    const searchQuery = {
      isDeleted: false,
      $or: [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { role: { $regex: search, $options: "i" } },
      ],
    };

    if (status !== undefined) {
      searchQuery.status = status === "true";
    }

    // 🔃 Sorting
    const sortOptions = {
      [sortField]: sortOrder === "asc" ? 1 : -1,
    };

    // 📄 Pagination
    const total = await Team.countDocuments(searchQuery);

    const members = await Team.find(searchQuery)
      .sort(sortOptions)
      .skip((page - 1) * limit)
      .limit(limit);

    res.status(200).json({
      success: true,
      data: members,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.createTeamMember = async (req, res) => {
  try {
    const data = {
      ...req.body,
      image: req.file ? req.file.path : null,
    };

    const member = await Team.create(data);

    res.status(201).json({
      success: true,
      data: member,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateTeamMember = async (req, res) => {
  try {
    const updateData = {
      ...req.body,
    };

    if (req.file) {
      updateData.image = req.file.path;
    }

    const member = await Team.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });

    res.status(200).json({
      success: true,
      data: member,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.toggleStatus = async (req, res) => {
  try {
    const member = await Team.findById(req.params.id);

    member.status = !member.status;
    await member.save();

    res.status(200).json({
      success: true,
      data: member,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.deleteTeamMember = async (req, res) => {
  try {
    const member = await Team.findByIdAndUpdate(
      req.params.id,
      { isDeleted: true },
      { new: true },
    );

    res.status(200).json({
      success: true,
      message: "Team member deleted",
      data: member,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
