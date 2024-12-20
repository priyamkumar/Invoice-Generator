import React from "react";
import { useInvoice } from "../Contexts/InvoiceContext";

export default function SaveInvoice({setInfo, info, totalAmount, totalGst }) {
  const {invoices, setInvoices, setEdit, setEditData} = useInvoice()
  const [setItems, setDetails, setInvoiceDetails, setBankDetails] = setInfo;
  const [items, details, invoiceDetails, bankDetails] = info;
  const total = totalAmount + totalGst;
  let today = new Date().toISOString().split("T")[0];

  const handleSave = () => {
    setEdit(false);
    setEditData([]);
    if (!invoices.includes(invoiceDetails.invoiceNumber)) {
      let updateInvoices = [...invoices, invoiceDetails.invoiceNumber];
      setInvoices(updateInvoices);
      localStorage.setItem("invoices", JSON.stringify(updateInvoices));
    }
    localStorage.setItem(
      invoiceDetails.invoiceNumber,
      JSON.stringify([...items, details, invoiceDetails, bankDetails, total])
    );
    alert("Invoice Saved")
  };

  const handleNew = () => {
    setEdit(false);
    setEditData([]);
    setItems([
      {
        serial: 1,
        hsn: "",
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
    setDetails({
      cName: "Company Name",
      cAddress: "",
      cPhone: "",
      cEmail: "",
      clientName: "",
      clientAddress: "",
      clientPhone: "",
      clientEmail: "",
      clientGst: "",
    });
    setInvoiceDetails({
      invoiceNumber: String(invoices.length + 1),
      invoiceDate: today,
      gstNum: "",
    });
    setBankDetails({
      bankName: "",
      bankAccountNumber: 0,
      bankBranchIfsc: "",
    })
    localStorage.removeItem("items");
    localStorage.removeItem("details");
    localStorage.removeItem("invoiceDetails");
    localStorage.removeItem("bankDetails");
  };

  return (
    <div className="save-and-new">
      <button onClick={handleSave}>Save Invoice</button>
      <button onClick={handleNew}>New Invoice</button>
    </div>
  );
}
