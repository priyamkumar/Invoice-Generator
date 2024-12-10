import React from 'react'
import { useTheme } from '../Contexts/ThemeContext'

export default function Invoices() {
    const {isDark} = useTheme();
    const allInvoices = JSON.parse(localStorage.getItem("invoices"));
  return (
    <div className={`all-invoices ${isDark ? "dark" : ""}`}>
      <h2>Invoices</h2>
    {allInvoices ? <div>{allInvoices}</div> : <div>No Invoices Found</div>}
    </div>
  )
}
