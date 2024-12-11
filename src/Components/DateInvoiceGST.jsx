import React from "react";
import { useTheme } from "../Contexts/ThemeContext";

export default function DateInvoiceGST({ invoiceDetailsArr, today }) {
  const {isDark} = useTheme();

  const [invoiceDetails, setInvoiceDetails] = invoiceDetailsArr;

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "date":
        setInvoiceDetails((prev) => ({...prev, invoiceDate: value}))
        break;
      case "invoice-number":
        setInvoiceDetails((prev) => ({...prev, invoiceNumber: value}))
        
        break;
      case "gstNumber":
        setInvoiceDetails((prev) => ({...prev, gstNum: value}))
        break;
      default:
        break;
    }
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
          name="invoice-number"
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
          name="date"
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
          name="gstNumber"
          placeholder="GST Number"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
