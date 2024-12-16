import Navbar from "./Navbar";
import { useTheme } from "../Contexts/ThemeContext";

export default function Header() {
  const { isDark } = useTheme();
  return (
    <div className={`header-container ${isDark ? "dark" : ""}`}>
    <Navbar/>
    </div>
  )
}
