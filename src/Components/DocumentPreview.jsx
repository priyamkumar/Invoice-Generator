import React, { useEffect, useRef } from "react";
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
  amountInWords,
  totalCgst,
  totalUtgst,
  totalIgst,
  bankName,
  bankAccountNumber,
  bankBranchIfsc
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

  useEffect(() => {}, [totalAmount, totalGst]);

  return (
    <>
      <div className="invoice-preview" ref={printRef}>
        <div className="invoice">
          <h3>INVOICE</h3>
          <p>Input Tax Credit is available on this Invoice</p>
        </div>
        <div className="header">
          <h2>KUMAR ENTERPRISES</h2>
          <p>
            <b>
              Deals in: Stationery, Printing, Computer Consumable, Photostat,
              Consumable, Electricals, Electronics & Crockery
              <br />
              Also Deals In: Furniture, Woodwork, Aluminum Work, Sanitary Work &
              AC Service
              <br />
              Govt. Contractors & General Order Suppliers
            </b>
          </p>
          <p>
            <b>S.C.O. NO. 1001-03, 2nd FLOOR, SECTOR 22-B, CHANDIGARH</b>
          </p>
          <p>
            <b>Phone: 0172-3068479, Mobile: 98151-96606</b>
          </p>
          <p>
            <b>GSTIN: 04AHKPK6845Q1ZN</b>
          </p>
        </div>
        <div className="client-invoice-details">
          <div className="client-info">
            <p>
              <b>Bill To</b>
            </p>
            <p>M/s {clientName}</p>
            <p>{clientAddress}</p>
            <p>GSTIN: {gst}</p>
          </div>

          <div className="invoice-details">
            <p>
              <b>Invoice Details</b>
            </p>
            <p>No. : {invoice}</p>
            <p>Date : {date}</p>
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
              <th>UTGST</th>
              <th>CGST</th>
              <th>IGST</th>
              <th>Amount Before Tax</th>
              <th>Included Tax</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td className="table-cell">{item.serial}</td>
                <td className="table-cell">{item.hsn}</td>
                <td className="table-cell">{item.description}</td>
                <td className="table-cell">{item.quantity}</td>
                <td className="table-cell">{item.unit}</td>
                <td className="table-cell">₹{item.price}</td>
                <td className="table-cell">
                  ₹{Math.round(item.utgstAmount)} {`(${item.utgst}%)`}
                </td>
                <td className="table-cell">
                  ₹{Math.round(item.cgstAmount)} {`(${item.cgst}%)`}
                </td>
                <td className="table-cell">
                  ₹{Math.round(item.igstAmount)} {`(${item.igst}%)`}
                </td>
                <td className="table-cell">₹{Math.round(item.amount)}</td>
                <td className="table-cell">
                  ₹
                  {Math.round(
                    Number(item.amount) +
                      Number(item.cgstAmount) +
                      Number(item.utgstAmount) +
                      Number(item.igstAmount)
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="totals-bank-details">
          <div className="bank-details">
            <p>
              <b>Total Invoice Amount in Words</b>
            </p>
            <p className="words">
              {amountInWords} {amountInWords && " Rupees only"}
            </p>
            <p className="text-center">
              <b>Bank Details:</b>
            </p>
            <ul>
              <li>
                <b>Bank Name:</b> {bankName}
              </li>
              <li>
                <b>Bank Account Number:</b> {bankAccountNumber}
              </li>
              <li>
                <b>Bank Branch IFSC:</b> {bankBranchIfsc}
              </li>
            </ul>
          </div>
          <div className="gst-amount"></div>
          <div className="totals">
            <p>Total: ₹{totalAmount}</p>
            <p>UTGST: ₹{totalUtgst}</p>
            <p>CGST: ₹{totalCgst}</p>
            <p>IGST: ₹{totalIgst}</p>
            <p>Total GST: ₹{totalGst}</p>
            <b>Grand Total: ₹{totalAmount + totalGst}</b>
          </div>
        </div>
        <div className="terms-signatures">
          <div className="terms">
            <p>
              <b>Terms and Conditions:</b>
            </p>
            <ol>
              <li>Goods once accepted will not be taken back.</li>
              <li>
                If payment is not made within 15 days, Interest @ 24% will be
                charged extra.
              </li>
              <li>All disputes subject to Chandigarh Jurisdiction.</li>
            </ol>
          </div>
          <div className="receiver-signatures">
            <p>
              <b>Receiver's Signature with seal</b>
            </p>
          </div>
          <div className="signatures">
            <p>
              Certified that the particulars given above are true and correct.
            </p>
            <p className="text-center">
              <b>For KUMAR ENTERPRISES</b>
            </p>
            <p className="authorized">
              <b>Authorised Signatory</b>
            </p>
          </div>
        </div>
      </div>
      <div className="btn-div">
        <button onClick={handleDownloadPdf}>Download PDF</button>
      </div>
    </>
  );
};

export default DocumentPreview;
