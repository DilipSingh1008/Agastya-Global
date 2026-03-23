const HomeSlide = require("../models/HomeSlide");

// =========================
// GET ALL (SEARCH + FILTER + SORT + PAGINATION)
// =========================
exports.getHomeSlides = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      search = "",
      sortBy = "createdAt",
      order = "desc",
      status,
      isDeleted,
    } = req.query;

    const query = {};

    // Search
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { highlight: { $regex: search, $options: "i" } },
        { desc: { $regex: search, $options: "i" } },
      ];
    }

    // Status filter
    if (status !== undefined) {
      query.status = status === "true";
    }

    // Soft delete filter
    if (isDeleted !== undefined) {
      query.isDeleted = isDeleted === "true";
    } else {
      query.isDeleted = false;
    }

    const sortOptions = {};
    sortOptions[sortBy] = order === "asc" ? 1 : -1;

    const skip = (page - 1) * limit;

    const slides = await HomeSlide.find(query)
      .sort(sortOptions)
      .skip(skip)
      .limit(Number(limit));

    const total = await HomeSlide.countDocuments(query);

    res.status(200).json({
      data: slides,
      pagination: {
        total,
        page: Number(page),
        limit: Number(limit),
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// =========================
// CREATE (WITH IMAGE)
// =========================
exports.createHomeSlide = async (req, res) => {
  try {
    const { title, highlight, desc } = req.body;

    const image = req.file ? `/uploads/HomeSlider/${req.file.filename}` : "";

    const newSlide = new HomeSlide({
      title,
      highlight,
      desc,
      image,
    });

    const saved = await newSlide.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// =========================
// UPDATE (WITH OPTIONAL IMAGE)
// =========================
exports.updateHomeSlide = async (req, res) => {
  try {
    const slide = await HomeSlide.findById(req.params.id);

    if (!slide) {
      return res.status(404).json({ message: "Slide not found" });
    }

    const { title, highlight, desc } = req.body;

    slide.title = title || slide.title;
    slide.highlight = highlight || slide.highlight;
    slide.desc = desc || slide.desc;

    // if new image uploaded
    if (req.file) {
      slide.image = `/uploads/HomeSlider/${req.file.filename}`;
    }

    const updated = await slide.save();

    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// =========================
// STATUS TOGGLE
// =========================
exports.toggleHomeSlideStatus = async (req, res) => {
  try {
    const slide = await HomeSlide.findById(req.params.id);

    if (!slide || slide.isDeleted) {
      return res.status(404).json({ message: "Slide not found" });
    }

    slide.status = !slide.status;
    await slide.save();

    res.status(200).json({ status: slide.status });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// =========================
// SOFT DELETE
// =========================
exports.deleteHomeSlide = async (req, res) => {
  try {
    const slide = await HomeSlide.findById(req.params.id);

    if (!slide) {
      return res.status(404).json({ message: "Slide not found" });
    }

    slide.isDeleted = true;
    await slide.save();

    res.status(200).json({ message: "Soft deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// =========================
// RESTORE
// =========================
exports.restoreHomeSlide = async (req, res) => {
  try {
    const slide = await HomeSlide.findById(req.params.id);

    if (!slide) {
      return res.status(404).json({ message: "Slide not found" });
    }

    slide.isDeleted = false;
    await slide.save();

    res.status(200).json({ message: "Restored successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
