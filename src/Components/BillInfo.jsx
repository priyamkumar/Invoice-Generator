import React, { useState } from "react";
import InvoiceDetails from "./InvoiceDetails";
import DateInvoiceGST from "./DateInvoiceGST";
import ItemTable from "./ItemTable";
import TotalAmount from "./TotalAmount";
import PreviewPdfButton from "./PreviewPdfButton";
import DocumentPreview from "./DocumentPreview";

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

  const [invoiceNumber, setInvoiceNumber] = useState();
  const [invoiceDate, setInvoiceDate] = useState();
  const [gstNum, setGstNum] = useState();

  return (
    <div className="invoice-details">
      <InvoiceDetails details={details} setDetails={setDetails}/>
      <DateInvoiceGST date={[invoiceDate, setInvoiceDate]} invoice={[invoiceDate, setInvoiceDate]} gst={[gstNum, setGstNum]}/>
      <ItemTable items={items} setItems={setItems} />
      <TotalAmount items={items} />
      <PreviewPdfButton />
      <DocumentPreview details={details}/>
    </div>
  );
}
