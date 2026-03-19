const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload");
const teamController = require("../controllers/teamController");

router.post("/", upload.single("image"), teamController.createTeamMember);

router.get("/", teamController.getTeamMembers);

// router.get("/:id", teamController.getTeamMemberById);

router.put("/:id", upload.single("image"), teamController.updateTeamMember);

router.delete("/:id", teamController.deleteTeamMember);

router.patch("/toggle-status/:id", teamController.toggleStatus);

module.exports = router;
