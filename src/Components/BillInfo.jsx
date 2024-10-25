import React, { useState } from "react";
import InvoiceDetails from "./InvoiceDetails";
import DateInvoiceGST from "./DateInvoiceGST";
import ItemTable from "./ItemTable";
import TotalAmount from "./TotalAmount";
import PreviewHeading from "./PreviewHeading";
import DocumentPreview from "./DocumentPreview";

export default function BillInfo() {
  const [items, setItems] = useState([
    {
      serial: 1,
      hsn:"",
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

  const [amountInWords, setAmountInWords] = useState("");

  const totalAmount = items.reduce((acc, cur) => acc + parseFloat(cur.amount || 0), 0);
  const totalGst = items.reduce((acc, cur) => acc + parseFloat(cur.cgstAmount || 0) + parseFloat(cur.utgstAmount || 0) + parseFloat(cur.igstAmount || 0), 0);

  const [invoiceNumber, setInvoiceNumber] = useState(1);
  const [invoiceDate, setInvoiceDate] = useState("2024-01-01");
  const [gstNum, setGstNum] = useState();

  const [invoices, setInvoices] = useState([]);

  return (
    <div className="invoice-details">
      <InvoiceDetails details={details} setDetails={setDetails}/>
      <DateInvoiceGST date={[invoiceDate, setInvoiceDate]} invoice={[invoiceNumber, setInvoiceNumber]} gst={[gstNum, setGstNum]}/>
      <ItemTable items={items} setItems={setItems} />
      <TotalAmount totalAmount={totalAmount} totalGst={totalGst} />
      <PreviewHeading />
      <DocumentPreview items={items} details={details} date={invoiceDate} invoice={invoiceNumber} gst={gstNum} totalAmount={totalAmount} totalGst={totalGst}/>
    </div>
  );
}
