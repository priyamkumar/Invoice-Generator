import './App.css'
import Header from './Components/Header'
import { InvoiceProvider } from './Contexts/InvoiceContext';
import { ThemeProvider } from './Contexts/ThemeContext'
import { Outlet } from "react-router-dom";

function App() {
  return (
    <ThemeProvider>
      <InvoiceProvider>
    <Header />
    <Outlet/>
    </InvoiceProvider>
    </ThemeProvider>
  )
}

export default App
