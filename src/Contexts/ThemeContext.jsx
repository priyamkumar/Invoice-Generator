import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("Dark")) || false
  );

  const handleTheme = () => {
    setIsDark((prev) => !prev);
    localStorage.setItem("Dark", !isDark)
  };

  return (
    <ThemeContext.Provider value={{ isDark, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
