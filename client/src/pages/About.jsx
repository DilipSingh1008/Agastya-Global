import React from "react";
import {
  Megaphone,
  Clock,
  MapPin,
  Edit,
  Target,
  Eye,
  TrendingUp,
} from "lucide-react";
import { AiOutlineCheckSquare } from "react-icons/ai";

const About = () => {
  return (
    <div className="pt-20 font-sans bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[350px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="London Skyline"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <h1 className="relative z-10 text-white text-5xl md:text-6xl font-black tracking-tight">
          About Us
        </h1>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* --- AGENCY & GOAL CARDS --- */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Our Agency */}
          <div className="bg-gray-50 p-10 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <Megaphone className="text-[#e11d48] shrink-0" size={32} />
              <h2 className="text-[#212958] text-2xl font-black uppercase tracking-wide">
                Our Agency
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              Zain Global, a London-based agency established in 2012,
              specializes in recruiting both domestic and international students
              for the world's top universities. Certified by the British Council
              as a global agent, we have successfully enrolled students
              globally, earning the trust of UK and European citizens.
            </p>
          </div>

          {/* Our Goal */}
          <div className="bg-gray-50 p-10 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <Clock className="text-[#e11d48] shrink-0" size={32} />
              <h2 className="text-[#212958] text-2xl font-black uppercase tracking-wide">
                Our Goal
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              Our goal is to enhance diversity and expand globally, facilitating
              education worldwide. Our dedicated team customizes applications
              for diverse fields such as Medicine, Business Studies, IT,
              Performing Arts, Law, Engineering, and many more. We aim to reach
              broader platforms for students.
            </p>
          </div>
        </div>

        {/* --- REACHED & BASED CARDS --- */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* We Have Reached */}
          <div className="bg-gray-50 p-10 rounded-[2rem] border border-gray-100 shadow-sm">
            <div className="flex items-start gap-4 mb-4">
              <MapPin className="text-[#e11d48] shrink-0" size={32} />
              <h2 className="text-[#212958] text-2xl font-black uppercase tracking-wide">
                We Have Reached
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              With over various partner universities, our acclaimed student
              support services have left a positive impact in diverse countries
              including Canada, US, UK, Australia, India, Bangladesh, China,
              Malaysia, and various parts of Europe. Our commitment to
              excellence led to British Council certification in 2018.
            </p>
          </div>

          {/* We Are Based */}
          <div className="bg-gray-50 p-10 rounded-[2rem] border border-gray-100 shadow-sm">
            <div className="flex items-start gap-4 mb-4">
              <Edit className="text-[#e11d48] shrink-0" size={32} />
              <h2 className="text-[#212958] text-2xl font-black uppercase tracking-wide">
                We Are Based
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              In the vibrant heart of East London, our location provides an
              inspiring home for students seeking to enhance their career
              prospects. East London, known for its multicultural charm, hosts
              top-notch museums, historic sites, markets, and restaurants.
              Explore endless opportunities in this dynamic hub.
            </p>
          </div>
        </div>

        {/* --- PHILOSOPHY & ORGANIZATION --- */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-gray-50 p-10 rounded-[2rem] border border-gray-100 shadow-sm">
            <h2 className="text-[#212958] text-2xl font-black uppercase mb-4 flex gap-3">
              <Target className="text-[#e11d48]" /> Our Philosophy
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Zain Global Ltd serves as a bridge between aspirations and
              careers, offering real guidance for students globally. Committed
              to the belief that everyone deserves a quality education, we
              strive to create opportunities with partner institutions to keep
              tuition affordable.
            </p>
          </div>
          <div className="bg-gray-50 p-10 rounded-[2rem] border border-gray-100 shadow-sm">
            <h2 className="text-[#212958] text-2xl font-black uppercase mb-4 flex gap-3">
              <Eye className="text-[#e11d48]" /> Our Organization
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Comprising experienced staff dedicated to guiding students, Zain
              Global (UK) stands as a unique platform. Our team empowers
              students to make informed decisions about their future using an
              international course search tool and university rankings.
            </p>
          </div>
        </div>

        {/* --- MISSION, VISION, STRATEGY SECTION --- */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {/* Strategy */}
          <div className="p-8  bg-white shadow-xl rounded-b-xl">
            <h3 className="text-[#212958] text-2xl font-black mb-4 uppercase">
              Our Strategy
            </h3>
            <ul className="space-y-4 text-gray-600 font-medium">
              <li className="flex gap-2">
                <AiOutlineCheckSquare className="text-red-500 text-2xl" />
                <span className="text-sm">
                  Expanding market presence with global networks.
                </span>
              </li>
              <li className="flex gap-2">
                <AiOutlineCheckSquare className="text-red-500 text-2xl" />
                <span className="text-sm">
                  Delivering expert guidance through seasoned consultants.
                </span>
              </li>
              <li className="flex gap-2">
                <AiOutlineCheckSquare className="text-red-500 text-2xl" />
                <span className="text-sm">
                  Customizing support for international and EU students.
                </span>
              </li>
            </ul>
          </div>

          {/* Mission */}
          <div className="p-8   bg-white shadow-xl rounded-b-xl">
            <h3 className="text-[#212958] text-2xl font-black mb-4 uppercase">
              Our Mission Is
            </h3>
            <ul className="space-y-4 text-gray-600 font-medium">
              <li className="flex gap-2">
                <AiOutlineCheckSquare className="text-red-500 text-2xl" />
                <span className="text-sm">
                  Guiding students to the ideal university for success.
                </span>
              </li>
              <li className="flex gap-2">
                <AiOutlineCheckSquare className="text-red-500 text-2xl" />
                <span className="text-sm">
                  Navigating the ever-changing educational landscape.
                </span>
              </li>
              <li className="flex gap-2">
                <AiOutlineCheckSquare className="text-red-500 text-2xl" />
                <span className="text-sm">
                  Securing partial scholarships by connecting institutions.
                </span>
              </li>
            </ul>
          </div>

          {/* Vision */}
          <div className="p-8  bg-white shadow-xl rounded-b-xl">
            <h3 className="text-[#212958] text-2xl font-black mb-4 uppercase">
              Our Vision Is
            </h3>
            <ul className="space-y-4 text-gray-600 font-medium">
              <li className="flex gap-2">
                <AiOutlineCheckSquare className="text-red-500 text-2xl" />
                <span className="text-sm">
                  Aligning institutions with students' profiles and goals.
                </span>
              </li>
              <li className="flex gap-2">
                <AiOutlineCheckSquare className="text-red-500 text-2xl" />
                <span className="text-sm">
                  Fostering holistic student development.
                </span>
              </li>
              <li className="flex gap-2">
                <AiOutlineCheckSquare className="text-red-500 text-2xl" />
                <span className="text-sm">
                  Providing stress-free, high-quality services.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* --- PARTNER NETWORK LOGOS --- */}
        <div className="text-center mb-16">
          <h2 className="text-[#212958] text-2xl font-black mb-10">
            We are part of the best international network of higher-education
            institutions
          </h2>
          <div className="flex flex-wrap justify-center gap-10 items-center opacity-80">
            {/* University Logo 1 */}
            <img
              src="https://cdn-icons-png.flaticon.com/512/3252/3252906.png"
              className="h-18 w-auto grayscale hover:grayscale-0 transition-all cursor-pointer"
              alt="Partner 1"
            />

            {/* University Logo 2 */}
            <img
              src="https://cdn-icons-png.flaticon.com/512/2997/2997292.png"
              className="h-18 w-auto grayscale hover:grayscale-0 transition-all cursor-pointer"
              alt="Partner 2"
            />

            {/* University Logo 3 */}
            <img
              src="https://cdn-icons-png.flaticon.com/512/2232/2232688.png"
              className="h-18 w-auto grayscale hover:grayscale-0 transition-all cursor-pointer"
              alt="Partner 3"
            />

            {/* University Logo 4 */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
