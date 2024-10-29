import React, { useEffect, useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import PreviewHeader from "./PreviewHeader";
import PreviewClientInfo from "./PreviewClientInfo";
import PreviewInvoiceDetails from "./PreviewInvoiceDetails";
import PreviewTable from "./PreviewTable";
import PreviewBankDetails from "./PreviewBankDetails";

const DocumentPreview = ({
  docType,
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
  bankBranchIfsc,
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
          <h3>{docType.toUpperCase()}</h3>
          <p>Input Tax Credit is available on this Invoice</p>
        </div>
        <PreviewHeader />

        <div className="client-invoice-details">
          <PreviewClientInfo
            clientName={clientName}
            clientAddress={clientAddress}
            gst={gst}
          />

          <PreviewInvoiceDetails invoice={invoice} date={date} />
        </div>
        <PreviewTable items={items} />

        <div className="totals-bank-details">
          <PreviewBankDetails
            amountInWords={amountInWords}
            bankName={bankName}
            bankAccountNumber={bankAccountNumber}
            bankBranchIfsc={bankBranchIfsc}
          />
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
