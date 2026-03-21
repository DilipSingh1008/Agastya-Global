const express = require("express");
const {
  createCourse,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
  toggleStatus,
} = require("../controllers/courseController.js");

const upload = require("../middlewares/upload.js");

const router = express.Router();

router.post("/", upload.single("image"), createCourse);
router.get("/", getCourses);
router.get("/:id", getCourseById);
router.put("/:id", upload.single("image"), updateCourse);
router.delete("/:id", deleteCourse);
router.patch("/toggle-status/:id", toggleStatus);

module.exports = router;
