const express = require("express");
const router = express.Router();

const controller = require("../controllers/home.controller");
const upload = require("../middlewares/upload");

/* ================= HERO ================= */
router.get("/home-hero", controller.getHero);
router.post("/home-hero", upload.single("image"), controller.createHero);
router.put("/home-hero/:id", upload.single("image"), controller.updateHero);
router.delete("/home-hero/:id", controller.deleteHero);
router.patch("/home-hero/:id/status", controller.toggleHero);

/* ================= LOGO ================= */
router.get("/home-logos", controller.getLogo);
router.post("/home-logos", upload.single("image"), controller.createLogo);
router.put("/home-logos/:id", upload.single("image"), controller.updateLogo);
router.delete("/home-logos/:id", controller.deleteLogo);
router.patch("/home-logos/:id/status", controller.toggleLogo);

/* ================= SERVICE ================= */
router.get("/home-services", controller.getService);
router.post("/home-services", upload.single("icon"), controller.createService);
router.put(
  "/home-services/:id",
  upload.single("icon"),
  controller.updateService,
);
router.delete("/home-services/:id", controller.deleteService);
router.patch("/home-services/:id/status", controller.toggleService);

module.exports = router;
