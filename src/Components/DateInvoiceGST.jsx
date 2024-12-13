import React from "react";
import { useTheme } from "../Contexts/ThemeContext";

export default function DateInvoiceGST({ invoiceDetailsArr, today }) {
  const {isDark} = useTheme();

  const [invoiceDetails, setInvoiceDetails] = invoiceDetailsArr;

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newInvoiceDetails = {...invoiceDetails, [name]: value}
    setInvoiceDetails(newInvoiceDetails);
    localStorage.setItem("invoiceDetails", JSON.stringify(newInvoiceDetails));
  };
  return (
    <div className="date-invoice-gst">
      <div className="number">
        <label htmlFor="invoice-number">Invoice Number </label>
        <input
          type="number"
          id="invoice-number"
          placeholder="Invoice Number"
          min="0"
          name="invoiceNumber"
          onChange={handleChange}
          value={invoiceDetails.invoiceNumber}
        />
      </div>
      <div className="date">
        <label htmlFor="date">Invoice Date </label>
        <input
          type="date"
          id="date"
          style={{colorScheme: isDark ? "dark" : ""}}
          name="invoiceDate"
          placeholder="Date"
          min="01-01-2024"
          max={today}
          value={invoiceDetails.invoiceDate}
          onChange={handleChange}
        />
      </div>
      <div className="gst-no">
        <label htmlFor="gst-no">GSTIN </label>
        <input
          type="text"
          id="gst-no"
          name="gstNum"
          placeholder="GST Number"
          value={invoiceDetails.gstNum}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
