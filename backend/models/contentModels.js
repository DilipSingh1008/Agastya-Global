const mongoose = require("mongoose");

/* ---------------- Recruitment ---------------- */
const recruitmentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    status: { type: Boolean, default: true },
    isDelete: { type: Boolean, default: false },
  },
  { timestamps: true },
);

/* ---------------- Service ---------------- */
const serviceSchema = new mongoose.Schema(
  {
    title: { type: String },
    icon: { type: String },
    category: {
      type: String,
      enum: ["student_support", "application_services"],
      // default: "student_support",
    },
    status: { type: Boolean, default: true },
    isDelete: { type: Boolean, default: false },
  },
  { timestamps: true },
);

/* ---------------- Course Type ---------------- */
const courseTypeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    order: { type: Number, default: 0 },
    status: { type: Boolean, default: true },
    isDelete: { type: Boolean, default: false },
  },
  { timestamps: true },
);

/* ---------------- Subject ---------------- */
const subjectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    status: { type: Boolean, default: true },
    isDelete: { type: Boolean, default: false },
  },
  { timestamps: true },
);

/* ---------------- University Question ---------------- */
const questionSchema = new mongoose.Schema(
  {
    question: { type: String, required: true },
    order: { type: Number, default: 0 },
    status: { type: Boolean, default: true },
    isDelete: { type: Boolean, default: false },
  },
  { timestamps: true },
);

/* ---------------- Models Export ---------------- */

const Recruitment = mongoose.model("ContenRecruitment", recruitmentSchema);
const Service = mongoose.model("ContenService", serviceSchema);
const CourseType = mongoose.model("ContenCourseType", courseTypeSchema);
const Subject = mongoose.model("ContenSubject", subjectSchema);
const UniversityQuestion = mongoose.model(
  "ContenUniversityQuestion",
  questionSchema,
);

module.exports = {
  Recruitment,
  Service,
  CourseType,
  Subject,
  UniversityQuestion,
};
