const HomeHero = require("../models/HomeHero");

// CREATE
exports.createHomeHero = async (req, res) => {
  try {
    const imagePath = req.file ? `/uploads/${req.file.filename}` : null;

    const hero = await HomeHero.create({
      title: req.body.title,
      images: imagePath,
      status: true,
    });

    res.status(201).json({
      success: true,
      message: "Hero created successfully",
      data: hero,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET ALL (search + pagination + sort)
exports.getHomeHeroes = async (req, res) => {
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
      title: { $regex: search, $options: "i" },
    };

    const skip = (page - 1) * limit;

    const heroes = await HomeHero.find(query)
      .sort({ [sortField]: sortOrder === "asc" ? 1 : -1 })
      .skip(skip)
      .limit(Number(limit));

    const total = await HomeHero.countDocuments(query);

    res.status(200).json({
      success: true,
      data: heroes,
      pagination: {
        total,
        page: Number(page),
        limit: Number(limit),
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET BY ID
exports.getHomeHeroById = async (req, res) => {
  try {
    const hero = await HomeHero.findOne({
      _id: req.params.id,
      isDeleted: false,
    });

    if (!hero) {
      return res.status(404).json({
        success: false,
        message: "Hero not found",
      });
    }

    res.status(200).json({ success: true, data: hero });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// UPDATE
exports.updateHomeHero = async (req, res) => {
  try {
    const imagePath = req.file ? `/uploads/${req.file.filename}` : undefined;

    const updateData = {
      title: req.body.title,
    };

    if (imagePath) {
      updateData.images = imagePath;
    }

    const hero = await HomeHero.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });

    res.status(200).json({
      success: true,
      message: "Updated successfully",
      data: hero,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// DELETE (soft delete)
exports.deleteHomeHero = async (req, res) => {
  try {
    const hero = await HomeHero.findById(req.params.id);

    if (!hero) {
      return res.status(404).json({
        success: false,
        message: "Hero not found",
      });
    }

    hero.isDeleted = true;
    await hero.save();

    res.status(200).json({
      success: true,
      message: "Deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// TOGGLE STATUS
exports.toggleHomeHeroStatus = async (req, res) => {
  try {
    const hero = await HomeHero.findOne({
      _id: req.params.id,
      isDeleted: false,
    });

    if (!hero) {
      return res.status(404).json({
        success: false,
        message: "Hero not found",
      });
    }

    hero.status = !hero.status;
    await hero.save();

    res.status(200).json({
      success: true,
      message: "Status updated",
      data: hero,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
