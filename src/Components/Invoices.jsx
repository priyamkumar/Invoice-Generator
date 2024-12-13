import React from "react";
import { useTheme } from "../Contexts/ThemeContext";

export default function Invoices() {
  const { isDark } = useTheme();
  const invoices = JSON.parse(localStorage.getItem("invoices"));
  let invoiceData = [];
  if (invoices) {
    invoiceData = invoices.map((el) => JSON.parse(localStorage.getItem(el)));
  }
  console.log(invoices)

  const handleDelete = (index) => {
    let deletedInvoice = invoices.filter((_, id) => id === index);
    console.log(deletedInvoice);
    let invoicesLeft = invoices.filter((_, id) => id !== index);
    console.log(invoicesLeft);
    localStorage.removeItem("invoices", JSON.stringify(invoicesLeft));
    localStorage.setItem("invoices", JSON.stringify(invoicesLeft));
  }
  return (
    <div className={`all-invoices ${isDark ? "dark" : ""}`}>
      <h2>Saved Invoices</h2>
      {!invoices || invoices.length === 0 ? (
        <p>No invoices saved yet.</p>
      ) : (
        <ol>
          {invoiceData.map((invoice, index) => (
            <li key={invoice.id || index} className="invoice-item">
              <div className="all-invoice-details">
                <div className="all-invoices-data">
                  <p>
                    <strong>Invoice Number:</strong> {invoice[2].invoiceNumber}
                  </p>
                  <p>
                    <strong>Date:</strong> {invoice[2].invoiceDate}
                  </p>
                  <p>
                    <strong>Amount:</strong> {invoice[4]}
                  </p>
                </div>
                  <button onClick={() => console.log("click")}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
