"use client";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
const Providers = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <ThemeProvider defaultTheme="system" attribute={"class"}>
      <div className="text-gray-700 dark:text-gray-300 dark:bg-gray-700 min-h-screen select-none transition-all duration-300">{children}</div>
    </ThemeProvider>
  );
};

export default Providers;
