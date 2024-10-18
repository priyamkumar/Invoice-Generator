import React, { useState } from "react";
import InvoiceDetails from "./InvoiceDetails";
import DateInvoiceGST from "./DateInvoiceGST";
import ItemTable from "./ItemTable";
import TotalAmount from "./TotalAmount";

export default function BillInfo() {
  const [items, setItems] = useState([{
    serial: 0,
    description: "",
    quantity: 0,
    unit: "",
    price: 0,
    cgst: "",
    cgstAmount: 0,
    sgst: "",
    sgstAmount: 0,
    igst: "",
    igstAmount: 0,
    Amount: 0
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
