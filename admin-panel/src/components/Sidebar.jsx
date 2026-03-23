import { NavLink } from "react-router-dom";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import {
  LayoutDashboard,
  Users,
  Settings,
  Hexagon,
  X,
  Grid,
  LocationEdit,
  ImageIcon,
  Shield,
  Layers,
  ListTree,
  Newspaper,
  HelpCircle,
  Briefcase,
  Layout,
  Tags,
  PenTool,
  MessageCircle,
  Info,
  FileText,
  BarChart3,
  LayoutGrid,
  Globe,
  BookOpen,
  CheckSquare,
  Star,
  ArrowRight,
  Home,
  Icon,
  Image,
} from "lucide-react";
import { useGetItemsQuery } from "../redux/api/apiSlice";
import { useState } from "react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [openMenu, setOpenMenu] = useState(null);
  const { data: modulesData } = useGetItemsQuery("role/module");
  const permissions = useSelector(
    (state) => state.permission.permissions || [],
  );
  const role = localStorage.getItem("role");
  const allow = role === "admin" ? true : role === "sub-admin" ? true : false;

  const menuItems = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <LayoutDashboard size={18} />,
      moduleKey: "dashboard",
    },
    // conditionally push
    ...(allow
      ? [
          // {
          //   path: "/dashboard/managerole",
          //   name: "ManageRole",
          //   icon: <Shield size={18} />,
          //   moduleKey: "managerole",
          // },
          // {
          //   path: "/dashboard/manage-modules",
          //   name: "Manage Modules",
          //   icon: <ListTree size={18} />,
          //   moduleKey: "manage-modules",
          // },
        ]
      : []),

    // {
    //   path: "/dashboard/user",
    //   name: "Users",
    //   icon: <Users size={18} />,
    //   moduleKey: "users",
    // },
    {
      name: "Home",
      icon: <Home size={18} />,
      children: [
        {
          name: "Manage Courses",
          path: "/dashboard/home/ManageCourses",
          icon: <BookOpen size={16} />,
          moduleKey: "home-courses",
        },
        {
          name: "Home slider",
          path: "/dashboard/home/home-slider",
          icon: <Image size={16} />,
          moduleKey: "home-hero",
        },
        {
          name: "Manage Hero",
          path: "/dashboard/home/ManageHero",
          icon: <Image size={16} />,
          moduleKey: "home-hero",
        },
        {
          name: "Manage Logos",
          path: "/dashboard/home/ManageLogos",
          icon: <Layers size={16} />,
          moduleKey: "home-logos",
        },
        {
          name: "Services Manager",
          path: "/dashboard/home/ServicesManager",
          icon: <Settings size={16} />,
          moduleKey: "home-services",
        },
      ],
    },
    {
      name: "Services",
      icon: <Briefcase size={18} />,
      children: [
        {
          name: "Recruitment",
          path: "/dashboard/manage-recruitment",
          icon: <Users size={16} />,
          moduleKey: "recruitment",
        },
        {
          name: "Services",
          path: "/dashboard/manage-services",
          icon: <Briefcase size={16} />,
          moduleKey: "services",
        },
        {
          name: "Course Types",
          path: "/dashboard/manage-course-types",
          icon: <Layers size={16} />,
          moduleKey: "course-types",
        },
        {
          name: "Subjects",
          path: "/dashboard/manage-subjects",
          icon: <ListTree size={16} />,
          moduleKey: "subjects",
        },
        {
          name: "Questions",
          path: "/dashboard/manage-questions",
          icon: <HelpCircle size={16} />,
          moduleKey: "questions",
        },
      ],
    },
    {
      name: "About",
      icon: <Info size={18} />,
      children: [
        {
          name: "Hero",
          path: "/dashboard/about/hero",
          icon: <FileText size={16} />,
          moduleKey: "about-hero",
        },
        {
          name: "Stats",
          path: "/dashboard/about/stats",
          icon: <BarChart3 size={16} />,
          moduleKey: "about-stats",
        },
        {
          name: "Sections",
          path: "/dashboard/about/sections",
          icon: <LayoutGrid size={16} />,
          moduleKey: "about-sections",
        },
        {
          name: "Cards",
          path: "/dashboard/about/cards",
          icon: <FileText size={16} />,
          moduleKey: "about-cards",
        },
        {
          name: "Partners",
          path: "/dashboard/about/partners",
          icon: <Users size={16} />,
          moduleKey: "about-partners",
        },
      ],
    },
    {
      name: "IELTS",
      icon: <Globe size={18} />,
      children: [
        {
          name: "Hero",
          path: "/dashboard/ielts/hero",
          icon: <FileText size={16} />,
          moduleKey: "ielts-hero",
        },
        {
          name: "Overview",
          path: "/dashboard/ielts/overview",
          icon: <BookOpen size={16} />,
          moduleKey: "ielts-overview",
        },
        {
          name: "Course Types",
          path: "/dashboard/ielts/types",
          icon: <LayoutGrid size={16} />,
          moduleKey: "ielts-types",
        },
        {
          name: "Test Structure",
          path: "/dashboard/ielts/test-structure",
          icon: <CheckSquare size={16} />,
          moduleKey: "ielts-test-structure",
        },
        {
          name: "Features",
          path: "/dashboard/ielts/features",
          icon: <Star size={16} />,
          moduleKey: "ielts-features",
        },
        {
          name: "CTA",
          path: "/dashboard/ielts/cta",
          icon: <ArrowRight size={16} />,
          moduleKey: "ielts-cta",
        },
      ],
    },
    {
      path: "/dashboard/applicationList",
      name: "Application List",
      icon: <ImageIcon size={18} />,
    },
    {
      path: "/dashboard/location",
      name: "Location",
      icon: <LocationEdit size={18} />,
      moduleKey: "location",
    },

    // {
    //   path: "/dashboard/categories",
    //   name: "Manage Categories",
    //   icon: <Grid size={18} />,
    //   moduleKey: "categories",
    // },
    {
      path: "/dashboard/banner",
      name: "Banner",
      icon: <ImageIcon size={18} />,
      moduleKey: "banner",
    },
    // {
    //   path: "/dashboard/products",
    //   name: "Products",
    //   icon: <Hexagon size={18} />,
    //   moduleKey: "products",
    // },
    // {
    //   path: "/dashboard/service",
    //   name: "Manage Services",
    //   icon: <Briefcase size={18} />,
    //   moduleKey: "services",
    // },
    // {
    //   path: "/dashboard/cms",
    //   name: "Manage CMS",
    //   icon: <Layout size={18} />,
    //   moduleKey: "cms",
    // },
    // {
    //   path: "/dashboard/faq-category",
    //   name: "FAQ Category",
    //   icon: <Layers size={18} />,
    //   moduleKey: "faq-category",
    // },
    // {
    //   path: "/dashboard/manage-faq",
    //   name: "Manage FAQ",
    //   icon: <HelpCircle size={18} />,
    //   moduleKey: "faq",
    // },
    // {
    //   path: "/dashboard/manage-news",
    //   name: "Manage News",
    //   icon: <Newspaper size={18} />,
    //   moduleKey: "news",
    // },
    {
      path: "/dashboard/Manage-Blog-Categor",
      name: "Blog Category ",
      icon: <Tags size={18} />,
      moduleKey: "blog-category",
    },
    {
      path: "/dashboard/Manage-Blog",
      name: "Manage Blog ",
      icon: <PenTool size={18} />,
      moduleKey: "blog",
    },

    // {
    //   path: "/dashboard/Client",
    //   name: "Client ",
    //   icon: <PenTool size={18} />,
    // },
    {
      path: "/dashboard/enquiry",
      name: "Enquiry",
      icon: <MessageCircle size={18} />,
      moduleKey: "enquiry",
    },
    // {
    //   path: "/dashboard/vendor",
    //   name: "Vendor",
    //   icon: <MessageCircle size={18} />,
    // },
    // {
    //   path: "/dashboard/career",
    //   name: "Career",
    //   icon: <Briefcase size={18} />,
    //   moduleKey: "career",
    // },
    {
      path: "/dashboard/Media-Post",
      name: "MediaPost",
      icon: <Briefcase size={18} />,
      moduleKey: "media-post",
    },
    {
      path: "/dashboard/Manage-media",
      name: "Media Category",
      icon: <ImageIcon size={18} />,
    },
    {
      path: "/dashboard/Manage-media-items",
      name: "Media Items",
      icon: <ImageIcon size={18} />,
    },
    {
      path: "/dashboard/ManageTeam",
      name: "Our Team",
      icon: <ImageIcon size={18} />,
    },

    {
      path: "/dashboard/settings",
      name: "Settings",
      icon: <Settings size={18} />,
      moduleKey: "settings",
    },
  ];

  const existingModuleNames = useMemo(
    () =>
      new Set([
        "dashboard",
        "managerole",
        "users",
        "location",
        "categories",
        "banner",
        "products",
        "services",
        "cms",
        "faq-category",
        "faq",
        "news",
        "blog-category",
        "blog",
        "client",
        "enquiry",
        "vendor",
        "career",
        "media-post",
        "settings",
      ]),
    [],
  );

  const dynamicModuleItems = useMemo(() => {
    const modules = modulesData || [];
    return modules
      .filter((mod) => mod?.name && !existingModuleNames.has(mod.name))
      .map((mod) => ({
        path: `/dashboard/module/${mod.name}`,
        name: mod.label || mod.name,
        icon: <ListTree size={18} />,
        moduleKey: mod.name,
      }));
  }, [modulesData, existingModuleNames]);

  const permissionMap = useMemo(() => {
    const map = new Map();
    permissions.forEach((p) => {
      const key = p?.module?.name;
      if (key) map.set(key, p);
    });
    return map;
  }, [permissions]);

  const allMenuItems = useMemo(() => {
    const items = [...menuItems, ...dynamicModuleItems];
    if (role === "admin") return items;

    return items.filter((item) => {
      if (!item.moduleKey) return true;
      const perm = permissionMap.get(item.moduleKey);
      return !!(perm?.all || perm?.view);
    });
  }, [menuItems, dynamicModuleItems, permissionMap, role]);
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleSidebar}
      />

      <aside
        className={`fixed inset-y-0 left-0 z-[70] w-56 transform transition-transform duration-300 ease-in-out border-r flex flex-col
        md:sticky md:translate-x-0 
        ${isOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"}`}
        style={{
          backgroundColor: "var(--sidebar-bg)",
          borderColor: "var(--border-color)",
          height: "100vh",
        }}
      >
        <div
          className="h-14 flex items-center justify-between px-5 border-b"
          style={{ borderColor: "var(--border-color)" }}
        >
          <div className="flex items-center gap-2">
            <div
              className="p-1 rounded-lg"
              style={{
                backgroundColor: "var(--primary-glow)",
                color: "var(--primary)",
              }}
            >
              <Hexagon size={18} fill="currentColor" fillOpacity={0.2} />
            </div>
            <h2
              className="text-md font-bold uppercase tracking-tighter"
              style={{ color: "var(--text-main)" }}
            >
              Admin<span style={{ color: "var(--primary)" }}>Pan</span>
            </h2>
          </div>
          <button
            onClick={toggleSidebar}
            className="md:hidden p-1 text-slate-500 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {allMenuItems.map((item, index) => {
            // 👉 If item has children (Services)
            if (item.children) {
              return (
                <div key={index}>
                  {/* Parent */}
                  <div
                    onClick={() =>
                      setOpenMenu(openMenu === index ? null : index)
                    }
                    className="flex items-center gap-2.5 px-3 py-2 rounded-lg cursor-pointer hover:bg-white/5 text-slate-400"
                  >
                    <span>{item.icon}</span>
                    <span className="text-[13px] font-medium">{item.name}</span>
                  </div>

                  {/* Children */}
                  {openMenu === index && (
                    <div className="ml-6 mt-1 space-y-1">
                      {item.children.map((child, i) => (
                        <NavLink
                          key={i}
                          to={child.path}
                          onClick={() =>
                            window.innerWidth < 768 && toggleSidebar()
                          }
                          className={({ isActive }) => `
                    flex items-center gap-2 px-3 py-2 rounded-lg text-[12px]
                    ${isActive ? "bg-white/5" : "hover:bg-white/5"}
                  `}
                          style={({ isActive }) => ({
                            color: isActive
                              ? "var(--primary)"
                              : "var(--text-muted)",
                          })}
                        >
                          {child.icon && <span>{child.icon}</span>}
                          <span>{child.name}</span>
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            // 👉 Normal menu item
            return (
              <NavLink
                key={item.path}
                to={item.path}
                end
                onClick={() => window.innerWidth < 768 && toggleSidebar()}
                className={({ isActive }) => `
          flex items-center gap-2.5 px-3 py-2 rounded-lg transition-all duration-200 group
          ${isActive ? "bg-white/5 border border-white/5" : "hover:bg-white/5 text-slate-400"}
        `}
                style={({ isActive }) => ({
                  color: isActive ? "var(--primary)" : "var(--text-muted)",
                })}
              >
                {({ isActive }) => (
                  <>
                    <span>{item.icon}</span>
                    <span className="text-[13px] font-medium tracking-tight">
                      {item.name}
                    </span>
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
