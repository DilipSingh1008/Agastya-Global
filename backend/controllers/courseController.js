const Course = require("../models/CourseModel.js");
const fs = require("fs");
const path = require("path");
// CREATE
exports.createCourse = async (req, res) => {
  try {
    const { name, duration } = req.body;
    const folder = req.body.folder || "default";

    const image = req.file ? `/uploads/${folder}/${req.file.filename}` : null;
    const course = await Course.create({
      name,
      duration,
      image,
    });

    res.status(201).json({ success: true, data: course });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// UPDATE
exports.updateCourse = async (req, res) => {
  try {
    const { name, duration, folder } = req.body;

    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    let imageUrl = course.image;

    // ✅ If new image uploaded
    if (req.file) {
      // 🔴 Delete old image
      if (course.image) {
        const oldPath = path.join(
          __dirname,
          "..",
          course.image.replace(`${req.protocol}://${req.get("host")}`, ""),
        );

        if (fs.existsSync(oldPath)) {
          fs.unlinkSync(oldPath);
        }
      }

      imageUrl = `${req.protocol}://${req.get("host")}/uploads/${folder}/${req.file.filename}`;
    }

    course.name = name;
    course.duration = duration;
    course.image = imageUrl;

    await course.save();

    res.json(course);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET ALL
exports.getCourses = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      search = "",
      sortField = "createdAt",
      sortOrder = "desc",
    } = req.query;

    const query = {
      isDeleted: false,
      $or: [
        { name: { $regex: search, $options: "i" } },
        { duration: { $regex: search, $options: "i" } },
      ],
    };

    const total = await Course.countDocuments(query);

    const courses = await Course.find(query)
      .sort({ [sortField]: sortOrder === "asc" ? 1 : -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    res.json({
      success: true,
      data: courses,
      pagination: {
        total,
        page: parseInt(page),
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// GET BY ID
exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    res.json({ success: true, data: course });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// DELETE
exports.deleteCourse = async (req, res) => {
  try {
    await Course.findByIdAndUpdate(req.params.id, {
      isDeleted: true,
    });

    res.json({ success: true, message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// TOGGLE
exports.toggleStatus = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    course.status = !course.status;
    await course.save();

    res.json({ success: true, data: course });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
