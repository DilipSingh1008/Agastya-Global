import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema(
  {
    // client: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Client", // ya Client model ka naam
    //   required: true,
    // },

    // service: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Service",
    // },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },

    enquiryDate: {
      type: Date,
      default: Date.now, // automatic current date/time
    },
    status: {
      type: String,
      enum: ["pending", "replied", "closed"],
      default: "pending",
    },
  },
  { timestamps: true },
);

const Enquiry = mongoose.model("Enquiry", enquirySchema);

export default Enquiry;
