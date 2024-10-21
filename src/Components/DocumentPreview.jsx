import React from "react";

const DocumentPreview = ({details}) => {
  const {cAddress, cEmail, cName, cPhone, clientAddress ,clientEmail, clientName, clientPhone} = details
  return (
    <div className="invoice-preview">
      <div className="header">
        <h2>{cName}</h2>
        <p>{cAddress}</p>
        <p>Phone: {cPhone}</p>
        <p>Email: {cEmail}</p>
      </div>

      <div className="client-info">
        <h3>Bill To:</h3>
        <p>{clientName}</p>
        <p>{clientAddress}</p>
        <p>Phone: {clientPhone}</p>
        <p>Email: {clientEmail}</p>
      </div>

      <div className="invoice-details">
        <p>Invoice Number: {}</p>
        <p>Invoice Date: {}</p>
        <p>GSTIN: {}</p>
      </div>

      <table className="item-table">
        <thead>
          <tr>
            <th>S. No.</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Unit</th>
            <th>Price</th>
            <th>CGST</th>
            <th>SGST</th>
            <th>IGST</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>{}</tbody>
      </table>

      <div className="totals">
        <p>Total: ₹{}</p>
        <p>GST: ₹{}</p>
        <b>Grand Total: ₹{}</b>
      </div>
    </div>
  );
};

export default DocumentPreview;
