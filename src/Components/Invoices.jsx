import React from "react";
import { useTheme } from "../Contexts/ThemeContext";
import { useInvoice } from "../Contexts/InvoiceContext";

export default function Invoices() {
  const { isDark } = useTheme();
  const { invoices, setInvoices } = useInvoice();

  let invoiceData = invoices.map((el) => JSON.parse(localStorage.getItem(el)));

  const handleDelete = (index) => {
    let deletedInvoice = invoices.find((_, id) => id === index);
    let invoicesLeft = invoices.filter((_, id) => id !== index);
    console.log(deletedInvoice)
    setInvoices(invoicesLeft);
    localStorage.removeItem(deletedInvoice);
    localStorage.setItem("invoices", JSON.stringify(invoicesLeft));
  };

  const handleEdit = () => {
    console.log("click")
  }
  return (
    <div className={`all-invoices ${isDark ? "dark" : ""}`}>
      <h2>Saved Invoices</h2>
      {!invoices || invoices.length === 0 ? (
        <p className="no-invoices">No invoices saved yet.</p>
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
                <button onClick={handleEdit}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
