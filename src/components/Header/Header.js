import React from "react";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import { ThemeProvider } from "../ThemeContext/ThemeContext";

const Header = () => {
  return (
    <ThemeProvider>
      <header className="fixed top-0 left-0 right-0 py-4 px-14 z-10 flex items-center justify-between bg-white">
        <span className="font-extrabold text-2xl">Where in the world?</span>
        <ThemeSwitcher />
      </header>
    </ThemeProvider>
  );
};

export default Header;
