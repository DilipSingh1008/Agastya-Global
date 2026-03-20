const mongoose = require("mongoose");

/* ---------------- About Hero ---------------- */
const heroSchema = new mongoose.Schema(
  {
    subtitle: { type: String },
    title: { type: String },
    description: { type: String },

    status: { type: Boolean, default: true },
    isDelete: { type: Boolean, default: false },
  },
  { timestamps: true },
);

/* ---------------- About Stats ---------------- */
const statsSchema = new mongoose.Schema(
  {
    label: { type: String },
    value: { type: String },
    icon: { type: String },
    order: { type: Number, default: 0 },

    status: { type: Boolean, default: true },
    isDelete: { type: Boolean, default: false },
  },
  { timestamps: true },
);

/* ---------------- About Sections ---------------- */
const sectionSchema = new mongoose.Schema(
  {
    type: { type: String }, // agency / goal
    title: { type: String },
    description: { type: String },

    status: { type: Boolean, default: true },
    isDelete: { type: Boolean, default: false },
  },
  { timestamps: true },
);

/* ---------------- About Cards ---------------- */
const cardSchema = new mongoose.Schema(
  {
    type: { type: String }, // mission / vision / strategy
    points: [{ type: String }],

    status: { type: Boolean, default: true },
    isDelete: { type: Boolean, default: false },
  },
  { timestamps: true },
);

/* ---------------- About Partners ---------------- */
const partnerSchema = new mongoose.Schema(
  {
    image: { type: String },
    alt: { type: String },
    order: { type: Number, default: 0 },

    status: { type: Boolean, default: true },
    isDelete: { type: Boolean, default: false },
  },
  { timestamps: true },
);

/* ---------------- Models Export ---------------- */

const AboutHero = mongoose.model("AboutHero", heroSchema);
const AboutStats = mongoose.model("AboutStats", statsSchema);
const AboutSection = mongoose.model("AboutSection", sectionSchema);
const AboutCard = mongoose.model("AboutCard", cardSchema);
const AboutPartner = mongoose.model("AboutPartner", partnerSchema);

module.exports = {
  AboutHero,
  AboutStats,
  AboutSection,
  AboutCard,
  AboutPartner,
};
