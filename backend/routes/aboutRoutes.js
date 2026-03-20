const express = require("express");
const router = express.Router();

const controller = require("../controllers/aboutController");

/* ================= HERO ================= */
router.get("/hero", controller.getHero);
router.post("/hero", controller.createHero);
router.put("/hero/:id", controller.updateHero);
router.delete("/hero/:id", controller.deleteHero);
router.patch("/hero/:id/status", controller.toggleHeroStatus);

/* ================= STATS ================= */
router.get("/stats", controller.getStats);
router.post("/stats", controller.createStats);
router.put("/stats/:id", controller.updateStats);
router.delete("/stats/:id", controller.deleteStats);
router.patch("/stats/:id/status", controller.toggleStatsStatus);

/* ================= SECTIONS ================= */
router.get("/sections", controller.getSections);
router.post("/sections", controller.createSection);
router.put("/sections/:id", controller.updateSection);
router.delete("/sections/:id", controller.deleteSection);
router.patch("/sections/:id/status", controller.toggleSectionStatus);

/* ================= CARDS ================= */
router.get("/cards", controller.getCards);
router.post("/cards", controller.createCard);
router.put("/cards/:id", controller.updateCard);
router.delete("/cards/:id", controller.deleteCard);
router.patch("/cards/:id/status", controller.toggleCardStatus);

/* ================= PARTNERS ================= */
router.get("/partners", controller.getPartners);
router.post("/partners", controller.createPartner);
router.put("/partners/:id", controller.updatePartner);
router.delete("/partners/:id", controller.deletePartner);
router.patch("/partners/:id/status", controller.togglePartnerStatus);

module.exports = router;
