import React, { useState } from "react";
import { Send, MapPin, User, Phone, Mail, BookOpen } from "lucide-react";
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
        const payload = { ...values, type };
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
          style: { background: "#FF4D4F", color: "#FFFFFF", fontSize: "13px" },
          icon: "⚠️",
        });
      } finally {
        setLoading(false);
      }
    },
  });

  const InputField = ({ icon: Icon, name, placeholder, type = "text" }) => (
    <div className="space-y-2">
      <label className="text-xs font-bold text-[#1A237E] uppercase tracking-wider">
        {placeholder}
      </label>

      <div className="relative group">
        <Icon
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#00B0FF]"
          size={18}
        />

        <input
          type={type}
          name={name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values[name]}
          placeholder={placeholder}
          className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl outline-none transition-all duration-200 focus:border-[#00B0FF] focus:ring-2 focus:ring-[#00B0FF]/20 hover:shadow-sm"
        />
      </div>

      {formik.touched[name] && formik.errors[name] && (
        <p className="text-red-500 text-xs">{formik.errors[name]}</p>
      )}
    </div>
  );

  return (
    <div className="pt-20 font-sans bg-[#FBFDFF] min-h-screen text-slate-900">
      {/* Banner */}
      <Banner
        subtitle="Application Portal"
        title={
          <>
            {type === "eu" ? "EU Students" : "International Students"}{" "}
            {/* <span className="text-[#00B0FF]">Application</span> */}
          </>
        }
        description="Submit your details to begin your university application process. Our experts will guide you through admissions, documentation, and next steps."
      />

      {/* Form Card */}
      <div className="max-w-5xl mx-auto px-4 -mt-12 mb-20 relative z-20">
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 md:p-10 hover:shadow-[0_30px_80px_-20px_rgba(26,35,126,0.2)] transition-all duration-300">
          {/* Header */}
          <div className="mb-8 text-center">
            <h2 className="text-2xl md:text-3xl font-black text-[#1A237E] uppercase tracking-tight">
              Apply Now
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Fill in your details and our team will contact you shortly.
            </p>
          </div>

          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            onSubmit={formik.handleSubmit}
          >
            <InputField icon={User} name="fullName" placeholder="Full Name" />

            <InputField icon={Phone} name="phone" placeholder="Phone Number" />

            <InputField
              icon={Mail}
              name="email"
              placeholder="Email Address"
              type="email"
            />

            <InputField icon={MapPin} name="country" placeholder="Country" />

            <div className="md:col-span-2">
              <InputField
                icon={BookOpen}
                name="subject"
                placeholder="Interested Subject"
              />
            </div>

            {/* Message */}
            <div className="md:col-span-2 space-y-2">
              <label className="text-xs font-bold text-[#1A237E] uppercase tracking-wider">
                Message
              </label>

              <textarea
                rows="5"
                name="message"
                onChange={formik.handleChange}
                value={formik.values.message}
                placeholder="Write your message..."
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl outline-none transition-all duration-200 focus:border-[#00B0FF] focus:ring-2 focus:ring-[#00B0FF]/20 hover:shadow-sm"
              />
            </div>

            {/* Buttons */}
            <div className="md:col-span-2 flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
              <button
                type="submit"
                disabled={loading}
                className="bg-gradient-to-r from-[#00B0FF] to-[#1A237E] text-white px-10 py-4 rounded-full font-black text-sm uppercase flex items-center gap-3 shadow-lg hover:scale-105 active:scale-95 transition-all"
              >
                {loading ? "Sending..." : "Send Message"}
                <Send size={18} />
              </button>

              <button
                type="button"
                onClick={() => navigate("/University")}
                className="text-slate-500 hover:text-[#1A237E] font-bold text-xs uppercase tracking-wider transition"
              >
                ← Back to Universities
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
