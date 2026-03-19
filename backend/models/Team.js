const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    image: { type: String },
    linkedin: { type: String, default: "" },
    instagram: { type: String, default: "" },
    email: { type: String, default: "" },
    status: {
      type: Boolean,
      default: true,
    },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Team", teamSchema);
