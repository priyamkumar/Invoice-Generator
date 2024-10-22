import React, { useState, useRef } from "react";
import InvoiceDetails from "./InvoiceDetails";
import DateInvoiceGST from "./DateInvoiceGST";
import ItemTable from "./ItemTable";
import TotalAmount from "./TotalAmount";
import PreviewHeading from "./PreviewHeading";
import DocumentPreview from "./DocumentPreview";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

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

  const handleDownloadPdf = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element, { scale: 2 });  // scale: 2 for high-quality PDF
    const data = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4"); // 'p' for portrait, 'a4' size
    const pdfWidth = 210; // A4 width in mm
    const elementHeight = element.offsetHeight; // Get the dynamic height of your element
    const pdfHeight = (elementHeight * pdfWidth) / element.offsetWidth;
    
    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("invoice.pdf");
    
    
  };

  return (
    <div className="invoice-details">
      <InvoiceDetails details={details} setDetails={setDetails}/>
      <DateInvoiceGST date={[invoiceDate, setInvoiceDate]} invoice={[invoiceNumber, setInvoiceNumber]} gst={[gstNum, setGstNum]}/>
      <ItemTable items={items} setItems={setItems} />
      <TotalAmount totalAmount={totalAmount} totalGst={totalGst} />
      <PreviewHeading />
      <div ref={printRef}><DocumentPreview items={items} details={details} date={invoiceDate} invoice={invoiceNumber} gst={gstNum} totalAmount={totalAmount} totalGst={totalGst}/>
      </div>
      <div className="btn-div">
      <button onClick={handleDownloadPdf}>Download PDF</button>
    </div>
    </div>
  );
}
