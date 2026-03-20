const express = require("express");
const router = express.Router();

const controller = require("../controllers/ieltsController");

/* ================= HERO ================= */
router.get("/hero", controller.getHero);
router.post("/hero", controller.createHero);
router.put("/hero/:id", controller.updateHero);
router.delete("/hero/:id", controller.deleteHero);
router.patch("/hero/:id/status", controller.toggleHeroStatus);

/* ================= OVERVIEW ================= */
router.get("/overview", controller.getOverview);
router.post("/overview", controller.createOverview);
router.put("/overview/:id", controller.updateOverview);
router.delete("/overview/:id", controller.deleteOverview);
router.patch("/overview/:id/status", controller.toggleOverviewStatus);

/* ================= TYPES ================= */
router.get("/types", controller.getTypes);
router.post("/types", controller.createType);
router.put("/types/:id", controller.updateType);
router.delete("/types/:id", controller.deleteType);
router.patch("/types/:id/status", controller.toggleTypeStatus);

/* ================= TEST STRUCTURE ================= */
router.get("/test-structure", controller.getTestStructure);
router.post("/test-structure", controller.createTestStructure);
router.put("/test-structure/:id", controller.updateTestStructure);
router.delete("/test-structure/:id", controller.deleteTestStructure);
router.patch(
  "/test-structure/:id/status",
  controller.toggleTestStructureStatus,
);

/* ================= FEATURES ================= */
router.get("/features", controller.getFeatures);
router.post("/features", controller.createFeature);
router.put("/features/:id", controller.updateFeature);
router.delete("/features/:id", controller.deleteFeature);
router.patch("/features/:id/status", controller.toggleFeatureStatus);

/* ================= CTA ================= */
router.get("/cta", controller.getCTA);
router.post("/cta", controller.createCTA);
router.put("/cta/:id", controller.updateCTA);
router.delete("/cta/:id", controller.deleteCTA);
router.patch("/cta/:id/status", controller.toggleCTAStatus);

module.exports = router;
