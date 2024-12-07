import BillInfo from './BillInfo'
import { useTheme } from "../Contexts/ThemeContext";

export default function MainSection() {
  const { isDark } = useTheme();
  return (
    <div className={`main ${isDark ? "dark" : ""}`}>
      <BillInfo />
    </div>
  )
}
