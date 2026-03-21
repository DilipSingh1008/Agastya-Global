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

router.post("/", createHomeHero);
router.get("/", getHomeHeroes);
router.get("/:id", getHomeHeroById);
router.put("/:id", updateHomeHero);
router.delete("/:id", deleteHomeHero);
router.patch("/toggle-status/:id", toggleHomeHeroStatus);

module.exports = router;