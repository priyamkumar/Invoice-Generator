import React, { useState } from "react";

export default function InvoiceDetails({details, setDetails}) {
  const handleDetails = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className="container">
      <form >
        <div className="card">
          <label htmlFor="com-Name">Company Name </label>
          <input
            type="text"
            id="com-Name"
            name="cName"
            placeholder="Company Name"
            onChange={handleDetails}
          />
          <label htmlFor="com-address">Address </label>
          <textarea
            id="com-address"
            placeholder="Company Address"
            rows="3"
            cols="20"
            name="cAddress"
            onChange={handleDetails}
          ></textarea>
          <label htmlFor="phone">Phone </label>
          <input
            type="phone"
            id="phone"
            placeholder="Phone"
            name="cPhone"
            onChange={handleDetails}
          />
          <label htmlFor="email">Email </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            name="cEmail"
            onChange={handleDetails}
          />
        </div>

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
          <label htmlFor="client-phone">Phone </label>
          <input
            type="phone"
            id="client-phone"
            placeholder="Phone"
            name="clientPhone"
            onChange={handleDetails}
          />
          <label htmlFor="client-email">Email </label>
          <input
            type="email"
            id="client-email"
            placeholder="Email"
            name="clientEmail"
            onChange={handleDetails}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
