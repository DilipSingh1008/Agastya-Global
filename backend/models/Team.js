const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    image: { type: String, required: true },
    linkedin: { type: String, default: "" },
    instagram: { type: String, default: "" },
    email: { type: String, default: "" },
    isDeleted: { type: Boolean, default: false }, // soft delete
  },
  { timestamps: true },
);

module.exports = mongoose.model("Team", teamSchema);
