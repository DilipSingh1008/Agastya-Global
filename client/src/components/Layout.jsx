import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function Layout() {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/setting");
        console.log(res);
        const data = await res.json();
        if (data.success) setSettings(data.data);
      } catch (error) {
        console.error("Error fetching settings:", error);
      }
    };

    fetchSettings();
  }, []);
  return (
    <>
      <Navbar settings={settings} />
      <Outlet />
      <Footer settings={settings} />
    </>
  );
}
