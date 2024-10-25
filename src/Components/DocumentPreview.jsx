import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const DocumentPreview = ({
  items,
  details,
  date,
  invoice,
  gst,
  totalAmount,
  totalGst,
}) => {
  const {
    cAddress,
    cEmail,
    cName,
    cPhone,
    clientAddress,
    clientEmail,
    clientName,
    clientPhone,
  } = details;
  const printRef = useRef();
  const handleDownloadPdf = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element, { scale: 2 }); // scale: 2 for high-quality PDF
    const data = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const imgProps = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("invoice.pdf");
  };

  return (
    <>
      <div className="invoice-preview" ref={printRef}>
        <div className="invoice">
          <h3>INVOICE</h3>
          <p>Input Tax Credit is available on this Invoice</p>
        </div>
        <div className="header">
          <h2>KUMAR ENTERPRISES</h2>
          <p><b>Deals In: Stationery, Printing, Computer Consumable, Photostat, Consumable, Electricals Electronics & Crockery</b></p>
          <p><b>Also Deals In: Furnitute, Woodwork, Aluminium Work, Sanitary Work & AC Service</b></p>
          <p><b>Govt. Contractors & General Order Suppliers</b></p>
          <p><b>S.C.O. NO. 1001-03, 2nd FLOOR, SECTOR 22-B, CHANDIGARH</b></p>
          <p><b>Phone: 0172-3068479, Mobile: 98151-96606</b></p>
          <p><b>GSTIN: 04AHKPK6845Q1ZN</b></p>
          
        </div>
<div className="client-invoice-details">
        <div className="client-info">
          <h4>Billed To:</h4>
          <p><b>M/s {clientName}</b></p>
          <p><b>{clientAddress}</b></p>
          <p><b>GSTIN: {gst}</b></p>
        </div>

        <div className="invoice-details">
          <h4>Invoice Details:</h4>
          <p><b>No. : {invoice}</b></p>
          <p><b>Date : {date}</b></p>
        </div>
        </div>

        <table className="item-table">
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>HSN Code</th>
              <th>Particulars</th>
              <th>QTY.</th>
              <th>Unit</th>
              <th>Rate</th>
              <th>UTGST %</th>
              <th>CGST %</th>
              <th>IGST %</th>
              <th>Amount Before Tax</th>
              <th>Included Tax</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.serial}</td>
                <td>{item.hsn}</td>
                <td>{item.description}</td>
                <td>{item.quantity}</td>
                <td>{item.unit}</td>
                <td>{item.price}</td>
                <td>{item.utgst}{item.utgst && "%"}</td>
                <td>
                  {item.cgst}{item.cgst && "%"}
                </td>
                <td>{item.igst}{item.igst && "%"}</td>
                <td>₹{item.amount}</td>
                <td>₹{(Number(item.amount) + Number(item.cgstAmount) + Number(item.utgstAmount) + Number(item.igstAmount)).toFixed(2)}</td>
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
      <div className="btn-div">
        <button onClick={handleDownloadPdf}>Download PDF</button>
      </div>
    </>
  );
};

export default DocumentPreview;
