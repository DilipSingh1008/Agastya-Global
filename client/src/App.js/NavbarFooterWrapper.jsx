import React, { useEffect, useState } from "react";

export const AppWrapper = ({ children }) => {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/setting");
        const data = await res.json();
        if (data.success) setSettings(data.data);
      } catch (error) {
        console.error("Error fetching settings:", error);
      }
    };
    fetchSettings();
  }, []);

  return React.cloneElement(children, { settings });
};
