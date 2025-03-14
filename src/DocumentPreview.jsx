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
          <h2>INVOICE</h2>
        </div>
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
          <h3>Invoice Details:</h3>
          <p>Invoice Number: {invoice}</p>
          <p>Invoice Date: {date}</p>
          <p>GSTIN: {gst}</p>
        </div>

        <table className="item-table">
          <thead>
            <tr>
              <th>S. No.</th>
              <th>HSN Code</th>
              <th>Particulars</th>
              <th>Quantity</th>
              <th>Unit</th>
              <th>Price</th>
              <th>CGST %</th>
              <th>UTGST %</th>
              <th>IGST %</th>
              <th>Total</th>
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
                <td>
                  {item.cgst}{item.cgst && "%"}
                </td>
                <td>{item.utgst}{item.utgst && "%"}</td>
                <td>{item.igst}{item.igst && "%"}</td>
                <td>₹{item.amount}</td>
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
