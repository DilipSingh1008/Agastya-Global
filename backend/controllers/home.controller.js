const { Hero, Logo, Service } = require("../models/home.model");

/* ================= MODEL SELECTOR ================= */
const getModel = (type) => {
  if (type === "hero") return Hero;
  if (type === "logo") return Logo;
  if (type === "service") return Service;
};

/* ================= COMMON LIST ================= */
const getItems = async (Model, req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      search = "",
      sort = "createdAt",
      order = "desc",
    } = req.query;

    const query = {
      isDelete: false,
      ...(search && {
        $or: [
          { title: { $regex: search, $options: "i" } },
          { name: { $regex: search, $options: "i" } },
          { desc: { $regex: search, $options: "i" } },
        ],
      }),
    };

    const data = await Model.find(query)
      .sort({ [sort]: order === "asc" ? 1 : -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const total = await Model.countDocuments(query);

    res.json({
      data,
      pagination: {
        total,
        page: parseInt(page),
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* ================= COMMON CREATE ================= */
const createItem = async (Model, req, res) => {
  try {
    const data = req.body;

    if (req.file) {
      data.image = req.file.path;
    }
    // if (req.file) {
    //   if (data.image !== undefined) data.image = req.file.path;
    //   if (data.icon !== undefined) data.icon = req.file.path;
    // }

    const item = await Model.create(data);
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* ================= COMMON UPDATE ================= */
const updateItem = async (Model, req, res) => {
  try {
    const data = req.body;

    if (req.file) {
      if (data.image !== undefined) data.image = req.file.path;
      if (data.icon !== undefined) data.icon = req.file.path;
    }

    const item = await Model.findByIdAndUpdate(req.params.id, data, {
      new: true,
    });

    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* ================= COMMON DELETE (SOFT) ================= */
const deleteItem = async (Model, req, res) => {
  try {
    await Model.findByIdAndUpdate(req.params.id, {
      isDelete: true,
    });

    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* ================= TOGGLE STATUS ================= */
const toggleStatus = async (Model, req, res) => {
  try {
    const item = await Model.findById(req.params.id);
    item.status = !item.status;
    await item.save();

    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* ================= HERO ================= */
exports.getHero = (req, res) => getItems(Hero, req, res);
exports.createHero = (req, res) => createItem(Hero, req, res);
exports.updateHero = (req, res) => updateItem(Hero, req, res);
exports.deleteHero = (req, res) => deleteItem(Hero, req, res);
exports.toggleHero = (req, res) => toggleStatus(Hero, req, res);

/* ================= LOGO ================= */
exports.getLogo = (req, res) => getItems(Logo, req, res);
exports.createLogo = (req, res) => createItem(Logo, req, res);
exports.updateLogo = (req, res) => updateItem(Logo, req, res);
exports.deleteLogo = (req, res) => deleteItem(Logo, req, res);
exports.toggleLogo = (req, res) => toggleStatus(Logo, req, res);

/* ================= SERVICE ================= */
exports.getService = (req, res) => getItems(Service, req, res);
exports.createService = (req, res) => createItem(Service, req, res);
exports.updateService = (req, res) => updateItem(Service, req, res);
exports.deleteService = (req, res) => deleteItem(Service, req, res);
exports.toggleService = (req, res) => toggleStatus(Service, req, res);
