import React from 'react';

const DocumentPreview = ({ companyInfo, clientInfo, invoiceDetails, items, totalAmount, totalGst }) => {
  return (
    <div className="invoice-preview">
      <div className="header">
        <h2>{companyInfo.name}</h2>
        <p>{companyInfo.address}</p>
        <p>Phone: {companyInfo.phone}</p>
        <p>Email: {companyInfo.email}</p>
      </div>

      <div className="client-info">
        <h3>Bill To:</h3>
        <p>{clientInfo.name}</p>
        <p>{clientInfo.address}</p>
        <p>Phone: {clientInfo.phone}</p>
        <p>Email: {clientInfo.email}</p>
      </div>

      <div className="invoice-details">
        <p>Invoice Number: {invoiceDetails.invoiceNumber}</p>
        <p>Invoice Date: {invoiceDetails.date}</p>
        <p>GSTIN: {invoiceDetails.gstNumber}</p>
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
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.description}</td>
              <td>{item.quantity}</td>
              <td>{item.unit}</td>
              <td>₹{item.price.toFixed(2)}</td>
              <td>{item.cgst}%</td>
              <td>{item.sgst}%</td>
              <td>{item.igst}%</td>
              <td>₹{item.total.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
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
