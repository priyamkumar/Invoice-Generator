import React, { useEffect, useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import PreviewHeader from "./PreviewHeader";
import PreviewClientInfo from "./PreviewClientInfo";
import PreviewInvoiceDetails from "./PreviewInvoiceDetails";
import PreviewTable from "./PreviewTable";
import PreviewBankDetails from "./PreviewBankDetails";
import PreviewTotals from "./PreviewTotals";
import PreviewTerms from "./PreviewTerms";
import PreviewReceiverSignature from "./PreviewReceiverSignature";
import PreviewSignature from "./PreviewSignature";
import PreviewTitle from "./PreviewTitle";

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
    clientGst
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
        <PreviewTitle />
        <PreviewHeader
          cName={cName}
          cAddress={cAddress}
          cEmail={cEmail}
          cPhone={cPhone}
          gst={gst}
        />
        <div className="client-invoice-details">
          <PreviewClientInfo
            clientName={clientName}
            clientAddress={clientAddress}
            clientGst={clientGst}
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
          <PreviewTotals
            totalAmount={totalAmount}
            totalUtgst={totalUtgst}
            totalCgst={totalCgst}
            totalIgst={totalIgst}
            totalGst={totalGst}
          />
        </div>
        <div className="terms-signatures">
          <PreviewTerms />
          <PreviewReceiverSignature />
          <PreviewSignature cName={cName}/>
        </div>
      </div>
      <div className="btn-div">
        <button onClick={handleDownloadPdf}>Download PDF</button>
      </div>
    </>
  );
};

export default DocumentPreview;
