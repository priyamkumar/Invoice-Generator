import './App.css'
import Header from './Components/Header'
import MainSection from './Components/MainSection'
import { ThemeProvider } from './Contexts/ThemeContext'
import { Outlet } from "react-router-dom";

function App() {
  return (
    <ThemeProvider>
    <Header />
    <Outlet/>
    </ThemeProvider>
  )
}

export default App
