import React, { useState, useRef } from "react";
import InvoiceDetails from "./InvoiceDetails";
import DateInvoiceGST from "./DateInvoiceGST";
import ItemTable from "./ItemTable";
import TotalAmount from "./TotalAmount";
import PreviewPdfButton from "./PreviewPdfButton";
import DocumentPreview from "./DocumentPreview";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import html2pdf from 'html2pdf.js';

export default function BillInfo() {
  const [items, setItems] = useState([
    {
      serial: 0,
      description: "",
      quantity: 1,
      unit: "",
      price: 0,
      cgst: "",
      cgstAmount: 0,
      utgst: "",
      utgstAmount: 0,
      igst: "",
      igstAmount: 0,
      amount: 0,
    },
  ]);

  const [details, setDetails] = useState({
    cName: "",
    cAddress: "",
    cPhone: "",
    cEmail: "",
    clientName: "",
    clientAddress: "",
    clientPhone: "",
    clientEmail: "",
  });

  const totalAmount = items.reduce((acc, cur) => acc + parseFloat(cur.amount || 0), 0);
  const totalGst = items.reduce((acc, cur) => acc + parseFloat(cur.cgstAmount || 0) + parseFloat(cur.utgstAmount || 0) + parseFloat(cur.igstAmount || 0), 0);

  const [invoiceNumber, setInvoiceNumber] = useState(1);
  const [invoiceDate, setInvoiceDate] = useState("2024-01-01");
  const [gstNum, setGstNum] = useState();

  const printRef = useRef();

  // const handleDownloadPdf = async () => {
  //   const element = printRef.current;
  //   const canvas = await html2canvas(element, { scale: 2 });  // scale: 2 for high-quality PDF
  //   const data = canvas.toDataURL("image/png");
  //   const pdf = new jsPDF("p", "mm", "a4");
    
  //   const imgProps = pdf.getImageProperties(data);
  //   const pdfWidth = pdf.internal.pageSize.getWidth();
  //   const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

  //   pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
  //   pdf.save(`${invoiceNumber}Invoice.pdf`);
  // };

  const handleDownloadPdf = () => {
    const element = printRef.current;
    
    const options = {
      margin: 1,
      filename: 'invoice.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
  
    html2pdf().set(options).from(element).save();
  };

  return (
    <div className="invoice-details">
      <InvoiceDetails details={details} setDetails={setDetails}/>
      <DateInvoiceGST date={[invoiceDate, setInvoiceDate]} invoice={[invoiceNumber, setInvoiceNumber]} gst={[gstNum, setGstNum]}/>
      <ItemTable items={items} setItems={setItems} />
      <TotalAmount totalAmount={totalAmount} totalGst={totalGst} />
      <PreviewPdfButton />
      <div ref={printRef}><DocumentPreview items={items} details={details} date={invoiceDate} invoice={invoiceNumber} gst={gstNum} totalAmount={totalAmount} totalGst={totalGst}/>
      </div>
      <button onClick={handleDownloadPdf}>Download PDF</button>
    </div>
  );
}
