const mongoose = require("mongoose");

const homeHeroSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },

    images: {
      type: String,
      required: true,
    },

    status: {
      type: Boolean,
      default: true,
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

module.exports =
  mongoose.models.HomeHero || mongoose.model("HomeHero", homeHeroSchema);
