const {
  Recruitment,
  Service,
  CourseType,
  Subject,
  UniversityQuestion,
} = require("../models/contentModels");

/* ---------------- Helper ---------------- */

const buildQuery = (query, searchableFields = []) => {
  const { search, status } = query;

  let filter = {
    isDelete: false,
  };

  // Include documents where isDelete missing OR false
  filter = {
    $and: [
      {
        $or: [{ isDelete: false }, { isDelete: { $exists: false } }],
      },
    ],
  };

  // Search
  if (search) {
    filter.$and.push({
      $or: searchableFields.map((field) => ({
        [field]: { $regex: search, $options: "i" },
      })),
    });
  }

  // Status filter
  if (status !== undefined) {
    filter.$and.push({ status: status === "true" });
  }

  return filter;
};

/* ---------------- Generic Pagination ---------------- */

const getPaginatedData = async (Model, req, res, searchableFields) => {
  try {
    const {
      page = 1,
      limit = 10,
      sort = "createdAt",
      order = "desc",
    } = req.query;

    const filter = buildQuery(req.query, searchableFields);

    const data = await Model.find(filter)
      .sort({ [sort]: order === "desc" ? -1 : 1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const total = await Model.countDocuments(filter);

    res.json({
      success: true,
      data,
      pagination: {
        total,
        page: Number(page),
        limit: Number(limit),
        pages: Math.ceil(total / limit),
      },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* ---------------- Generic Create ---------------- */

const createData = async (Model, req, res) => {
  try {
    const data = await Model.create(req.body);
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* ---------------- Generic Update ---------------- */

const updateData = async (Model, req, res) => {
  try {
    const { id } = req.params;

    const data = await Model.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!data) {
      return res.status(404).json({ message: "Not found" });
    }

    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* ---------------- Soft Delete ---------------- */

const softDelete = async (Model, req, res) => {
  try {
    const { id } = req.params;

    const data = await Model.findByIdAndUpdate(
      id,
      { isDelete: true },
      // { new: true },
      { returnDocument: "after" },
    );

    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* ---------------- Toggle Status ---------------- */

const toggleStatus = async (Model, req, res) => {
  try {
    const { id } = req.params;

    const item = await Model.findById(id);

    if (!item) {
      return res.status(404).json({ message: "Not found" });
    }

    item.status = !item.status;
    await item.save();

    res.json({ success: true, data: item });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* ---------------- Recruitment ---------------- */

exports.getRecruitments = (req, res) =>
  getPaginatedData(Recruitment, req, res, ["name"]);

exports.createRecruitment = (req, res) => createData(Recruitment, req, res);

exports.updateRecruitment = (req, res) => updateData(Recruitment, req, res);

exports.deleteRecruitment = (req, res) => softDelete(Recruitment, req, res);

exports.toggleRecruitmentStatus = (req, res) =>
  toggleStatus(Recruitment, req, res);

/* ---------------- Services ---------------- */

exports.getServices = (req, res) =>
  getPaginatedData(Service, req, res, ["title"]);

exports.createService = (req, res) => createData(Service, req, res);

exports.updateService = (req, res) => updateData(Service, req, res);

exports.deleteService = (req, res) => softDelete(Service, req, res);

exports.toggleServiceStatus = (req, res) => toggleStatus(Service, req, res);

/* ---------------- Course Types ---------------- */

exports.getCourseTypes = (req, res) =>
  getPaginatedData(CourseType, req, res, ["title"]);

exports.createCourseType = (req, res) => createData(CourseType, req, res);

exports.updateCourseType = (req, res) => updateData(CourseType, req, res);

exports.deleteCourseType = (req, res) => softDelete(CourseType, req, res);

exports.toggleCourseTypeStatus = (req, res) =>
  toggleStatus(CourseType, req, res);

/* ---------------- Subjects ---------------- */

exports.getSubjects = (req, res) =>
  getPaginatedData(Subject, req, res, ["name"]);

exports.createSubject = (req, res) => createData(Subject, req, res);

exports.updateSubject = (req, res) => updateData(Subject, req, res);

exports.deleteSubject = (req, res) => softDelete(Subject, req, res);

exports.toggleSubjectStatus = (req, res) => toggleStatus(Subject, req, res);

/* ---------------- Questions ---------------- */

exports.getQuestions = (req, res) =>
  getPaginatedData(UniversityQuestion, req, res, ["question"]);

exports.createQuestion = (req, res) => createData(UniversityQuestion, req, res);

exports.updateQuestion = (req, res) => updateData(UniversityQuestion, req, res);

exports.deleteQuestion = (req, res) => softDelete(UniversityQuestion, req, res);

exports.toggleQuestionStatus = (req, res) =>
  toggleStatus(UniversityQuestion, req, res);
