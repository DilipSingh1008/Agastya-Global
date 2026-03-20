const {
  AboutHero,
  AboutStats,
  AboutSection,
  AboutCard,
  AboutPartner,
} = require("../models/About");

/* ================= Helper ================= */

const buildQuery = (query, searchableFields = []) => {
  const { search, status } = query;

  let filter = {
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

/* ================= Generic Pagination ================= */

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

/* ================= Generic Create ================= */

const createData = async (Model, req, res) => {
  try {
    const data = await Model.create(req.body);
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* ================= Generic Update ================= */

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

/* ================= Soft Delete ================= */

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

/* ================= Toggle Status ================= */

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

/* ================= HERO ================= */

exports.getHero = (req, res) =>
  getPaginatedData(AboutHero, req, res, ["title", "subtitle"]);

exports.createHero = (req, res) => createData(AboutHero, req, res);

exports.updateHero = (req, res) => updateData(AboutHero, req, res);

exports.deleteHero = (req, res) => softDelete(AboutHero, req, res);

exports.toggleHeroStatus = (req, res) => toggleStatus(AboutHero, req, res);

/* ================= STATS ================= */

exports.getStats = (req, res) =>
  getPaginatedData(AboutStats, req, res, ["label", "value"]);

exports.createStats = (req, res) => createData(AboutStats, req, res);

exports.updateStats = (req, res) => updateData(AboutStats, req, res);

exports.deleteStats = (req, res) => softDelete(AboutStats, req, res);

exports.toggleStatsStatus = (req, res) => toggleStatus(AboutStats, req, res);

/* ================= SECTIONS ================= */

exports.getSections = (req, res) =>
  getPaginatedData(AboutSection, req, res, ["title", "type"]);

exports.createSection = (req, res) => createData(AboutSection, req, res);

exports.updateSection = (req, res) => updateData(AboutSection, req, res);

exports.deleteSection = (req, res) => softDelete(AboutSection, req, res);

exports.toggleSectionStatus = (req, res) =>
  toggleStatus(AboutSection, req, res);

/* ================= CARDS ================= */

exports.getCards = (req, res) =>
  getPaginatedData(AboutCard, req, res, ["type"]);

exports.createCard = (req, res) => createData(AboutCard, req, res);

exports.updateCard = (req, res) => updateData(AboutCard, req, res);

exports.deleteCard = (req, res) => softDelete(AboutCard, req, res);

exports.toggleCardStatus = (req, res) => toggleStatus(AboutCard, req, res);

/* ================= PARTNERS ================= */

exports.getPartners = (req, res) =>
  getPaginatedData(AboutPartner, req, res, ["alt"]);

exports.createPartner = (req, res) => createData(AboutPartner, req, res);

exports.updatePartner = (req, res) => updateData(AboutPartner, req, res);

exports.deletePartner = (req, res) => softDelete(AboutPartner, req, res);

exports.togglePartnerStatus = (req, res) =>
  toggleStatus(AboutPartner, req, res);
