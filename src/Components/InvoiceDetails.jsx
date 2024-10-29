import React, { useState } from "react";

export default function InvoiceDetails({ details, setDetails }) {
  const handleDetails = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className="container">
        <div className="card">
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
