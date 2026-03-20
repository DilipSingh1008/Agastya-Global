const {
  IELTSHero,
  IELTSOverview,
  IELTSTypes,
  IELTSTestStructure,
  IELTSFeature,
  IELTSCTA,
} = require("../models/ieltsModel");

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
  getPaginatedData(IELTSHero, req, res, ["title", "subtitle"]);

exports.createHero = (req, res) => createData(IELTSHero, req, res);

exports.updateHero = (req, res) => updateData(IELTSHero, req, res);

exports.deleteHero = (req, res) => softDelete(IELTSHero, req, res);

exports.toggleHeroStatus = (req, res) => toggleStatus(IELTSHero, req, res);

/* ================= OVERVIEW ================= */

exports.getOverview = (req, res) =>
  getPaginatedData(IELTSOverview, req, res, ["title"]);

exports.createOverview = (req, res) => createData(IELTSOverview, req, res);

exports.updateOverview = (req, res) => updateData(IELTSOverview, req, res);

exports.deleteOverview = (req, res) => softDelete(IELTSOverview, req, res);

exports.toggleOverviewStatus = (req, res) =>
  toggleStatus(IELTSOverview, req, res);

/* ================= TYPES ================= */

exports.getTypes = (req, res) =>
  getPaginatedData(IELTSTypes, req, res, ["title", "type"]);

exports.createType = (req, res) => createData(IELTSTypes, req, res);

exports.updateType = (req, res) => updateData(IELTSTypes, req, res);

exports.deleteType = (req, res) => softDelete(IELTSTypes, req, res);

exports.toggleTypeStatus = (req, res) => toggleStatus(IELTSTypes, req, res);

/* ================= TEST STRUCTURE ================= */

exports.getTestStructure = (req, res) =>
  getPaginatedData(IELTSTestStructure, req, res, ["title", "label"]);

exports.createTestStructure = (req, res) =>
  createData(IELTSTestStructure, req, res);

exports.updateTestStructure = (req, res) =>
  updateData(IELTSTestStructure, req, res);

exports.deleteTestStructure = (req, res) =>
  softDelete(IELTSTestStructure, req, res);

exports.toggleTestStructureStatus = (req, res) =>
  toggleStatus(IELTSTestStructure, req, res);

/* ================= FEATURES ================= */

exports.getFeatures = (req, res) =>
  getPaginatedData(IELTSFeature, req, res, ["title"]);

exports.createFeature = (req, res) => createData(IELTSFeature, req, res);

exports.updateFeature = (req, res) => updateData(IELTSFeature, req, res);

exports.deleteFeature = (req, res) => softDelete(IELTSFeature, req, res);

exports.toggleFeatureStatus = (req, res) =>
  toggleStatus(IELTSFeature, req, res);

/* ================= CTA ================= */

exports.getCTA = (req, res) => getPaginatedData(IELTSCTA, req, res, ["title"]);

exports.createCTA = (req, res) => createData(IELTSCTA, req, res);

exports.updateCTA = (req, res) => updateData(IELTSCTA, req, res);

exports.deleteCTA = (req, res) => softDelete(IELTSCTA, req, res);

exports.toggleCTAStatus = (req, res) => toggleStatus(IELTSCTA, req, res);
