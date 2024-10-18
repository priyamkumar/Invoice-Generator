import React, { useState } from "react";
import InvoiceDetails from "./InvoiceDetails";
import DateInvoiceGST from "./DateInvoiceGST";
import ItemTable from "./ItemTable";
import TotalAmount from "./TotalAmount";

export default function BillInfo() {
  const [items, setItems] = useState([{
    serial: "",
    description: "",
    quantity: "",
    unit: "",
    price: "",
    cgst: "",
    cgstAmount: "",
    sgst: "",
    sgstAmount: "",
    igst: "",
    igstAmount: "",
    Amount: ""
  }]);
  return (
      <div className="invoice-details">
      <InvoiceDetails/>
        <DateInvoiceGST />
        <ItemTable items={items} setItems={setItems}/>
        <TotalAmount/>
      </div>
  );
}
