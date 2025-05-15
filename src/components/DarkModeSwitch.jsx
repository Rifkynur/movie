"use client";
import React, { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "next-themes";

const DarkModeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;
  console.log(currentTheme);
  return <div>{currentTheme === "dark" ? <MdLightMode onClick={() => setTheme("light")} className="cursor-pointer" /> : <MdDarkMode onClick={() => setTheme("dark")} className="cursor-pointer" />}</div>;
};

export default DarkModeSwitch;
