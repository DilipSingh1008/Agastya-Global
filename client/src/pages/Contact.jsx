import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  ChevronDown,
  Send,
  Globe,
  MessageSquare,
} from "lucide-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { postData } from "../api/api";
import { toast } from "react-toastify";

const navLinks = [
  { name: "Home", active: false },
  { name: "About Us", active: false },
  { name: "Services", active: false },
  { name: "Universities", active: false, hasSub: true },
  { name: "Our Team", active: false },
  { name: "IELTS", active: false },
  { name: "Blog", active: false },
  { name: "Gallery", active: false },
  { name: "Contact Us", active: true },
];

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Only numbers are allowed")
      .required("Phone number is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      // console.log(values);
      let res = await postData("enquiry", values);
      console.log(res);
      setSubmitted(true);
      toast.success("Enquiry submitted successfully!", {
        style: { background: "#1A237E", color: "#FFFFFF", fontSize: "13px" },
        icon: "✅",
      });
      resetForm();
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      console.error("Error sending enquiry:", err);
      toast.error("Something went wrong. Please try again.", {
        style: {
          background: "#FF4D4F",
          color: "#FFFFFF",
          fontSize: "13px",
        },
        icon: "⚠️",
      });
    }
  };

  return (
    <div className="font-sans bg-[#F8FAFC] min-h-screen selection:bg-[#00B0FF]/20">
      {/* --- TOP BAR --- */}
      <div className="bg-[#1A237E] text-[#FFFFFF]/80 text-[11px] py-2 px-6 flex justify-between items-center border-b border-[#283593]">
        <div className="flex gap-6 items-center">
          <a
            href="tel:+4402081435507"
            className="flex items-center gap-1.5 hover:text-[#00B0FF] transition-colors"
          >
            <Phone size={14} className="text-[#00B0FF]" /> +44 0208 1435507
          </a>
          <a
            href="mailto:info@AgastyaGlobal.co.uk"
            className="flex items-center gap-1.5 hover:text-[#00B0FF] transition-colors"
          >
            <Mail size={14} className="text-[#00B0FF]" /> info@Agastya
            Global.co.uk
          </a>
        </div>
        <div className="flex gap-4 items-center">
          <Facebook
            className="hover:text-[#00B0FF] cursor-pointer transition-transform hover:scale-110"
            size={14}
          />
          <Instagram
            className="hover:text-[#00B0FF] cursor-pointer transition-transform hover:scale-110"
            size={14}
          />
          <Linkedin
            className="hover:text-[#00B0FF] cursor-pointer transition-transform hover:scale-110"
            size={14}
          />
        </div>
      </div>

      {/* --- NAVBAR --- */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-[#1A237E] p-2 rounded-lg relative">
            <Globe className="text-white" size={24} />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tighter text-[#1A237E]">
              Agastya <span className="text-[#00B0FF]">GLOBAL</span>
            </span>
            <span className="text-[10px] uppercase tracking-[2px] font-bold text-[#283593]">
              Education Consultant
            </span>
          </div>
        </div>

        <div className="hidden lg:flex gap-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href="#"
              className={`text-sm font-bold uppercase tracking-wider transition-all hover:text-[#00B0FF] ${
                link.active
                  ? "text-[#00B0FF] border-b-2 border-[#00B0FF]"
                  : "text-[#283593]"
              } flex items-center gap-1`}
            >
              {link.name} {link.hasSub && <ChevronDown size={14} />}
            </a>
          ))}
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative h-[280px] md:h-[350px] flex items-center justify-center bg-[#1A237E]">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_#00B0FF_0%,_transparent_70%)]"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-white text-3xl md:text-5xl font-black uppercase mb-2">
            Contact <span className="text-[#00B0FF]">Us</span>
          </h1>
          <p className="text-white/80 text-sm md:text-base max-w-lg mx-auto font-medium">
            Join the elite circle of international students. Our experts are
            ready to guide you.
          </p>
        </div>
      </section>

      {/* --- MAIN CONTENT --- */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 -mt-16 relative z-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar: Info Cards */}
          <div className="lg:col-span-4 space-y-4">
            {[
              {
                icon: <MapPin />,
                color: "bg-[#1A237E]",
                title: "Head Office",
                text: "Room G2-G4, Ground Floor\n251-253 Commercial Road,\nLondon, E1 2BT",
              },
              {
                icon: <Mail />,
                color: "bg-[#00B0FF]",
                title: "Email Support",
                text: "info@AgastyaGlobal.co.uk",
              },
              {
                icon: <Phone />,
                color: "bg-[#283593]",
                title: "Call Helpline",
                text: "+44 0208 1435507\n+44 7808 223229",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white p-5 rounded-2xl shadow-xl flex gap-4 hover:-translate-y-1 transition-transform border border-[#283593]/10"
              >
                <div
                  className={`${card.color} text-white p-3 rounded-xl h-fit`}
                >
                  {card.icon}
                </div>
                <div>
                  <h4 className="font-black text-[#1A237E] mb-1 uppercase text-xs tracking-widest">
                    {card.title}
                  </h4>
                  <p className="text-[#283593]/70 text-sm whitespace-pre-line leading-relaxed font-medium">
                    {card.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Section: Form */}
          {/* <div className="lg:col-span-8">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl border border-[#283593]/5">
              <div className="mb-6 border-l-4 border-[#00B0FF] pl-5">
                <h2 className="text-2xl font-black text-[#1A237E] mb-1 flex items-center gap-2">
                  <MessageSquare className="text-[#00B0FF]" /> Send a Message
                </h2>
                <p className="text-[#283593]/50 text-sm font-medium">
                  Professional support is just a message away.
                </p>
              </div>

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Field
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        className="w-full bg-white border border-[#283593]/20 rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#00B0FF] focus:border-[#00B0FF] transition-all outline-none"
                      />
                      <ErrorMessage
                        name="name"
                        component="span"
                        className="text-red-500 text-xs mt-1"
                      />

                      <Field
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        className="w-full bg-white border border-[#283593]/20 rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#00B0FF] focus:border-[#00B0FF] transition-all outline-none"
                      />
                      <ErrorMessage
                        name="email"
                        component="span"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Field
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        className="w-full bg-white border border-[#283593]/20 rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#00B0FF] focus:border-[#00B0FF] transition-all outline-none"
                      />
                      <ErrorMessage
                        name="phone"
                        component="span"
                        className="text-red-500 text-xs mt-1"
                      />

                      <Field
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        className="w-full bg-white border border-[#283593]/20 rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#00B0FF] focus:border-[#00B0FF] transition-all outline-none"
                      />
                      <ErrorMessage
                        name="subject"
                        component="span"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>

                    <Field
                      as="textarea"
                      name="message"
                      rows={4}
                      placeholder="Your Message"
                      className="w-full bg-white border border-[#283593]/20 rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#00B0FF] focus:border-[#00B0FF] transition-all outline-none resize-none"
                    />
                    <ErrorMessage
                      name="message"
                      component="span"
                      className="text-red-500 text-xs mt-1"
                    />

                    <div className="flex justify-center">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-8 py-2 cursor-pointer rounded-xl font-black uppercase tracking-widest flex items-center justify-center gap-2 text-sm transition-all transform active:scale-95 bg-[#1A237E] text-white hover:bg-[#00B0FF] hover:shadow-lg"
                      >
                        <Send size={16} /> Submit
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div> */}
          <div className="lg:col-span-8">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl border border-[#283593]/5">
              <div className="mb-6 border-l-4 border-[#00B0FF] pl-5">
                <h2 className="text-2xl font-black text-[#1A237E] mb-1 flex items-center gap-2">
                  <MessageSquare className="text-[#00B0FF]" /> Send a Message
                </h2>
                <p className="text-[#283593]/50 text-sm font-medium">
                  Professional support is just a message away.
                </p>
              </div>

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form className="space-y-4">
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Field
                          type="text"
                          name="name"
                          placeholder="Full Name"
                          className="w-full bg-white border border-[#283593]/20 rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#00B0FF] focus:border-[#00B0FF] transition-all outline-none"
                        />
                        <ErrorMessage
                          name="name"
                          component="span"
                          className="text-red-500 text-xs mt-1 block"
                        />
                      </div>

                      <div>
                        <Field
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          className="w-full bg-white border border-[#283593]/20 rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#00B0FF] focus:border-[#00B0FF] transition-all outline-none"
                        />
                        <ErrorMessage
                          name="email"
                          component="span"
                          className="text-red-500 text-xs mt-1 block"
                        />
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Field
                          type="text"
                          name="phone"
                          placeholder="Phone Number"
                          className="w-full bg-white border border-[#283593]/20 rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#00B0FF] focus:border-[#00B0FF] transition-all outline-none"
                        />
                        <ErrorMessage
                          name="phone"
                          component="span"
                          className="text-red-500 text-xs mt-1 block"
                        />
                      </div>

                      <div>
                        <Field
                          type="text"
                          name="subject"
                          placeholder="Subject"
                          className="w-full bg-white border border-[#283593]/20 rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#00B0FF] focus:border-[#00B0FF] transition-all outline-none"
                        />
                        <ErrorMessage
                          name="subject"
                          component="span"
                          className="text-red-500 text-xs mt-1 block"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <Field
                        as="textarea"
                        name="message"
                        rows={4}
                        placeholder="Your Message"
                        className="w-full bg-white border border-[#283593]/20 rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#00B0FF] focus:border-[#00B0FF] transition-all outline-none resize-none"
                      />
                      <ErrorMessage
                        name="message"
                        component="span"
                        className="text-red-500 text-xs mt-1 block"
                      />
                    </div>

                    {/* Submit */}
                    <div className="flex justify-center">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-8 py-2 cursor-pointer rounded-xl font-black uppercase tracking-widest flex items-center justify-center gap-2 text-sm transition-all transform active:scale-95 bg-[#1A237E] text-white hover:bg-[#00B0FF] hover:shadow-lg"
                      >
                        <Send size={16} /> Submit
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
