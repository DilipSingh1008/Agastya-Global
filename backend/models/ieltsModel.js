const mongoose = require("mongoose");

/* ---------------- IELTS Hero ---------------- */
const heroSchema = new mongoose.Schema(
  {
    subtitle: { type: String },
    title: { type: String },
    description: { type: String },
    image: { type: String },

    status: { type: Boolean, default: true },
    isDelete: { type: Boolean, default: false },
  },
  { timestamps: true },
);

/* ---------------- IELTS Overview ---------------- */
const overviewSchema = new mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    highlight: { type: String },

    status: { type: Boolean, default: true },
    isDelete: { type: Boolean, default: false },
  },
  { timestamps: true },
);

/* ---------------- IELTS Types ---------------- */
const typesSchema = new mongoose.Schema(
  {
    type: { type: String }, // Academic / General
    title: { type: String },
    description: { type: String },
    icon: { type: String },
    order: { type: Number, default: 0 },

    status: { type: Boolean, default: true },
    isDelete: { type: Boolean, default: false },
  },
  { timestamps: true },
);

/* ---------------- IELTS Test Structure ---------------- */
const testStructureSchema = new mongoose.Schema(
  {
    name: { type: String },
    title: { type: String },
    time: { type: String },

    order: { type: Number, default: 0 },
    status: { type: Boolean, default: true },
    isDelete: { type: Boolean, default: false },
  },
  { timestamps: true },
);

/* ---------------- IELTS Features ---------------- */
const featureSchema = new mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    icon: { type: String },
    order: { type: Number, default: 0 },

    status: { type: Boolean, default: true },
    isDelete: { type: Boolean, default: false },
  },
  { timestamps: true },
);

/* ---------------- IELTS CTA ---------------- */
const ctaSchema = new mongoose.Schema(
  {
    tag: { type: String }, // Limited Seats Available
    title: { type: String },
    description: { type: String },
    buttonText: { type: String },
    backgroundImage: { type: String },

    status: { type: Boolean, default: true },
    isDelete: { type: Boolean, default: false },
  },
  { timestamps: true },
);

/* ---------------- Models Export ---------------- */

const IELTSHero = mongoose.model("IELTSHero", heroSchema);
const IELTSOverview = mongoose.model("IELTSOverview", overviewSchema);
const IELTSTypes = mongoose.model("IELTSTypes", typesSchema);
const IELTSTestStructure = mongoose.model(
  "IELTSTestStructure",
  testStructureSchema,
);
const IELTSFeature = mongoose.model("IELTSFeature", featureSchema);
const IELTSCTA = mongoose.model("IELTSCTA", ctaSchema);

module.exports = {
  IELTSHero,
  IELTSOverview,
  IELTSTypes,
  IELTSTestStructure,
  IELTSFeature,
  IELTSCTA,
};
