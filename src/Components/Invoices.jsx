import React from "react";
import { useTheme } from "../Contexts/ThemeContext";

export default function Invoices() {
  const { isDark } = useTheme();
  const allInvoices = JSON.parse(localStorage.getItem("invoices"));
  const [items, details, invoiceDetails, bankDetails] = allInvoices;
  return (
    <div className={`all-invoices ${isDark ? "dark" : ""}`}>
      <h2>Invoices</h2>
      {allInvoices ? <div>{items[0].amount}</div> : <div>No Invoices Found</div>}
    </div>
  );
}
