const HomeHero = require("../models/HomeHero");

// CREATE
exports.createHomeHero = async (req, res) => {
  try {
    const hero = await HomeHero.create(req.body);
    console.log(hero);
    res.status(201).json({
      success: true,
      message: "Home Hero created successfully",
      data: hero,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET ALL
exports.getHomeHeroes = async (req, res) => {
  try {
    const heroes = await HomeHero.find().sort({ order: 1 });

    res.status(200).json({
      success: true,
      data: heroes,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET BY ID
exports.getHomeHeroById = async (req, res) => {
  try {
    const hero = await HomeHero.findById(req.params.id);

    if (!hero) {
      return res.status(404).json({
        success: false,
        message: "Home Hero not found",
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
    const hero = await HomeHero.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!hero) {
      return res.status(404).json({
        success: false,
        message: "Home Hero not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Updated successfully",
      data: hero,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// DELETE
exports.deleteHomeHero = async (req, res) => {
  try {
    const hero = await HomeHero.findByIdAndDelete(req.params.id);

    if (!hero) {
      return res.status(404).json({
        success: false,
        message: "Home Hero not found",
      });
    }

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
    const hero = await HomeHero.findById(req.params.id);

    if (!hero) {
      return res.status(404).json({
        success: false,
        message: "Home Hero not found",
      });
    }

    hero.isActive = !hero.isActive;
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
