"use client";
import { createContext, ReactNode, useState } from "react";

interface ThemeContextTypes{
    theme: string;
    toggleTheme: ()=> void;
}

const ThemeContext = createContext<ThemeContextTypes | undefined>(undefined);

interface ThemeProviderTypes{
    children : ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderTypes) => {
  const [theme, setTheme] = useState("light"); 

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };