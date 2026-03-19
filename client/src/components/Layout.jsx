import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getData } from "../api/api";

export default function Layout() {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await getData("setting/social");

        
        if (res.success) setSettings(res.data);
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
