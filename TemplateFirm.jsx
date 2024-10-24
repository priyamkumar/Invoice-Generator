import React from 'react';
import './Invoice.css'; // Optional: Create this file for CSS styling.

const TemplateFirm = () => {
  return (
    <div className="invoice-container">
      <div className="header">
        <h1>KUMAR ENTERPRISES</h1>
        <p>
          Deals in: Stationery, Printing, Computer Consumable, Photostat, Consumable, Electricals, Electronics & Crockery<br />
          Furniture, Woodwork, Aluminum Work Sanitary Work & AC Service<br />
          Govt. Contractors & General Order Suppliers
        </p>
        <p>S.C.O. NO. 1001-03, 2nd FLOOR, SECTOR 22-B, CHANDIGARH</p>
        <p>GSTIN: 04AHKPK6845Q12N</p>
        <p>Phone: 0172-3068479, Mobile: 98151-96606</p>
      </div>

      <div className="invoice-details">
        <div>
          <p><strong>Invoice No:</strong> 9151</p>
          <p><strong>Date:</strong> ___________</p>
        </div>
        <div>
          <p><strong>M/s:</strong> ___________</p>
          <p><strong>GSTIN:</strong> ___________</p>
        </div>
      </div>

      <table className="invoice-table">
        <thead>
          <tr>
            <th>Sr.</th>
            <th>HSN No./Code</th>
            <th>PARTICULARS</th>
            <th>QTY</th>
            <th>Rate</th>
            <th>UTGST %</th>
            <th>UTGST Amount</th>
            <th>CGST %</th>
            <th>CGST Amount</th>
            <th>IGST %</th>
            <th>IGST Amount</th>
            <th>Amount Before Tax</th>
            <th>Included Tax</th>
          </tr>
        </thead>
        <tbody>
          {/* Repeat the following <tr> for each item */}
          <tr>
            <td>1</td>
            <td>_____</td>
            <td>_____</td>
            <td>_____</td>
            <td>_____</td>
            <td>_____</td>
            <td>_____</td>
            <td>_____</td>
            <td>_____</td>
            <td>_____</td>
            <td>_____</td>
            <td>_____</td>
            <td>_____</td>
          </tr>
        </tbody>
      </table>

      <div className="totals">
        <p><strong>Total Invoice Amount in Words:</strong> ____________________</p>

        <div className="total-amount">
          <p><strong>UTGST:</strong> ___________</p>
          <p><strong>CGST:</strong> ___________</p>
          <p><strong>IGST:</strong> ___________</p>
          <p><strong>Tax Amount GST:</strong> ___________</p>
          <p><strong>Total Amount:</strong> ___________</p>
        </div>
      </div>

      <div className="bank-details">
        <p><strong>Bank Name:</strong> ___________</p>
        <p><strong>Bank Account Number:</strong> ___________</p>
        <p><strong>Bank Branch IFSC:</strong> ___________</p>
      </div>

      <div className="terms">
        <p><strong>Terms and Conditions:</strong></p>
        <ul>
          <li>Goods once accepted will not be taken back.</li>
          <li>If payment is not made within 15 days, Interest @ 24% will be charged extra.</li>
          <li>All disputes subject to Chandigarh Jurisdiction.</li>
        </ul>
      </div>

      <div className="signatures">
        <p>Receiver's Signature with seal</p>
        <p>Authorized Signatory for KUMAR ENTERPRISES</p>
      </div>
    </div>
  );
};

export default TemplateFirm;
