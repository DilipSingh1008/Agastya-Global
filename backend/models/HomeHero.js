const mongoose = require("mongoose");

const homeHeroSchema = new mongoose.Schema(
  {
    badgeText: { type: String, required: true },
    title: { type: String, required: true },
    highlightText: { type: String, required: true },
    subtitle: { type: String, required: true },
    description: { type: String, required: true },

    buttonText: { type: String, required: true },
    buttonLink: { type: String, required: true },
    buttonEnabled: { type: Boolean, default: true },

    images: { type: [String], required: true },

    autoSlide: { type: Boolean, default: true },
    slideInterval: { type: Number, default: 3000 },

    highlightColor: { type: String, default: "#00B0FF" },
    backgroundColor: { type: String, default: "#ffffff" },

    isActive: { type: Boolean, default: true },
    order: { type: Number, default: 1 },
  },
  { timestamps: true },
);

module.exports =
  mongoose.models.HomeHero || mongoose.model("HomeHero", heroSchema);
