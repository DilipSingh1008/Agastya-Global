import React, { useState } from "react";
import {
  Send,
  MapPin,
  User,
  Phone,
  Mail,
  BookOpen,
  MessageSquare,
} from "lucide-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { postData } from "../api/api";
import Banner from "../components/Banner";
import { toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";

const ApplicationForm = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      phone: "",
      email: "",
      country: "",
      subject: "",
      message: "",
    },

    validationSchema: Yup.object({
      fullName: Yup.string().required("Full name is required"),
      phone: Yup.string().required("Phone number is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      country: Yup.string().required("Country is required"),
      subject: Yup.string().required("Subject is required"),
      message: Yup.string(),
    }),

    onSubmit: async (values, { resetForm }) => {
      setLoading(true);

      try {
        const payload = {
          ...values,
          type, // ✅ comes from route
        };

        const res = await postData("applications", payload);

        toast.success(res?.message || "Enquiry submitted successfully!", {
          style: { background: "#1A237E", color: "#FFFFFF", fontSize: "13px" },
          icon: "✅",
        });

        resetForm();
      } catch (error) {
        const message =
          error?.response?.data?.message ||
          error?.message ||
          "Something went wrong. Please try again.";

        toast.error(message, {
          style: {
            background: "#FF4D4F",
            color: "#FFFFFF",
            fontSize: "13px",
          },
          icon: "⚠️",
        });
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="w-full min-h-screen bg-white mt-16">
      {/* Banner */}
      <div className="relative h-64 md:h-80 bg-[#1A237E] flex items-center justify-center overflow-hidden">
        <Banner
          title={type === "eu" ? "EU Student" : "International Student"}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 -mt-10 mb-20 relative z-20">
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 md:p-12">
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            onSubmit={formik.handleSubmit}
          >
            {/* Full Name */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#1A237E] uppercase ml-1">
                Full Name
              </label>
              <div className="relative">
                <User
                  className="absolute left-3 top-3.5 text-slate-400"
                  size={18}
                />
                <input
                  type="text"
                  name="fullName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.fullName}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>
              {formik.touched.fullName && formik.errors.fullName && (
                <p className="text-red-500 text-xs">{formik.errors.fullName}</p>
              )}
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#1A237E] uppercase ml-1">
                Phone Number
              </label>
              <div className="relative">
                <Phone
                  className="absolute left-3 top-3.5 text-slate-400"
                  size={18}
                />
                <input
                  type="tel"
                  name="phone"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#1A237E] uppercase ml-1">
                Email Address
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-3.5 text-slate-400"
                  size={18}
                />
                <input
                  type="email"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>
            </div>

            {/* Country */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#1A237E] uppercase ml-1">
                Country
              </label>
              <div className="relative">
                <MapPin
                  className="absolute left-3 top-3.5 text-slate-400"
                  size={18}
                />
                <input
                  type="text"
                  name="country"
                  onChange={formik.handleChange}
                  value={formik.values.country}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-bold text-[#1A237E] uppercase ml-1">
                Interested Subject
              </label>
              <div className="relative">
                <BookOpen
                  className="absolute left-3 top-3.5 text-slate-400"
                  size={18}
                />
                <input
                  type="text"
                  name="subject"
                  onChange={formik.handleChange}
                  value={formik.values.subject}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>
            </div>

            {/* Message */}
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-bold text-[#1A237E] uppercase ml-1">
                Message
              </label>
              <textarea
                rows="4"
                name="message"
                onChange={formik.handleChange}
                value={formik.values.message}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl"
              />
            </div>

            {/* Buttons */}
            <div className="md:col-span-2 flex flex-col items-center mt-4 gap-4">
              <button
                type="submit"
                disabled={loading}
                className="bg-[#00B0FF] text-white px-12 py-4 rounded-full font-black text-sm uppercase flex items-center gap-3"
              >
                {loading ? "Sending..." : "Send Message"}
                <Send size={18} />
              </button>

              <button
                type="button"
                onClick={() => navigate("/University")}
                className="text-slate-400 hover:text-[#1A237E] font-bold text-xs uppercase"
              >
                Go Back to Universities
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
