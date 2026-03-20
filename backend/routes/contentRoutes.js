const express = require("express");
const router = express.Router();

const controller = require("../controllers/contentController");

/* Recruitment */
router.get("/recruitments", controller.getRecruitments);
router.post("/recruitments", controller.createRecruitment);
router.patch("/recruitments/:id/status", controller.toggleRecruitmentStatus);

router.put("/recruitments/:id", controller.updateRecruitment);
router.delete("/recruitments/:id", controller.deleteRecruitment);

/* Services */
router.get("/Conservices", controller.getServices);
router.post("/Conservices", controller.createService);
router.patch("/Conservices/:id/status", controller.toggleServiceStatus);

router.put("/Conservices/:id", controller.updateService);
router.delete("/Conservices/:id", controller.deleteService);

/* Course Types */
router.get("/course-types", controller.getCourseTypes);
router.post("/course-types", controller.createCourseType);
router.patch("/course-types/:id/status", controller.toggleCourseTypeStatus);

router.put("/course-types/:id", controller.updateCourseType);
router.delete("/course-types/:id", controller.deleteCourseType);

/* Subjects */
router.get("/subjects", controller.getSubjects);
router.post("/subjects", controller.createSubject);
router.patch("/subjects/:id/status", controller.toggleSubjectStatus);

router.put("/subjects/:id", controller.updateSubject);
router.delete("/subjects/:id", controller.deleteSubject);

/* Questions */
router.get("/questions", controller.getQuestions);
router.post("/questions", controller.createQuestion);
router.patch("/questions/:id/status", controller.toggleQuestionStatus);

router.put("/questions/:id", controller.updateQuestion);
router.delete("/questions/:id", controller.deleteQuestion);

module.exports = router;
