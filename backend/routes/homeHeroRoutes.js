const express = require("express");
const router = express.Router();

const {
  createHomeHero,
  getHomeHeroes,
  getHomeHeroById,
  updateHomeHero,
  deleteHomeHero,
  toggleHomeHeroStatus,
} = require("../controllers/homeHeroController");
const upload = require("../middlewares/upload");

router.post("/", upload.single("image"), createHomeHero);
router.patch("/toggle-status/:id", toggleHomeHeroStatus);

router.put("/:id", upload.single("image"), updateHomeHero);
router.get("/", getHomeHeroes);
router.get("/:id", getHomeHeroById);
router.delete("/:id", deleteHomeHero);

module.exports = router;
