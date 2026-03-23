const Application = require("../models/Application");

// -------------------- CREATE --------------------
const createApplication = async (req, res) => {
  try {
    const { fullName, phone, email, country, subject, message, type } =
      req.body;

    if (!fullName || !phone || !email || !country) {
      return res.status(400).json({
        success: false,
        message: "Required fields are missing",
      });
    }

    const newApplication = new Application({
      fullName,
      phone,
      email,
      country,
      subject,
      message,
      type,
    });

    await newApplication.save();

    res.status(201).json({
      success: true,
      message: "Application submitted successfully",
      data: newApplication,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// -------------------- GET (SEARCH + SORT + PAGINATION + FILTER) --------------------
const getApplications = async (req, res) => {
  try {
    let {
      page = 1,
      limit = 5,
      search = "",
      sortBy = "createdAt",
      order = "desc",
      type,
      country,
    } = req.query;

    page = parseInt(page);
    limit = parseInt(limit);

    // ✅ Base filter (soft delete)
    const filter = { isDeleted: false };

    // ✅ Search (name, email, phone, country, subject, type)
    if (search) {
      filter.$or = [
        { fullName: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { phone: { $regex: search, $options: "i" } },
        { country: { $regex: search, $options: "i" } },
        { subject: { $regex: search, $options: "i" } },
        { type: { $regex: search, $options: "i" } },
      ];
    }

    // ✅ Optional filters
    if (type) filter.type = type;
    if (country) filter.country = country;

    // ✅ Sorting
    const sort = {};
    sort[sortBy] = order === "asc" ? 1 : -1;

    // ✅ Pagination
    const skip = (page - 1) * limit;

    const applications = await Application.find(filter)
      .sort(sort)
      .skip(skip)
      .limit(limit);

    const total = await Application.countDocuments(filter);

    res.json({
      success: true,
      data: applications,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// -------------------- SOFT DELETE --------------------
const deleteApplication = async (req, res) => {
  try {
    const { id } = req.params;

    const application = await Application.findById(id);

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }

    application.isDeleted = true;
    await application.save();

    res.status(200).json({
      success: true,
      message: "Application deleted successfully (soft delete)",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// -------------------- GET SINGLE --------------------
const getApplicationById = async (req, res) => {
  try {
    const { id } = req.params;

    const application = await Application.findOne({
      _id: id,
      isDeleted: false,
    });

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }

    res.status(200).json({
      success: true,
      data: application,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  createApplication,
  getApplications,
  deleteApplication,
  getApplicationById,
};
