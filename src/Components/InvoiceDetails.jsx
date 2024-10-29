import React, { useState } from "react";

export default function InvoiceDetails({
  details,
  setDetails,
  setDocType,
}) {
  const handleDetails = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleType = (e) => {
    const {id} = e.target;
    switch (id) {
      case "invoice":
        setDocType("invoice");
        break;
      case "quotation":
        setDocType("quotation");
        break;
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="invoice-or-quotation">
          <label htmlFor="invoice">
            Invoice
            <input
              type="radio"
              id="invoice"
              name="invoice-or-quotation"
              onChange={handleType}
              defaultChecked
            />
          </label>
          <label htmlFor="quotation">
            Quotation
            <input
              type="radio"
              id="quotation"
              name="invoice-or-quotation"
              onChange={handleType}
            />
          </label>
        </div>
        <label htmlFor="cli-Name">Client Name </label>
        <input
          type="text"
          id="cli-Name"
          placeholder="Client Name"
          name="clientName"
          onChange={handleDetails}
        />
        <label htmlFor="cli-address">Address </label>
        <textarea
          id="cli-address"
          placeholder="Client Address"
          rows="3"
          cols="20"
          name="clientAddress"
          onChange={handleDetails}
        ></textarea>
      </div>
    </div>
  );
}
