import React from "react";
import { useTheme } from "../Contexts/ThemeContext";

export default function Invoices() {
  const { isDark } = useTheme();
  const invoices = JSON.parse(localStorage.getItem("invoices"));
  if (invoices) {
    const invoiceData = invoices.map((el) =>
      JSON.parse(localStorage.getItem(el))
    );
  }
  return (
    <div className={`all-invoices ${isDark ? "dark" : ""}`}>
      <h2>Saved Invoices</h2>
      {!invoices || invoices.length === 0 ? (
        <p>No invoices saved yet.</p>
      ) : (
        <ul>
          {invoiceData.map((invoice, index) => (
            <li key={invoice.id || index} className="invoice-item">
              <div className="invoice-details">
                <p>
                  <strong>Invoice ID:</strong> {invoice.id}
                </p>
                <p>
                  <strong>Date:</strong> {invoice.date}
                </p>
                <p>
                  <strong>Amount:</strong> {invoice.amount}
                </p>
              </div>
              <button onClick={() => console.log("click")}>View</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
