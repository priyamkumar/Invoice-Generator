import React from "react";

export default function DateInvoiceGST({ date, invoice, gst, today }) {
  const [billDate, setDate] = date;
  const [billNumber, setInvoice] = invoice;
  const [gstNumber, setGst] = gst;

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "date":
        setDate(value);
        break;
      case "invoice-number":
        setInvoice(value);
        break;
      case "gstNumber":
        setGst(value);
        break;
      default:
        break;
    }
  };
  return (
    <div className="date-invoice-gst">
      <div className="number">
        <label htmlFor="invoice-number">Invoice Number: </label>
        <input
          type="number"
          id="invoice-number"
          placeholder="Invoice Number"
          min="0"
          name="invoice-number"
          onChange={handleChange}
        />
      </div>
      <div className="date">
        <label htmlFor="date">Invoice Date: </label>
        <input
          type="date"
          id="date"
          // style={{colorScheme: isDark ? "dark" : ""}}
          name="date"
          placeholder="Date"
          min="01-01-2024"
          max={today}
          value={billDate}
          onChange={handleChange}
        />
      </div>
      <div className="gst-no">
        <label htmlFor="gst-no">GSTIN: </label>
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
