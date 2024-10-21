import React from "react";

const DocumentPreview = ({items, details, date, invoice, gst, totalAmount, totalGst}) => {
  const {cAddress, cEmail, cName, cPhone, clientAddress ,clientEmail, clientName, clientPhone} = details;
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
        <p>Invoice Number: {invoice}</p>
        <p>Invoice Date: {date}</p>
        <p>GSTIN: {gst}</p>
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
            <th>UTGST</th>
            <th>IGST</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>{items.map((item,index) => (
          <tr key={index}>
            <td>{item.serial}</td>
            <td>{item.description}</td>
            <td>{item.quantity}</td>
            <td>{item.unit}</td>
            <td>{item.price}</td>
            <td>{item.cgst}</td>
            <td>{item.utgst}</td>
            <td>{item.igst}</td>
            <td>{item.amount}</td>
          </tr>
        ))}</tbody>
      </table>

      <div className="totals">
        <p>Total: ₹{totalAmount.toFixed(2)}</p>
        <p>GST: ₹{totalGst.toFixed(2)}</p>
        <b>Grand Total: ₹{(totalAmount + totalGst).toFixed(2)}</b>
      </div>
    </div>
  );
};

export default DocumentPreview;
