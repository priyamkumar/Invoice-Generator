import React from "react";

export default function SaveInvoice({ invoicesArr, setInfo, info, totalAmount, totalGst }) {
  const [invoices, setInvoices] = invoicesArr;
  const [setItems, setDetails] = setInfo;
  const [items, details, invoiceDetails, bankDetails] = info;
  const total = totalAmount + totalGst;
  const handleSave = () => {
    if (!invoices.includes(invoiceDetails.invoiceNumber)) {
      let updateInvoices = [...invoices, invoiceDetails.invoiceNumber];
      setInvoices(updateInvoices);
      localStorage.setItem("invoices", JSON.stringify(updateInvoices));
    }
    localStorage.setItem(
      invoiceDetails.invoiceNumber,
      JSON.stringify([...items, details, invoiceDetails, bankDetails, total])
    );
  };

  const handleNew = () => {
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
    localStorage.removeItem("items");
    localStorage.removeItem("details");
  };

  return (
    <div className="save-and-new">
      <button onClick={handleSave}>Save Invoice</button>
      <button onClick={handleNew}>New Invoice</button>
    </div>
  );
}
