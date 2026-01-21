import { useState, useEffect } from "react";

export default function useDarkMode() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check localStorage first
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) {
      const isDarkMode = JSON.parse(saved);
      setIsDark(isDarkMode);
      updateDOM(isDarkMode);
    } else {
      // Default to light mode (false)
      setIsDark(false);
      updateDOM(false);
    }
  }, []);

  const updateDOM = (isDarkMode) => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggle = () => {
    setIsDark((prev) => {
      const newMode = !prev;
      localStorage.setItem("darkMode", JSON.stringify(newMode));
      updateDOM(newMode);
      return newMode;
    });
  };

  return { isDark, toggle };
}
