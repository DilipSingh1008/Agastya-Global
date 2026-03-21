const mongoose = require("mongoose");

/* ================= HERO ================= */
const heroSchema = new mongoose.Schema(
  {
    title: String,
    highlight: String,
    desc: String,
    image: String,

    status: { type: Boolean, default: true },
    isDelete: { type: Boolean, default: false },
  },
  { timestamps: true },
);

/* ================= LOGO ================= */
const logoSchema = new mongoose.Schema(
  {
    name: String,
    image: String,

    status: { type: Boolean, default: true },
    isDelete: { type: Boolean, default: false },
  },
  { timestamps: true },
);

/* ================= SERVICE ================= */
const serviceSchema = new mongoose.Schema(
  {
    title: String,
    desc: String,
    icon: String,

    status: { type: Boolean, default: true },
    isDelete: { type: Boolean, default: false },
  },
  { timestamps: true },
);

const Hero = mongoose.model("HomeHero", heroSchema);
const Logo = mongoose.model("HomeLogo", logoSchema);
const Service = mongoose.model("HomeService", serviceSchema);

module.exports = {
  Hero,
  Logo,
  Service,
};
