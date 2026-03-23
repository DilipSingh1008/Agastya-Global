const express = require("express");
const router = express.Router();

const upload = require("../middlewares/upload");

const {
  getHomeSlides,
  createHomeSlide,
  updateHomeSlide,
  deleteHomeSlide,
  toggleHomeSlideStatus,
  restoreHomeSlide,
} = require("../controllers/homeSlideController");

// GET
router.get("/", getHomeSlides);

router.post("/", upload.single("image"), createHomeSlide);

// UPDATE (image optional)
router.put("/:id", upload.single("image"), updateHomeSlide);

// STATUS TOGGLE
router.patch("/:id/status", toggleHomeSlideStatus);

// SOFT DELETE
router.delete("/:id", deleteHomeSlide);

// RESTORE
router.patch("/:id/restore", restoreHomeSlide);

module.exports = router;
