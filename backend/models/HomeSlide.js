// models/HomeSlide.js
const mongoose = require("mongoose");

const homeSlideSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    highlight: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    image: {
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

module.exports = mongoose.model("HomeSlide", homeSlideSchema);
