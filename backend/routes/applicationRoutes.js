const express = require("express");
const {
  createApplication,
  getApplications,
  deleteApplication,
} = require("../controllers/applicationController");

const router = express.Router();

router.post("/", createApplication);
router.get("/", getApplications);
router.delete("/:id", deleteApplication);

module.exports = router;
